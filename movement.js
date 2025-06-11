export class Movement {
  constructor(player) {
    this.player = player;
  }

  handleInput(e) {
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
        this.player.move(0, -1);
        break;
      case 'ArrowDown':
      case 's':
        this.player.move(0, 1);
        break;
      case 'ArrowLeft':
      case 'a':
        this.player.move(-1, 0);
        break;
      case 'ArrowRight':
      case 'd':
        this.player.move(1, 0);
        break;
    }
  }
}