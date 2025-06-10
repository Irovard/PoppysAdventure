import { Movement } from './movement.js';
import { Camera } from './camera.js';
import { tileTypes, tileMap } from './tiledata.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const TILE_SIZE = 16;

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = { x: 5, y: 5 };
    this.movement = new Movement(this.player);
    this.camera = new Camera(canvas.width, canvas.height);
    this.tiles = {};
    this.initTiles();
    this.initInput();
    this.loop();
  }

  initTiles() {
    for (const [key, path] of Object.entries(tileTypes)) {
      const img = new Image();
      img.src = path;
      this.tiles[key] = img;
    }
  }

  initInput() {
    window.addEventListener('keydown', (e) => this.movement.handleInput(e));
  }

  draw() {
    const cam = this.camera.getView(this.player);
    for (let y = 0; y < tileMap.length; y++) {
      for (let x = 0; x < tileMap[y].length; x++) {
        const tileKey = tileMap[y][x];
        const tileImage = this.tiles[tileKey];
        if (tileImage) {
          this.ctx.drawImage(
            tileImage,
            x * TILE_SIZE - cam.x,
            y * TILE_SIZE - cam.y,
            TILE_SIZE,
            TILE_SIZE
          );
        }
      }
    }
    // Player
    this.ctx.fillStyle = '#e74c3c';
    this.ctx.fillRect(
      this.player.x * TILE_SIZE - cam.x,
      this.player.y * TILE_SIZE - cam.y,
      TILE_SIZE,
      TILE_SIZE
    );
  }

  loop() {
    requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.draw();
  }
}

new Game(ctx);
