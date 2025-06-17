export class Camera {
  constructor() {
    this.viewWidth = window.innerWidth;
    this.viewHeight = window.innerHeight;
  }

  getView(player, tileSize) {
    const centerX = player.x * tileSize;
    const centerY = player.y * tileSize;
    const x = Math.floor(centerX - this.viewWidth / 2 + tileSize / 2);
    const y = Math.floor(centerY - this.viewHeight / 2 + tileSize / 2);

    return { x, y };
  }
}
