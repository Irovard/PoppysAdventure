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

const press_space1 = "Guide\n----------\nPress SPACE to interact with NPCs and go through their dialogue.\nIf you want to leave the dialogue, just move away from the NPC.\nUse arrow keys or WASD to move around.\nI love you my baby <3\nHave fun playing!";

const finley1 = "Hiii, I'm Finley!\nHow are you, Poppy? 🌼\nThis place is your little adventure playground! =^.^=\nYou can explore around, find bamboo, or earn some by helping the folks here.\nMight come in handy later... who knows?\nBuuut the bridge is kinda broken.\nIf you bring me some fishies, I can fix it right up for you!\nOh, and if you want to fish, just grab a fishing rod from the little lake over there! 🐠";
const finley2 = "Yayy you got a fish! 😊\nI really needed that snack. In the meantime I repaired the bridge.\nHave funn!!"

const jeremy1 = "Oh hey there! Can I take a sniff?\nIs that 'You'? A VERY nice Fragrance.\n\nSexy. Sweet. POWER!!!\n\nCan you help me with something?"
const jeremy2 = "Somebody stole all my fragrance, but I need it so much HAHHAHAHAHHA\n*whispers* please help me I really need it back. really!!\nI think he ran away to the east, maybe you find somebody who saw the thief."
const goofey1 = "Hyuck! I tell ya, I seen someone, gosh!\nHe was all green 'n stuff - like, real slimy-lookin' - and he waddled over this here bridge, hoo boy!\nAnd lemme tell ya somethin'... he smelled like - hyuck - like perfume,\nbut not the nice kind... more like evil!"
const fred1 = "You fool. I have ascended. I AM fragrance now!!\nIt's too late.\nThe scents have chosen me. You wouldn't understand... the power of Eau de Doom\nOh, you want these back? Sorry, I already bathed in them. Twice."
const fred2 = "*You yeet a baguette boomerang in direction of FRED... *\n*it flies in slo-mo, knocks the stolen perfumes into the air and you catch it elegant.*\n*FRED drops to his knees, arms flailing, and just SCREECHES*"
const fred3 = "How dare you defragrance me...\nI was ONE whiff away from immortality!!\n\n*Go back to Jeremy now*"
const jeremy4 = "Thank you so much.\nHere you get a bamboo as sign for my graditude.\nPOWWEERRRRR!!!!!!\nAnd remember: when you can't make 1000€ per month, you just have to make more."

