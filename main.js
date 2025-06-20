import { Input } from './input.js';
import { Camera } from './camera.js';
import { tileMap, initTiles } from './tiledata.js';
import { Renderer } from './renderer.js';
import { Player } from './player.js';
import { NPCHandler } from './npc_handler.js';

const TILE_SIZE = 64;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.tileMap = tileMap();
    this.npcHandler = new NPCHandler();
    this.player = new Player(this.tileMap, this.npcHandler);
    this.input = new Input(this.player, this.npcHandler);
    this.camera = new Camera();
    this.tiles = initTiles();
    this.renderer = new Renderer(this.ctx, this.tiles, this.camera, this.player, this.npcHandler);

    this.adjustVisibleField();
    window.addEventListener('resize', () => this.onResize());

    this.bridge = false;
    this.door = false;

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
    this.renderer.draw(this.tileMap, TILE_SIZE);
    this.player.runPlayer(this.ctx, canvas);

    if (!this.bridge && this.npcHandler.inventory.includes('Love')) {
      // Set pixel in tileMap to indicate bridge is built
      this.tileMap[32][30] = 12;
      this.tileMap[31][29] = 12;
      this.bridge = true;
    }

    if (!this.door && this.npcHandler.inventory.includes('Key')) {
      this.tileMap[131][105] = 8;
      this.tileMap[132][104] = 8;
      this.tileMap[133][103] = 8;
      this.door = true;
    }

  }
}

window.gameInstance = new Game(ctx);