export class Input {
  constructor(player, npcHandler) {
    this.player = player;
    this.npcHandler = npcHandler;
    this.keys = new Set();
    this.initInput();
  }

  initInput() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));
  }

  interactWithNPC() {
    this.npcHandler.interactWithNPC(this.player.x, this.player.y);
  }

  handleKeyDown(e) {
    this.keys.add(e.key);

    if (e.key === ' ' || e.code === 'Space') {
      this.interactWithNPC();
    }

    let dx = 0, dy = 0;
    if (this.keys.has('ArrowUp') || this.keys.has('w')) dy -= 1;
    if (this.keys.has('ArrowDown') || this.keys.has('s')) dy += 1;
    if (dx !== 0 || dy !== 0) {
      this.player.move(0, dy);
    }

    if (this.keys.has('ArrowLeft') || this.keys.has('a')) dx -= 1;
    if (this.keys.has('ArrowRight') || this.keys.has('d')) dx += 1;
    if (dx !== 0 || dy !== 0) {
      this.player.move(dx, 0);
    }
  }

  handleKeyUp(e) {
    this.keys.delete(e.key);
  }
}