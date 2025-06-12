import { isBlocked } from './tiledata.js';

export class Player {
  constructor(x = 0, y = 0, mapWidth = 16, mapHeight = 16) {
    this.x = x;
    this.y = y;
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.img = new Image();
    this.img.src = "./assets/skins/player.png"; // Path to player image
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    const newX = Math.max(0, Math.min(this.mapWidth - 1, this.x + dx));
    const newY = Math.max(0, Math.min(this.mapHeight - 1, this.y + dy));
    if (!isBlocked(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }
}