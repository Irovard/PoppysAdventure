export class Camera {
  constructor(viewWidth, viewHeight) {
    this.viewWidth = viewWidth;
    this.viewHeight = viewHeight;
  }

  getView(player) {
    return {
      x: player.x * 32 - this.viewWidth / 2 + 16,
      y: player.y * 32 - this.viewHeight / 2 + 16
    };
  }
}