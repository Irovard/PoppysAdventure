import { onIce } from './tiledata.js';

export class Player {
  constructor(map, npcHandler) {
    this.startingPosition = { x: 40, y: 50 }; // Default starting position 2,1
    this.tileMap = map;
    this.x = this.startingPosition.x;
    this.y = this.startingPosition.y;
    this.mapWidth = this.tileMap[0].length;
    this.mapHeight = this.tileMap.length;
    this.npcHandler = npcHandler; // Reference to NPC handler
    this.img = new Image();
    this.img.src = "./assets/skins/player.png"; // Path to player image

    this.maxFreeze = 200; // Maximum freeze time
    this.freeze = this.maxFreeze;
  }

  freezePlayer() {
    if (this.freeze > 0) {
      this.freeze--;
    }
    else {
      // Reset player position if freeze timer reaches zero
      this.setPosition(this.startingPosition.x, this.startingPosition.y);
      this.freeze = this.maxFreeze; // Reset freeze timer
    }
  }

  unfreezePlayer() {
    if (this.freeze < this.maxFreeze) {
      this.freeze++;
    }
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  isBlocked(x, y) {
    // Check for npc
    if (this.npcHandler.blockTiles.find(pos => pos.x === x && pos.y === y)) {
      return true;
    }

    // Check for tile
    const blockedTiles = [0, 2, 3, 9, 13, 17, 18]; // Blocked tiles
    const tile = this.tileMap[y] && this.tileMap[y][x];
    return blockedTiles.includes(tile);
  }

  move(dx, dy) {
    const newX = Math.max(0, Math.min(this.mapWidth - 1, this.x + dx));
    const newY = Math.max(0, Math.min(this.mapHeight - 1, this.y + dy));
    if (!this.isBlocked(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  runPlayer() {

    if (onIce(this.x, this.y)) {
      this.freezePlayer();
    }
    else {
      this.unfreezePlayer();
    }

  }
}