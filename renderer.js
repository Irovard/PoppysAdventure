export class Renderer {
  constructor(ctx, tiles, camera, player) {
    this.ctx = ctx;
    this.tiles = tiles;
    this.camera = camera;
    this.player = player;

    // Keep graphics pixelated
    this.ctx.imageSmoothingEnabled = false;

    // Load player image once
    this.playerImage = new Image();
    this.playerImage.src = "./tiles/player.png"; // Path to player image
  }

  draw(tileMap, TILE_SIZE) {
    const cam = this.camera.getView(this.player, TILE_SIZE);
    // Map tiles
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
    // Player (draw PNG with transparency)
    if (this.playerImage.complete && this.playerImage.naturalWidth !== 0) {
      this.ctx.drawImage(
        this.playerImage,
        this.player.x * TILE_SIZE - cam.x,
        this.player.y * TILE_SIZE - cam.y,
        TILE_SIZE,
        TILE_SIZE
      );
    }
  }
}