const duo1 = "Du-dum! Hello, Bonjour, Hola.\nI'm glad you came to us.\nHere at the Poststation, we got a little problem.\n Since the king got kidnapped, we lost our plan of post delivery.\nThe letters are all over the place and we don't know where to send them.\nIf you can find the plan,\nwe can get back to work and send the letters to their destinations.";
const duo2 = "The plan could be anywhere. I got a friend who might know more.\nHe's a fox, I don't know where he is but maybe you saw him.\nGood luck on your journey!";
const finley3 = "Hiii!!!\nYou need a fishing rod to catch fishies?\nOh, that sounds not good.\nI think I saw a trader with such a map in his hand.\nI think he went to the snow area.\nMaybe you can find him there and he can help you with the map.\nSee ya soon poppy!";
const trader1 = "Hello, yes, I am the trader.\nI had the map but I lost it somewhere in those mountains.\nIf you find the map, bring it back to the poststation.\nTo the poststation? To- To- To- TÜBINGENNN!!!!";

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
        name: 'bamboo_holder',
        stage: 0,
        action: [() => say("You shall not pass. The king will never be free!!!\n*Collect all bamboos to open the portal*\n*" + this.npcHandler.bamboo + " of 1 collected yet*")],
        position: { x: 101, y: 127 }
    },
    {
        name: 'press_space',
        stage: 0,
        action: [() => say(press_space1)],
        position: { x: 1, y: 1 }
    },
    {
        name: 'finley',
        stage: 0,
        action: [() => {say(finley1); this.npcHandler.stageUpNPCs(["fishing_rod", "finley"])},
                () => say("Oh, you need a fishing rod to catch fishies.\nYou can find one at the little lake over there! 🐠"),
                () => {say(finley2); this.npcHandler.addToInventory("Love"); this.npcHandler.stageUpNPCs(["finley"])},
                () => say("Thanks for the fishies! 🐟\nNow I was able to fix the bridge and you can cross it!"),
                () => {say(finley3); this.npcHandler.stageUpNPCs(["trader", "finley"])},
                () => say(finley3),
                () => say("HIIII poppyy!! Nice day for fishing, isn't it?")],
        position: { x: 43, y: 10 }
    },
    {
        name: 'fishing_rod',
        stage: 0,
        action: [() => say("You found a fishing rod! 🐟"),
                () => {say("Yay\nyou caught a fish!"); this.npcHandler.addToInventory("Fish"); this.npcHandler.stageUpNPCs(["finley", "fishing_rod"]);},
                () => say("Nice day for fishing, isn't it?")],
        position: { x: 32, y: 2 }
    },
    {
        name: 'jeremy',
        stage: 0,
        action: [() => {say(jeremy1); this.npcHandler.stageUpNPCs(["jeremy"])},
                () => {say(jeremy2); this.npcHandler.stageUpNPCs(["jeremy", "goofey"])},
                () => say(jeremy2),
                () => {say(jeremy4); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["jeremy", "fred"])},
                () => say("AAAHHHhh Weed- I mean perfume...")
        ],
        position: { x: 71, y: 99}
    },
    {
        name: 'goofey',
        stage: 0,
        action: [() => say("Hujuck! How a' ya poppy? Höhö"),
                () => {say(goofey1), this.npcHandler.stageUpNPCs(["goofey", "fred"])},
                () => say("Gawrsh, I still got the whiff stuck in my nose hairs!")
        ],
        position: { x: 113, y: 72 }
    },
    {
        name: 'fred',
        stage: 0,
        action: [() => say("Oh? Lost, are we? How delightfully unfortunate… for you. 🐊"),
                () => {say(fred1), this.npcHandler.stageUpNPCs(["fred"])},
                () => {say(fred2), this.npcHandler.stageUpNPCs(["fred"])},
                () => {say(fred3), this.npcHandler.stageUpNPCs(["jeremy", "fred"])},
                () => say(fred3),
                () => say("Miss me? Of course you did. No one forgets a scent like mine. I will come back.")
        ],
        position: { x: 71, y: 36 }
    },
    {
        name: 'duo',
        stage: 0,
        action: [() => {say(duo1); this.npcHandler.stageUpNPCs(["duo"])},
                () => {say(duo2); this.npcHandler.stageUpNPCs(["finley", "duo"])},
                () => say(duo2),
                () => {say("Yayy gracias! You found the plan!\nNow we can get back to work and send the letters to their destinations.\nThank you so much!"); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["duo", "trader", "map", "finley"]);},
                () => say("Du-dum! Do your duolingo lessons!"),
        ],
        position: { x: 144, y: 5 }
    },
    {
        name: 'trader',
        stage: 0,
        action: [() => say("I'm so lost..."),
                () => {say(trader1); this.npcHandler.stageUpNPCs(["carte", "trader"])},
                () => say(trader1),
                () => say("Yayy you saved the poststation! TÜBINGENNNN!!!"),
        ],
        position: { x: 24, y: 100 }
    },
    {
        name: 'carte',
        stage: 0,
        action: [() => say("There is a map."),
                () => {say("You found the map! Bring it to the poststation."); this.npcHandler.addToInventory("Map"); this.npcHandler.stageUpNPCs(["duo"])},
                () => say("The map is safe."),
        ],
        position: { x: 12, y: 142 }
    }
    ];
    }
}