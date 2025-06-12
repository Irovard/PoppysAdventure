export class Renderer {
  constructor(ctx, tiles, camera, player) {
    this.ctx = ctx;
    this.tiles = tiles;
    this.camera = camera;
    this.player = player;

    // Keep graphics pixelated
    this.ctx.imageSmoothingEnabled = false;
  }

  draw(tileMap, tileSize) {
    const cam = this.camera.getView(this.player, tileSize);
    this.drawMap(tileMap, tileSize, cam);
    this.drawPlayers(tileSize, cam);
  }

  drawMap(tileMap, tileSize, cam) {
    for (let y = 0; y < tileMap.length; y++) {
      for (let x = 0; x < tileMap[y].length; x++) {
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
}