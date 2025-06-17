import { NPC } from './npc.js';
import { NPCData } from './npc_data.js'; // Assuming NPCData is defined in npc_data.js

export class NPCHandler {
  constructor() {
    this.npcs = {};
    this.blockTiles = [];
    const npcDataClass = new NPCData(this);
    this.npcData = npcDataClass.getNPCData();

    this.inventory = [];
    this.bamboo = 0;

    this.loadNPCs();
  }


  loadNPCs() {
    for (const npc of this.npcData) {
      this.npcs[npc.name] = new NPC(npc.name, npc.stage, npc.action, npc.position);
      this.blockTiles.push(npc.position);
    }
  }


  interactWithNPC(x, y) { // just possible if the player is close enough (1 block radius) to the NPC
    for (const npc of Object.values(this.npcs)) {
      if (Math.abs(npc.position.x - x) <= 1 && Math.abs(npc.position.y - y) <= 1) {
        npc.performAction();
        return;
      }
    }
    // If no NPC is found in range, do nothing
  }

  stageUpNPCs(names) { // names is an array of NPC names to stage up
    for (const name of names) {
      const npc = this.npcs[name];
      if (npc) {
        npc.nextStage();
        console.log(`NPC ${name} staged up to ${npc.stage}`);
      }
    }
  }

  addToInventory(item) {
    this.inventory.push(item);
  }

  addBamboo() {
    this.bamboo++;
  }
}