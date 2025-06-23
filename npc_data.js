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

// Beginner Quest
const finley1 = "Hiii, I'm Finley!\nHow are you, Poppy? 🌼\nThis place is your little adventure playground! :3\nYou can explore around, find bamboo, or earn some by helping the folks here.\nMight come in handy later... who knows?\nBuuut the bridge is kinda broken.\nIf you bring me some fishies, I can fix it right up for you!\nOh, and if you want to fish, just grab a fishing rod from the little lake over there! 🐠";
const finley2 = "Yayy you got a fish! 😊\nI really needed that snack. In the meantime I repaired the bridge.\nHave funn!!";

// Jeremys fragrance adventure
const jeremy1 = "Oh hey there! Can I take a sniff?\nIs that 'You'? A VERY nice Fragrance.\n\nSexy. Sweet. POWER!!!\n\nCan you help me with something?";
const jeremy2 = "Somebody stole all my fragrance, but I need it so much HAHHAHAHAHHA\n*whispers* please help me I really need it back. really!!\nI think he ran away to the east, maybe you find somebody who saw the thief.";
const goofey1 = "Hyuck! I tell ya, I seen someone, gosh!\nHe was all green 'n stuff - like, real slimy-lookin' - and he waddled over this here bridge, hoo boy!\nAnd lemme tell ya somethin'... he smelled like - hyuck - like perfume,\nbut not the nice kind... more like evil!";
const fred1 = "You fool. I have ascended. I AM fragrance now!!\nIt's too late.\nThe scents have chosen me. You wouldn't understand... the power of Eau de Doom\nOh, you want these back? Sorry, I already bathed in them. Twice.";
const fred2 = "*You yeet a baguette boomerang in direction of FRED... *\n*it flies in slo-mo, knocks the stolen perfumes into the air and you catch it elegant.*\n*FRED drops to his knees, arms flailing, and just SCREECHES*";
const fred3 = "How dare you defragrance me...\nI was ONE whiff away from immortality!!\n\n*Go back to Jeremy now*";
const jeremy4 = "Thank you so much.\nHere you get a bamboo as sign for my graditude.\nPOWWEERRRRR!!!!!!\nAnd remember: when you can't make 1000€ per month, you just have to make more.";

// The Letters attack
const duo1 = "Du-dum! Hello, Bonjour, Hola.\nI'm glad you came to us.\nHere at the Poststation, we got a little problem.\n Since the king got kidnapped, we lost our plan of post delivery.\nThe letters are all over the place and we don't know where to send them.\nIf you can find the plan,\nwe can get back to work and send the letters to their destinations.";
const duo2 = "The plan could be anywhere. I got a friend who might know more.\nHe's a fox, I don't know where he is but maybe you saw him.\nGood luck on your journey!";
const finley3 = "Hiii!!!\nYou need a fishing rod to catch fishies?\nOh, that sounds not good.\nI think I saw a trader with such a map in his hand.\nI think he went to the snow area.\nMaybe you can find him there and he can help you with the map.\nSee ya soon poppy!";
const trader1 = "Hello, yes, I am the trader.\nI had the map but I lost it somewhere in those mountains.\nIf you find the map, bring it back to the poststation.\nTo the poststation? To- To- To- TÜBINGENNN!!!!";

// Save Music
const carti1 = "Seeeyuhhh!\nAh damn, fweah, ma MUSIC album will neva be on tim'\nS- s- spend too much tim' gooning, homicide, homicide!\nSwap Isso!! Jus' ma homie can help me now.\nHe living in da hood.\nPls talk to d1s cutie! WAEEHHHH";
const cat1 = "Maow, how are you beautiful?\nWanna playyy? Pls pls pls! Miao miao\nOh, so carti needs my help?\nHe's so weird, he started working on his album before I was born and is still not done\nBut maow, here is his text. Bring it to him and give me this vocals back!";
const cat2 = "Nice. Now I wanna play tho! meowww\nThe game is easy. I hided the album cover at a lake close to the poststation.\nBring this cover to carti.";

