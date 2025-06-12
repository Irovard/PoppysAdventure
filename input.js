export class Input {
  constructor(player) {
    this.player = player;
    this.keys = new Set();
    this.initInput();
  }

  initInput() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));
  }

  handleKeyDown(e) {
    this.keys.add(e.key);

    let dx = 0, dy = 0;
    if (this.keys.has('ArrowUp') || this.keys.has('w')) dy -= 1;
    if (this.keys.has('ArrowDown') || this.keys.has('s')) dy += 1;
    if (this.keys.has('ArrowLeft') || this.keys.has('a')) dx -= 1;
    if (this.keys.has('ArrowRight') || this.keys.has('d')) dx += 1;

    if (dx !== 0 || dy !== 0) {
      this.player.move(dx, dy);
    }
  }

  handleKeyUp(e) {
    this.keys.delete(e.key);
  }
}