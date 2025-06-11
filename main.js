import { Movement } from './movement.js';
import { Camera } from './camera.js';
import { tileTypes, tileMap } from './tiledata.js';
import { Renderer } from './renderer.js';
import { Player } from './player.js';

const TILE_SIZE = 64;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Function to adjust visible field based on window size
function adjustVisibleField() {
  let VISIBLE_TILES_X = Math.floor(window.innerWidth / TILE_SIZE);
  let VISIBLE_TILES_Y = Math.floor(window.innerHeight / TILE_SIZE);
  canvas.width = VISIBLE_TILES_X * TILE_SIZE;
  canvas.height = VISIBLE_TILES_Y * TILE_SIZE;
}

// Adjust on load and resize
adjustVisibleField();
window.addEventListener('resize', () => {
  adjustVisibleField();
  ctx.imageSmoothingEnabled = false; // Re-apply after resize
  if (window.gameInstance) {
    window.gameInstance.camera.width = canvas.width;
    window.gameInstance.camera.height = canvas.height;
  }
});

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(5, 5);
    this.movement = new Movement(this.player);
    this.camera = new Camera(canvas.width, canvas.height);
    this.tiles = {};
    this.initTiles();
    this.initInput();
    this.renderer = new Renderer(this.ctx, this.tiles, this.camera, this.player);
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
    this.renderer.draw(tileMap, TILE_SIZE);
  }
}

window.gameInstance = new Game(ctx);