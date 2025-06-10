export class Camera {
  constructor(viewWidth, viewHeight) {
    this.viewWidth = viewWidth;
    this.viewHeight = viewHeight;
  }

  getView(player, tileSize) {
    return {
      x: player.x * tileSize - this.viewWidth / 2,
      y: player.y * tileSize - this.viewHeight / 2
    };
  }
}