// Kangaroo
const kangaroo1 = "My sweet lil pandaaaa <3333\nI'm so happy that you are here and saved me.\nI was kidnapped and they brought me here.";
const kangaroo2 = "WHATTT? You did so much just to rescue me?\nThat's- that's so sweet.\nI love you so much, my cute panda!";
const kangaroo3 = "And also, today is your birthday, right?\nI love you sooooo sooo much and I'm so glad I could be part of two birthdays in your life already.\nYou mean sooo sooo much to me,\nyou're my heaven and when I look at you, I still get butterflies.\nI'm so glad I found you.\nIt is so sweet that you did so much to rescue me!";
const kangaroo4 = "I wish you just the best for this year and\nthat we will have the best love story ever together <333\nI adore you so much...";
const kangaroo5 = "FOREVER AND ALWAYS";

// Letters
const letter1 = "My sweet baby,\nI hope you are doing well.\nI wanted to let you know that I am thinking of you and I miss you so much.\nI can't wait to see you again soon.\nI love you <33";
const letter2 = "I once dreamed of a perfect world, but the dream was just about you.";
const letter3 = "If there would be one thing I could always take with me, I'd choose you.\nYou are my everything, my love, my life.\nI love you so much, my sweet panda.";
const letter4 = "My love,\nYou are the most important person in my life.\nYou make me so happy and I am so grateful to have you by my side.\nI love you more than words can say.";
const letter5 = "I love the way you look at me with those pretty eyes.\nI love the way you smile at me and make me feel special.\nYou are my sunshine, my love, my everything.";
const letter6 = "My sweet caramell girl,\nyour everything I care for, and all I want!";
const letter7 = "You joined into my life and suddenly it all became pretty.\nI hope I make your life a pretty garden too.";
const letter8 = "I write you letters over letters\njust that my lovley words reach your lovley thoughts one day\nand make you smile.";
const letter9 = "Sometimes I feel like the weeknd, bacause\n'Baby I'd die for you'";
const letter10 = "I'm so addicted to you, your kisses, your touch and your cuddles.\nI can't wait to see you again and get all of them again <333";

/////////////////////
// Define NPC data //
/////////////////////

export class NPCData {
    constructor(npcHandler) {
        this.npcHandler = npcHandler;
    }

