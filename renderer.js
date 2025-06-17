export class Renderer {
  constructor(ctx, tiles, camera, player, npcHandler) {
    this.ctx = ctx;
    this.tiles = tiles;
    this.camera = camera;
    this.player = player;
    this.npcHandler = npcHandler;


    // Keep graphics pixelated
    this.ctx.imageSmoothingEnabled = false;
  }

  draw(tileMap, tileSize) {
    const cam = this.camera.getView(this.player, tileSize);
    this.drawMap(tileMap, tileSize, cam);
    const overDraw = [16]; // Tiles that can are drawn above the player
    if (!overDraw.includes(tileMap[this.player.y][this.player.x])) {
      this.drawPlayers(tileSize, cam);
    }
    this.drawNPCs(tileSize, cam);
  }

  drawMap(tileMap, tileSize, cam) {
    const cols = tileMap[0].length;
    const rows = tileMap.length;
    const canvasWidth = this.ctx.canvas.width;
    const canvasHeight = this.ctx.canvas.height;

    // Calculate visible tile range
    const startX = Math.max(0, Math.floor(cam.x / tileSize));
    const endX = Math.min(cols, Math.ceil((cam.x + canvasWidth) / tileSize));
    const startY = Math.max(0, Math.floor(cam.y / tileSize));
    const endY = Math.min(rows, Math.ceil((cam.y + canvasHeight) / tileSize));

    for (let y = startY; y < endY; y++) {
      for (let x = startX; x < endX; x++) {
        const tileKey = tileMap[y][x];
        const tileImage = this.tiles[tileKey];
        if (tileImage) {
          this.ctx.drawImage(
            tileImage,
            x * tileSize - cam.x,
            y * tileSize - cam.y,
            tileSize,
            tileSize
          );
        }
      }
    }
  }

  drawPlayers(tileSize, cam) {
    // Player (draw PNG with transparency)
    if (this.player.img.complete && this.player.img.naturalWidth !== 0) {
      this.ctx.drawImage(
        this.player.img,
        this.player.x * tileSize - cam.x,
        this.player.y * tileSize - cam.y,
        tileSize,
        tileSize
      );
    }
  }

    drawNPCs(tileSize, cam) {
      for (const npc of Object.values(this.npcHandler.npcs)) {
        if (npc.img && npc.img.complete && npc.img.naturalWidth !== 0) {
          this.ctx.drawImage(
            npc.img,
            npc.position.x * tileSize - cam.x,
            npc.position.y * tileSize - cam.y,
            tileSize,
            tileSize
          );
        }
      }
    }
}