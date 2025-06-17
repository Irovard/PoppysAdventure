//////////////////////////////////
// Methods for NPC interactions //
//////////////////////////////////

function say(message) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)'; // darker background
    overlay.style.color = 'white';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.fontSize = '35px';
    overlay.style.textAlign = 'center'; // center text

    // Center multiline text
    const lines = message.split('\n');
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    lines.forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.textContent = line;
        container.appendChild(lineDiv);
    });
    overlay.appendChild(container);

    document.body.appendChild(overlay);

    const handleKeyPress = (e) => {
        document.body.removeChild(overlay);
        window.removeEventListener('keydown', handleKeyPress);
    };

    window.addEventListener('keydown', handleKeyPress);
}

///////////////////
// Text for NPCs //
///////////////////

const finley1 = "Hiii, I'm Finley!\nHow are you, Poppy? 🌼\nThis place is your little adventure playground! =^.^=\nYou can explore around, find bamboo, or earn some by helping the folks here.\nMight come in handy later... who knows?\nBuuut the bridge is kinda broken.\nIf you bring me some fishies, I can fix it right up for you!\nOh, and if you want to fish, just grab a fishing rod from the little lake over there! 🐠";
const finley2 = "Yayy you got a fish! 😊\nI really needed that snack. In the meantime I repaired the bridge.\nHave funn!!"


/////////////////////
// Define NPC data //
/////////////////////

export class NPCData {
    constructor(npcHandler) {
        this.npcHandler = npcHandler;
    }

    getNPCData() {
    return [
    {
        name: 'finley',
        stage: 0,
        action: [() => {say(finley1); this.npcHandler.stageUpNPCs(["fishing_rod", "finley"])},
                () => say("Oh, you need a fishing rod to catch fishies.\nYou can find one at the little lake over there! 🐠"),
                () => {say(finley2); this.npcHandler.addToInventory("Love"); this.npcHandler.stageUpNPCs(["fishing_rod", "finley"])},
                () => say("Thanks for the fishies! 🐟\nNow I was able to fix the bridge and you can cross it!")],
        position: { x: 43, y: 10 }
    },
    {
        name: 'fishing_rod',
        stage: 0,
        action: [() => say("You found a fishing rod! 🐟"),
                () => {say("Yay\nyou caught a fish!"); this.npcHandler.addToInventory("Fish"); this.npcHandler.stageUpNPCs(["finley"]);},
                () => say("Nice day for fishing, isn't it?")],
        position: { x: 32, y: 2 }
    },
    ];
    }
}