import { Movement } from './movement.js';
import { Camera } from './camera.js';
import { tileTypes, tileMap } from './tiledata.js';
import { Renderer } from './renderer.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const TILE_SIZE = 64;

// Keep graphics pixelated
ctx.imageSmoothingEnabled = false;

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = { x: 5, y: 5 };
    this.movement = new Movement(this.player);
    this.camera = new Camera(canvas.width, canvas.height);
    this.tiles = {};
    this.initTiles();
    this.initInput();
    this.renderer = new Renderer(this.ctx, this.tiles, this.camera, this.player); // Use Renderer
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

  loop() {
    requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.renderer.draw(tileMap, TILE_SIZE); // Use Renderer
  }
}

new Game(ctx);