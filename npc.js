export class NPC {
  constructor(name, stage, action, position) {
    this.name = name; // Name of the NPC (str)
    this.stage = stage; // NPC stage (int), index for actions
    this.action = action; // Action of NPC in the stages (array of lambda commands)
    this.position = position; // Starting position of the NPC (object with x and y)
    this.img = new Image();
    this.img.src = `./assets/npcs/${name}.png`;
  }

  nextStage() {
    if (this.stage < this.action.length - 1) {this.stage++;}
  }

  performAction() {
    if (this.action[this.stage]) {
      this.action[this.stage](); // Execute the action at the current stage
    }
  }
}
