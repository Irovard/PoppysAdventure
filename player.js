export class Player {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x = Math.max(0, Math.min(15, this.x + dx));
    this.y = Math.max(0, Math.min(15, this.y + dy));
  }
}