    getNPCData() {
    return [
    // Helpers
    {
        name: 'bamboo_holder',
        stage: 0,
        action: [() => say("You shall not pass. The king will never be free!!!\n*Collect all bamboos to open the portal*\n*" + this.npcHandler.bamboo + " of " + this.npcHandler.maxBamboo + " collected yet*")],
        position: { x: 101, y: 127 }
    },
    {
        name: 'press_space',
        stage: 0,
        action: [() => say(press_space1)],
        position: { x: 1, y: 1 }
    },
    // Quests
    {
        name: 'finley', // Quest Starter
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
        name: 'jeremy', // Quest Starter
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
        name: 'duo', // Quest Starter
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
    },
    {
        name: 'carti', // Quest Starter
        stage: 0,
        action: [() => {say(carti1); this.npcHandler.stageUpNPCs(["cat", "carti"])},
                () => say(carti1),
                () => {say("Thanks ma g, now lemme flow to da' sh1t!"); this.npcHandler.stageUpNPCs(["carti"])},
                () => {say("Fwaeh, seeyuh, I AM MUSIC, Swamp- s- s- s- s- swamp ISSO,\nyeaaahh, huh huh, homicidee homicidee"); this.npcHandler.stageUpNPCs(["carti"])},
                () => {say("Here ya go, bring it back to my homie."); this.npcHandler.addToInventory("MUSICVocals"); this.npcHandler.stageUpNPCs(["carti", "cat"])},
                () => say("Here ya go, bring it back to my homie."),
                () => {say("DIS 1 GOT IT! Thank you homie. Finally I can drop, SORRY 4 DA WAIT."); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["carti", "red", "cat"])},
                () => say("You som' FINE SHIT bae")
        ],
        position: { x: 7, y: 83 }
    },
    {
        name: 'cat',
        stage: 0,
        action: [() => say("Meowwww~\n=^.^="),
                () => {say("*Purr* Meeeoowwwwwww"); this.npcHandler.stageUpNPCs(["cat"])},
                () => {say("Miauuuu"); this.npcHandler.stageUpNPCs(["cat"])},
                () => {say("Wi wi wi, wi wi wiiiiii"); this.npcHandler.stageUpNPCs(["cat"])},
                () => {say("Miao"); this.npcHandler.stageUpNPCs(["cat"])},
                () => {say("*Purr* Meeeoowwwwwww"); this.npcHandler.stageUpNPCs(["cat"])},
                () => {say(cat1); this.npcHandler.addToInventory("MUSICText"); this.npcHandler.stageUpNPCs(["cat", "carti"])},
                () => say(cat1),
                () => {say(cat2); this.npcHandler.stageUpNPCs(["red", "cat"])},
                () => say(cat2),
                () => say("Thank you for playing with meee\n=^.^=")
        ],
        position: { x: 94, y: 101 }
    },
    {
        name: 'red',
        stage: 0,
        action: [() => say("*heavenly drop playing*\n(Just you are more heavenly)"),
                () => {say("You found the MUSIC cover!\nBring it back to carti!"); this.npcHandler.addToInventory("MUSICCover"); this.npcHandler.stageUpNPCs(["red", "carti"])},
                () => say("You found the MUSIC cover!\nBring it back to carti!"),
                () => say("*playing* I SEEEEEE YOU BABY GURL🕺🕺")
        ],
        position: { x: 145, y: 53 }
    },
    // Collectables (Bamboos)
    {
        name: 'bamboo1',
        stage: 0,
        action: [() => {say("You found a bamboo!"); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["bamboo1"])},
                () => say("You already found this bamboo")
        ],
        position: { x: 0, y: 38 }
    },
    {
        name: 'bamboo2',
        stage: 0,
        action: [() => {say("You found a bamboo!"); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["bamboo2"])},
                () => say("You already found this bamboo")
        ],
        position: { x: 100, y: 1 }
    },
    {
        name: 'bamboo3',
        stage: 0,
        action: [() => {say("You found a bamboo!"); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["bamboo3"])},
                () => say("You already found this bamboo")
        ],
        position: { x: 71, y: 143 }
    },
    {
        name: 'bamboo4',
        stage: 0,
        action: [() => {say("You found a bamboo!"); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["bamboo4"])},
                () => say("You already found this bamboo")
        ],
        position: { x: 0, y: 150 }
    },
    // Ending
    {
        name: 'kangaroo',
        stage: 0,
        action: [() => {say(kangaroo1); this.npcHandler.stageUpNPCs(["kangaroo"])},
                () => {say(kangaroo2); this.npcHandler.stageUpNPCs(["kangaroo"])},
                () => {say(kangaroo3); this.npcHandler.stageUpNPCs(["kangaroo"])},
                () => {say(kangaroo4); this.npcHandler.stageUpNPCs(["kangaroo"])},
                () => {say(kangaroo5)}
        ],
        position: { x: 135, y: 136 }
    },
    // Collectables (Letters)
    {
        name: 'letter1',
        stage: 0,
        action: [() => say(letter1)],
        position: { x: 42, y: 2 }
    },
    {
        name: 'letter2',
        stage: 0,
        action: [() => say(letter2)],
        position: { x: 33, y: 143 }
    },
    {
        name: 'letter3',
        stage: 0,
        action: [() => say(letter3)],
        position: { x: 45, y: 55 }
    },
    {
        name: 'letter4',
        stage: 0,
        action: [() => say(letter4)],
        position: { x: 67, y: 11 }
    },
    {
        name: 'letter5',
        stage: 0,
        action: [() => say(letter5)],
        position: { x: 148, y: 2 }
    },
    {
        name: 'letter6',
        stage: 0,
        action: [() => say(letter6)],
        position: { x: 149, y: 19 }
    },
    {
        name: 'letter7',
        stage: 0,
        action: [() => say(letter7)],
        position: { x: 77, y: 93 }
    },
    {
        name: 'letter8',
        stage: 0,
        action: [() => say(letter8)],
        position: { x: 91, y: 147 }
    },
    {
        name: 'letter9',
        stage: 0,
        action: [() => say(letter9)],
        position: { x: 28, y: 110 }
    },
    {
        name: 'letter10',
        stage: 0,
        action: [() => say(letter10)],
        position: { x: 59, y: 133 }
    },
    ];
    }
}