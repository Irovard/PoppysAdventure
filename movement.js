export class Movement {
  constructor(player) {
    this.player = player;
  }

  handleInput(e) {
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
        this.player.y = Math.max(0, this.player.y - 1);
        break;
      case 'ArrowDown':
      case 's':
        this.player.y = Math.min(15, this.player.y + 1);
        break;
      case 'ArrowLeft':
      case 'a':
        this.player.x = Math.max(0, this.player.x - 1);
        break;
      case 'ArrowRight':
      case 'd':
        this.player.x = Math.min(15, this.player.x + 1);
        break;
    }
  }
}