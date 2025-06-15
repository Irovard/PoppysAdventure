import random
from PIL import Image

def get_randomized_value(group):
    probs = [0.5 ** (i + 1) for i in range(len(group))]
    total = sum(probs)
    normalized_probs = [p / total for p in probs]

    r = random.random()
    cumulative = 0
    for val, prob in zip(group, normalized_probs):
        cumulative += prob
        if r < cumulative:
            return val
    return group[-1]  # fallback

def jpg_to_js_array(image_path, output_path, color_map, randomize_values=[]):
    img = Image.open(image_path).convert('RGB')
    width, height = img.size

    # Map first values to full groups
    randomize_dict = {group[0]: group for group in randomize_values}

    map_data = []
    for y in range(height):
        row = []
        for x in range(width):
            color = img.getpixel((x, y))
            value = color_map.get(color, 0)

            if value in randomize_dict:
                value = get_randomized_value(randomize_dict[value])

            row.append(value)
        map_data.append(row)

    with open(output_path, 'w') as f:
        f.write("export const map = ")
        f.write(str(map_data).replace('],', '],\n'))

    print("✅ Image converted to '{}' as map".format(output_path))
    print("🖼️  Image size: {}x{}".format(width, height))
    print("🎨 Custom color map: {} entries".format(len(color_map)))
    print("🎲 Randomization groups: {}".format(randomize_values))


# Example usage
if __name__ == "__main__":
    color_mapping = {
        (0, 0, 0): 0,       # void
        (200, 194, 122): 1, # dirt
        (231, 160, 100): 2, # wall
        (54, 168, 243): 3,  # water
        (200, 230, 34): 4,  # grass
        (0, 175, 80): 7,    # dark_grass
        (193, 218, 240): 8, # stone
        (67, 101, 164): 9,  # stone_bricks
        (255, 255, 255): 10,# smooth_stone
        (239, 190, 92): 11, # sand
        (116, 59, 13): 12,  # wood
        (84, 42, 0): 13,    # log
        (147, 246, 253): 14,# snow
        (65, 156, 200): 15, # ice
        (32, 142, 12): 16,  # tree
        (187, 74, 154): 17, # bookshelf
        (249, 254, 89): 18, # fire_place
    }

    jpg_to_js_array(
        image_path="assets/map/map.png",
        output_path="assets/map/map.js",
        color_map=color_mapping,
        randomize_values=[(4, 5, 4, 6)]
    )
