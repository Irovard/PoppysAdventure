import { onIce } from './tiledata.js';

export class Player {
  constructor(map, npcHandler) {
    this.startingPosition = { x: 6, y: 319 };    // Default starting position: 2,1
    this.startingPositionL2 = { x: 97, y: 190 };  // Default starting position for level2: 97, 190 
    this.tileMap = map;
    this.x = this.startingPosition.x;
    this.y = this.startingPosition.y;
    this.mapWidth = this.tileMap[0].length;
    this.mapHeight = this.tileMap.length;
    this.npcHandler = npcHandler; // Reference to NPC handler
    this.img = new Image();
    this.img.src = "./assets/skins/player.png"; // Path to player image

    this.maxSpeed = 10; // Maximum speed 
    this.speed = { max: this.maxSpeed, timeout: 0 }; // Player movement speed (let max, let timeout)

    this.maxFreeze = 650; // Maximum freeze time
    this.freeze = this.maxFreeze;
    this.snowflakeImg = new Image();
    this.snowflakeImg.src = "./assets/skins/snowflake.png";

    this.blockedTiles = [0, 2, 3, 9, 13, 17, 18, 22, 23, 24];
  }

  freezePlayer() {
    this.speed.max = 20;
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
    this.speed.max = this.maxSpeed;
    if (this.freeze < this.maxFreeze) {
      this.freeze++;
    }
  }

  drawFreezeIndicator(ctx, canvas) {
    if (this.freeze === this.maxFreeze) return;

    const snowflakes = Math.ceil((this.freeze / this.maxFreeze) * 5);
    const size = 32; // Size of each snowflake icon
    const padding = 8; // Space between icons
    const y = canvas.height - size - 10; // 10px from bottom

    for (let i = 0; i < snowflakes; i++) {
      ctx.drawImage(
        this.snowflakeImg,
        10 + i * (size + padding), // 10px from left, then spaced
        y,
        size,
        size
      );
    }
  }

  runPlayer(ctx, canvas, inputKeys) {
    this.move(inputKeys);

    if (onIce(this.x, this.y)) {
      this.freezePlayer();
    }
    else {
      this.unfreezePlayer();
    }
    // console.log(`Player position: (${this.x}, ${this.y}), Freeze: ${this.freeze}`);
    this.drawFreezeIndicator(ctx, canvas);
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
    const tile = this.tileMap[y] && this.tileMap[y][x];
    return this.blockedTiles.includes(tile);
  }

  move(inputKeys) {
    let dx = 0, dy = 0;
    if ((inputKeys.has('ArrowUp') || inputKeys.has('w')) && this.speed.timeout === 0) dy = -1;
    if ((inputKeys.has('ArrowDown') || inputKeys.has('s')) && this.speed.timeout === 0) dy = 1;
    if ((inputKeys.has('ArrowLeft') || inputKeys.has('a')) && this.speed.timeout === 0) dx = -1;
    if ((inputKeys.has('ArrowRight') || inputKeys.has('d')) && this.speed.timeout === 0) dx = 1;
    if (dx !== 0 || dy !== 0) {
      this.speed.timeout = this.speed.max;
    }

    const newX = Math.max(0, Math.min(this.mapWidth - 1, this.x + dx));
    const newY = Math.max(0, Math.min(this.mapHeight - 1, this.y + dy));
    if (!this.isBlocked(newX, this.y)) {
      this.x = newX;
    }
    if (!this.isBlocked(this.x, newY)) {
      this.y = newY;
    }
    if (this.speed.timeout > 0) {
      this.speed.timeout--;
    }
  }
}