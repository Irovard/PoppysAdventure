import { Input } from './input.js';
import { Camera } from './camera.js';
import { tileTypes, tileMap, initTiles } from './tiledata.js';
import { Renderer } from './renderer.js';
import { Player } from './player.js';

const TILE_SIZE = 64;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(15,15);
    this.input = new Input(this.player);
    this.camera = new Camera(canvas.width, canvas.height);
    this.tiles = initTiles();
    this.renderer = new Renderer(this.ctx, this.tiles, this.camera, this.player);

    this.adjustVisibleField();
    window.addEventListener('resize', () => this.onResize());

    this.loop();
  }

  adjustVisibleField() {
    let VISIBLE_TILES_X = Math.floor(window.innerWidth / TILE_SIZE);
    let VISIBLE_TILES_Y = Math.floor(window.innerHeight / TILE_SIZE);
    canvas.width = VISIBLE_TILES_X * TILE_SIZE;
    canvas.height = VISIBLE_TILES_Y * TILE_SIZE;
    this.camera.width = canvas.width;
    this.camera.height = canvas.height;
    this.ctx.imageSmoothingEnabled = false;
  }

  onResize() {
    this.adjustVisibleField();
  }

  loop() {
    requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.renderer.draw(tileMap, TILE_SIZE);
  }
}

window.gameInstance = new Game(ctx);