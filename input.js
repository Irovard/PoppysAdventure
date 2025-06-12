export class Input {
  constructor(player) {
    this.initInput();
    this.player = player;
  }

  initInput() {
    window.addEventListener('keydown', (e) => this.handleInput(e));
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