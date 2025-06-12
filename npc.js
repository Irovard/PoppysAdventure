export class NPC {
  constructor(name, image, paths = [{ x: 0, y: 0 }]) {
    this.name = name;
    this.paths = paths; // Array of {x, y} objects representing the NPC's path
    if (typeof image === 'string') {
      this.image = new Image();
      this.image.src = image;
    } else {
      for (const key in image) {
        if (image[key] instanceof HTMLImageElement) {
          image[key].src = image[key].src; // Ensure the image is loaded
        }
      }
    }
    this.currentPathIndex = 0;
    this.position = this.paths.length > 0 ? { ...this.paths[0] } : { x: 0, y: 0 };
    this.activeImage = this.image;
  }

  walkToNextPath() {
    if (this.paths.length === 0) return;
    this.currentPathIndex = (this.currentPathIndex + 1) % this.paths.length;
    this.position = { ...this.paths[this.currentPathIndex] };
  }

  switchToNextImage() {
    if (typeof this.image === 'object') {
      const keys = Object.keys(this.image);
      if (keys.length > 0) {
        const nextKey = keys[(keys.indexOf(this.activeImage) + 1) % keys.length];
        this.activeImage = this.image[nextKey];
      }
    } else {
      this.activeImage = this.image; // If it's a single image, do nothing
    }
  }

  reset() {
    this.currentPathIndex = 0;
    this.position = this.paths.length > 0 ? { ...this.paths[0] } : { x: 0, y: 0 };
    this.activeImage = this.image;
  }

  getCurrentPosition() {
    return { ...this.position };
  }
}