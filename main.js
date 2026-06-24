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
    this.ear = false;
    this.boat = false;

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
    this.player.runPlayer(this.ctx, canvas, this.input.keys);

    if (!this.bridge && this.npcHandler.inventory.includes('Love')) {
      // Set pixel in tileMap to indicate bridge is built (titleMap[y][x])
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

    if (!this.ear && this.npcHandler.inventory.includes('Ear')) {
      this.tileMap[188][98] = 20;
      this.player.startingPosition = this.player.startingPositionL2;
      this.ear = true;
    }

    if (!this.boat && this.npcHandler.inventory.includes('Boat')) {
      this.player.blockedTiles = this.player.blockedTiles.filter(tile => tile !== 3); // Remove water tile from blocked tiles
      this.boat = true;
    }
  }
}

console.log('Game initialized with tileMap:');
window.gameInstance = new Game(ctx);



let musicStarted = false;

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !musicStarted) {
        musicStarted = true;

        const audio = new Audio("assets/audio/background.wav");
        audio.loop = true;
        audio.play().catch(err => console.error(err));

        // Optional: keep a global reference so it doesn't get garbage collected
        window.backgroundMusic = audio;
    }
});