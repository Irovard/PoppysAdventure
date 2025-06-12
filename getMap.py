from PIL import Image
import random

def build_randomize_map(groups):
    val_to_group = {}
    for group in groups:
        weights = [0.5 ** i for i in range(len(group))]
        total = sum(weights)
        norm_weights = [w / total for w in weights]
        for val in group:
            val_to_group[val] = (group, norm_weights)
    return val_to_group

def jpg_to_js_array(
    image_path,
    output_path="output.js",
    variable_name="imageData",
    color_map=None,
    randomize_values=None,
):
    img = Image.open(image_path).convert("RGB")
    width, height = img.size
    pixels = list(img.getdata())

    # Step 1: Convert flat pixels into 2D
    pixel_2d = [pixels[i * width:(i + 1) * width] for i in range(height)]

    # Step 2: Map RGB to values
    if color_map is None:
        raise ValueError("You must provide a color_map with RGB → int mappings!")

    mapped = []
    for row in pixel_2d:
        mapped_row = []
        for rgb in row:
            if rgb in color_map:
                mapped_row.append(color_map[rgb])
            else:
                mapped_row.append(0)
        mapped.append(mapped_row)

    # Step 3: Apply randomization
    if randomize_values:
        value_map = build_randomize_map(randomize_values)
        for y in range(len(mapped)):
            for x in range(len(mapped[y])):
                val = mapped[y][x]
                if val in value_map:
                    group, weights = value_map[val]
                    mapped[y][x] = random.choices(group, weights=weights)[0]

    # Step 4: Write to JS file
    js_array = f"export const {variable_name} = [\n"
    for row in mapped:
        js_array += "  [" + ", ".join(map(str, row)) + "],\n"
    js_array += "];\n"

    with open(output_path, "w") as f:
        f.write(js_array)

    print(f"✅ Image converted to '{output_path}' as {variable_name}")
    print(f"🖼️ Image size: {width}x{height}")
    print(f"🎨 Custom color map: {len(color_map)} entries")
    if randomize_values:
        print(f"🎲 Randomization groups: {randomize_values}")


color_mapping = {
    (255, 255, 255): 0,   # white
    (0, 0, 0): 9,         # black
    (0, 255, 0): 1,       # green
    (0, 0, 255): 2        # blue
}

jpg_to_js_array(
    image_path="map.png",
    output_path="map.js",
    variable_name="map",
    color_map=color_mapping,
    randomize_values=[(3,4), (7,8)],
)
