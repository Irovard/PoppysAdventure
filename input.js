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
  }

  handleKeyUp(e) {
    this.keys.delete(e.key);
  }
}