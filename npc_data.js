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

const press_space1 = "Guide\n----------\nPress SPACE to interact with NPCs and go through their dialogue.\nIf you want to leave the dialogue, just move away from the NPC.\nUse arrow keys or WASD to move around.\nDONT reload the site, since the game state will be lost.\nI love you my baby <3\nHave fun playing!";


///// PART 1 /////

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


///// PART 2 /////
// Beginner Quest
const maul1 = "Gnnrrr, raaawwwww, never somebody humiliated me like that, *sob*\nI- i just wanted to be powerful T.T";
const maul2 = "WHAT ARE YOU DOING HERE ?!?!?!\nGo away or you will feel what happens when you misbehave..\nDarth Vader made me look like a beginner\nI will not fail again!";
const maul3 = "If you can help me?\nI can help myself!\nBut...\nIf you really want to help, bring me my plushie.\nI lost it in this cave and I would feel so much better with it.";
const maul4 = "VADER!!! IF I CATCH YOU...\nMy brothers didn't die for this..\nYou again???\nOh, you have my phushie???\nYAYYYY, hum humm.\nBUT WAIT. YOU TRAITOR !!\nWHERE IS HIS EAR?";
const maul5 = "Here you are you little thief!\nOh, you have it? You have the ear?\nI didn't think you would bring it back.\nI still don't trust you, but thank you!\nI cleared up the exit for you.\nLeave and never come back to me and my plushie!!!";
const winnie1 = "Oh Oh, hello?\nAre you here to rescue me?\nI certainly hope so.\nMaul left me here when he became rather upset.\nI've been trying to think of a way out...\nThink, think, think...\nBut it's difficult on an empty stomach.\nThere isn't a single pot of honey in this place.\nOh, bother!\nWould you please help me get out of here?";

// Quests
const cookieMonster1 = "Me want cookie...\nBig cookie. Small cookie. Round cookie. Square cookie.\nAny cookie!\nMe been thinking about cookies all day.\nActually... me think about cookies every day.\nAnd now me tummy making very sad noises.";
const cookieMonster2 = "Luckily, me hear wonderful rumor.\nDeep within Cherry Blossom Forest, there be little village.\nAnd in that village be bakery.\nAnd in that bakery...\nCOOKIES!\nFresh cookies!\nWarm cookies!\nChocolate chip cookies!\nMe would go myself, but me got distracted looking for cookies.\nThen me got distracted thinking about cookies.\nThen me took nap and dreamed about cookies.";
const cookieMonster3 = "Please, could you visit bakery and bring me some cookies?\nMe promise to be very grateful.\nWell...\nAt least until me finish eating cookies.\nThen me probably want more cookies.";
const cookieMonster4 = "COOKIES!!!\nYou actually brought cookies!\nFresh from bakery, too!\nMe haven't seen cookies this beautiful in a very long time.\nThank you, thank you, THANK YOU!\n*nom nom nom*\nOh wow.\nBest cookies ever.\n*nom nom nom*\nWait...\nWhere did the rest go?\nAnyways here a bamboo for your work!";
const cook1 = "Wel-ball Explorer!\nWhere we ARE? Badoing, in my ball-erkery of course.\nHere you can get every Ball-guette and other pasterie you want.\nYES, also cookies!\nAs you see I know ball.\nActually,\nI am a ball my self. See...\nBoing boing...";
const cook2 = "Ball damn-it! The cookie ball-ster send you?\nThen, and sorry if its balld, I cant give you cookies!\nThe cookie ball-ster ball-ongs in a psychiatric withdrawal clinic!";
const cook3 = "Well,\nI don't know which ball shat in the head of the doctor,\nbut okay, here are the cookies!\nBring them to the cookie ball-ster!";
const doctor1 = "Ball-o, how are you balling?\nWhat .. shushhh he could ball around here.\nWho you ask?\nThe cookie ball-ster sended Fred to ball me up\nif I tell anyone that he cant have cookies.";
const farmer1 = "Howdy lil panda!\nAre you doing kinda good?\nFor a 10.\nDo you have kinda something to do right now?\nFor a 10.\nBecause I could kinda need some help here at my farm.\nFor a 10.";
const batman1 = "Greetings.\nTell me... are you holding up?\nIf you need the Bat, signal me.\nI'm managing.\nWhy do you ask?\nDo I seem troubled?\nPerhaps.\nI had plans for a pool party.\nBut in my distraction, I forgot to invite anyone.\nNow I find myself alone...\nat my own pool party.";
const batman2 = "You'd do that and help me?\nThat would mean more than you know.\nThere are two people in particular I hoped would be there.\nCan I trust you to deliver this invitation?";
const maul6 = "Batman's pool party?\nJoin? Of course I will.\nAnd I can bring someone? Excellent.\nI already know who.\nMy plushie. A loyal companion.\nA silent observer.\nA legend.\nReturn to Batman and tell him this:\nMaul accepts the invitation. And he will arrive with his plushie.";
const cacaboi1 = "Oho, who is coming there?\nWho I am you ask? Hum Hum HUMBURGUR!\nWhat it must be for a joy, meeting finally the real caca boiii\nYep, thats meEEe.\nOh you want to invite me to the pool party of batman?\nI accept. Usually people don't want shit in their pools,\nso I'm happy he invites me still!";
const clock1 = "Tiki Tiki my dear panda!\nWe have spectated some paranormalities lately...\nFred somehow was able to summon ghosts!\nWe don't know what his motives are, but it's important to stop him!\nApperantly the ghosts are always arround saltwater.";


/////////////////////
// Define NPC data //
/////////////////////

export class NPCData {
    constructor(npcHandler) {
        this.npcHandler = npcHandler;
    }

    getAllData() {
        return [...this.getNPCData(), ...this.getLetterData(), ...this.getBambooData()];
    }

    getNPCData() {
    return [
    //// PART 2 ////
    // Helper
    {
        name: 'bamboo_holder2',
        stage: 0,
        action: [() => say("Trade a boat here!\n*Collect all bamboos to get a boat*\n*" + this.npcHandler.bamboo + " of " + this.npcHandler.maxBamboo2 + " collected yet*"),
                () => {say("You have collected all the bamboos!\nYou now have a boat.\nThis means you can walk on water."); this.npcHandler.addToInventory("Boat"); this.npcHandler.stageUpNPCs(["bamboo_holder2"])},
                () => say("You traded a boat!\nYou can now walk on water!"),
        ],
        position: { x: 7, y: 316 },
        img: 'bamboo_holder'
    },
    // Beginner Quest
    {
        name: 'darth_maul',  // Quest Starter
        stage: 0,
        action: [() => {say(maul1); this.npcHandler.stageUpNPCs(["darth_maul"])},
                () => {say(maul2); this.npcHandler.stageUpNPCs(["darth_maul","winnie"])},
                () => say(maul3),
                () => {say(maul4); this.npcHandler.stageUpNPCs(["darth_maul","winnie","winnie_ear"])},
                () => say("BRING ME HIS EAR OR I KILL YOU!!!"),
                () => {say(maul5); this.npcHandler.addToInventory("Ear"); this.npcHandler.stageUpNPCs(["darth_maul","winnie","winnie_ear"])},
                () => say("I will destroy you Darth Vader!! Slow and painful.\nThank you for the plushie, Poppy!"),
                () => {say(maul6); this.npcHandler.stageUpNPCs(["darth_maul", "batman"]);},
                () => say("Go to Batman and tell him: I will come with my plushie."),
                () => say("I think I lost my plushie at the party...")
    ],
        position: { x: 185, y: 111 }
    },
    {
        name: 'winnie',
        stage: 0,
        action: [() => say("Oh, brother! Give me a hug \\(o.o)/"),
                () => {say(winnie1); this.npcHandler.stageUpNPCs(["darth_maul","winnie"])},
                () => say(winnie1),
                () => say("Oh, brother, where is my ear???\nAnd where is some honey?\nThink... think... think..."),
                () => say("I found a lot of honey! It's right infront of me <3")],
        position: { x: 182, y: 236 }
    },
    {
        name: 'winnie_ear',
        stage: 0,
        action: [() => say("..."),
                () => {say("You found the ear! Bring it back to Maul."); this.npcHandler.stageUpNPCs(["darth_maul","winnie_ear"])},
                () => say("You found the ear! Bring it back to Maul."),
                () => say("...")],
        position: { x: 134, y: 174 }
    },
    // Quests
    {
        name: 'cookie_monster',  // Quest Starter
        stage: 0,
        action: [() => {say(cookieMonster1); this.npcHandler.stageUpNPCs(["cookie_monster"])},
                () => {say(cookieMonster2); this.npcHandler.stageUpNPCs(["cookie_monster", "cook"])},
                () => say(cookieMonster3),
                () => {say(cookieMonster4); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["cookie_monster","cook", "doctor"])},
                () => say("Me feel much better now!\nAlthough...\nMe could really go for another cookie.")],
        position: { x: 132, y: 228 }
    },
    {
        name: 'cook',
        stage: 0,
        action: [() => say("Boing boing boing . . ."),
                () => {say(cook1); this.npcHandler.stageUpNPCs(["cook"])},
                () => {say(cook2); this.npcHandler.stageUpNPCs(["cook", "doctor"])},
                () => say("Go to the doctor, who is balling also in this village\nAsk if I can give cookies to the cookie ball-ster!"),
                () => {say(cook3); this.npcHandler.stageUpNPCs(["cookie_monster","cook"])},
                () => say(cook3),
                () => say("You should stay here in the ball-kery, you sweet cutie pie!!")],
        position: { x: 184, y: 291 }
    },
    {
        name: 'doctor',
        stage: 0,
        action: [() => say("Boing boing boing . . ."),
                () => {say(doctor1); this.npcHandler.stageUpNPCs(["doctor","cook"])},
                () => say("Go and tell the cook that he should ball some cookies for the cookie ball-ster!"),
                () => say("Please go away ball-fore Fred the crocodile appears!")],
        position: { x: 167, y: 273 }
    },
    {
        name: 'farmer',  // Quest Starter
        stage: 0,
        action: [() => {say(farmer1); this.npcHandler.stageUpNPCs(["farmer","cow1"])},
                () => say("In the stable which is kinda right behind me there is a cow.\nFor a 10.\nWash it and kinda bring me its milk.\nFor a 10."),
                () => {say("Nice. thank you so much, this is kinda helping me\nFor a 10.\nAlright, are you kinda ready for your next task?\nFor a 10."); this.npcHandler.stageUpNPCs(["farmer", "fih"])},
                () => say("Please kinda go and get some fishes at the lake here.\nFor a 10.\nYou kinda have to look for yourself how to get them to me\nFor a 10."),
                () => {say("Thank you kinda for the fish.\nFor a 10.\nNow there is kinda just one thing left to do.\nFor a 10.\nAnd for your work I'll kinda give you a bamboo.\nFor a 10."); this.npcHandler.stageUpNPCs(["farmer","apple1","apple2","apple3","apple4","apple5"])},
                () => say("Bring me 5 apples from the forrest on kinda the other side of the lake.\nFor a 10."),
                () => {say("Wow, you kinda helped me so well!\nFor a 10.\nHere your bamboo and also.."); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["farmer","cow","fih"])},
                () => say("Your kinda cool\nFor a 10.")],
        position: { x: 53, y: 250 }
    },
    {
        name: 'cow1',
        stage: 0,
        action: [() => say("Mooo..."),
                () => {say("What is this? Mooo\n You also hear it? Mooo\nThis music... Mooo\nIs it possible that soon is..."); this.npcHandler.stageUpNPCs(["cow1"])},
                () => {say("A NEW MONTH ?????"); this.npcHandler.stageUpNPCs(["cow1"])},
                () => {say("WAKE UP!!!!\nITS THE FIRST OF THE MONTH\nI brush my teeth and count up\n(slatt slatt slatt slatt)"); this.npcHandler.stageUpNPCs(["cow1"])},
                () => {say("Farmer: Stop dancing!! It's kinda NOT the first of the month yet...\nFor a 10."); this.npcHandler.stageUpNPCs(["cow1", "farmer"])},
                () => say("Oh, okay... i-its okay, I will stop.\nAt least my teeth are clean now.\nHere bring the milk to the farmer."),
                () => say("*whispers* wake up... its the 24th of the month")],
        position: { x: 53, y: 236 }
    },
    {
        name: 'fih',
        stage: 0,
        action: [() => say("Hehehehehe I'm hehehehe a hehe HAHAHAHA ..."),
                () => {say("Ring Ring\nRing Ring\nRing Ring"); this.npcHandler.stageUpNPCs(["fih"])},
                () => {say("Whos there?"); this.npcHandler.stageUpNPCs(["fih"])},
                () => {say("FIH"); this.npcHandler.stageUpNPCs(["fih"])},
                () => {say("HAHHAHAHHAHHHAHHA\nWhat do you want?\nThat I go to the farmer?\nThat looser he just wants that I do his payment checks."); this.npcHandler.stageUpNPCs(["fih", "farmer"])},
                () => say("You are kinda fine tho.\n Thats the only reason I allow you to bring me to the farmer!"),
                () => say("Ring Ring\nFih is calling")],
        position: { x: 78, y: 238 }
    },
    {
        name: 'apple1',
        stage: 0,
        action: [() => say("I'm an appel."),
                () => {say("Ouuu noo I got found!"); this.npcHandler.addToInventory("apple"); if (this.npcHandler.inventory.filter(x => x === "apple").length === 5) {this.npcHandler.stageUpNPCs(["farmer"]);}; this.npcHandler.stageUpNPCs(["apple1"])},
                () => say("You already found me sweetie <3")],
        position: { x: 78, y: 254 },
        img: 'apple'
    },
    {
        name: 'apple2',
        stage: 0,
        action: [() => say("I'm an appel."),
                () => {say("Ouuu noo I got found!"); this.npcHandler.addToInventory("apple"); if (this.npcHandler.inventory.filter(x => x === "apple").length === 5) {this.npcHandler.stageUpNPCs(["farmer"]);}; this.npcHandler.stageUpNPCs(["apple2"])},
                () => say("You already found me sweetie <3")],
        position: { x: 90, y: 247 },
        img: 'apple'
    },
    {
        name: 'apple3',
        stage: 0,
        action: [() => say("I'm an appel."),
                () => {say("Ouuu noo I got found!"); this.npcHandler.addToInventory("apple"); if (this.npcHandler.inventory.filter(x => x === "apple").length === 5) {this.npcHandler.stageUpNPCs(["farmer"]);}; this.npcHandler.stageUpNPCs(["apple3"])},
                () => say("You already found me sweetie <3")],
        position: { x: 87, y: 257 },
        img: 'apple'
    },
    {
        name: 'apple4',
        stage: 0,
        action: [() => say("I'm an appel."),
                () => {say("Ouuu noo I got found!"); this.npcHandler.addToInventory("apple"); if (this.npcHandler.inventory.filter(x => x === "apple").length === 5) {this.npcHandler.stageUpNPCs(["farmer"]);}; this.npcHandler.stageUpNPCs(["apple4"])},
                () => say("You already found me sweetie <3")],
        position: { x: 89, y: 239 },
        img: 'apple'
    },
    {
        name: 'apple5',
        stage: 0,
        action: [() => say("I'm an appel."),
                () => {say("Ouuu noo I got found!"); this.npcHandler.addToInventory("apple"); if (this.npcHandler.inventory.filter(x => x === "apple").length === 5) {this.npcHandler.stageUpNPCs(["farmer"]);}; this.npcHandler.stageUpNPCs(["apple5"])},
                () => say("You already found me sweetie <3")],
        position: { x: 79, y: 226 },
        img: 'apple'
    },
    {
        name: 'cow2',
        stage: 0,
        action: [() => say("Moooo-y lawyer advised moooo-e\nnot to discuss the incident with the flamingo.")],
        position: { x: 54, y: 242 },
        img: 'cow2'
    },
    {
        name: 'cow3',
        stage: 0,
        action: [() => say("Raccoons keep calling moooo-e the chosen one\nand it's making mooo-e nervous.")],
        position: { x: 47, y: 239 },
        img: 'cow2'
    },
    {
        name: 'cow4',
        stage: 0,
        action: [() => say("Have you ever though about\nhow many cows you could fit in a shoe\nwith the size of\n2 meters x 1 meter x 1.000.000 meters?")],
        position: { x: 48, y: 245 },
        img: 'cow2'
    },
    {
        name: 'batman', // Quest Starter
        stage: 0,
        action: [() => {say(batman1); this.npcHandler.stageUpNPCs(["batman"])},
                () => {say(batman2); this.npcHandler.stageUpNPCs(["batman","darth_maul"])},
                () => say("Your first destination is Maul.\nGive him this invitation personally.\nHe's a trusted friend.\nInform him that he's free to bring a guest.\nNo further authorization is required."),
                () => {say("Very great.\nI didn't saw his plushie in years, I thought he lost it.\nNow go and give away my last invitation."); this.npcHandler.stageUpNPCs(["batman","caca_boi"])},
                () => say("Go west after leaving the island.\nYou'll find a fishing village.\nMy ally is usually at the port. He's a hero.\nGive him this invitation. Tell him Batman requests his presence."),
                () => {say("Excellent.\nI will no longer be alone in this mansion!\nThank you so much. Here a bamboo for your help."); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["darth_maul","caca_boi","batman"])},
                () => say("If you need help someday,\ncall me or cacaboi with the number\n1... 2... 3...")
            ],
        position: { x: 101, y: 318 }
    },
    {
        name: 'caca_boi',
        stage: 0,
        action: [() => say("The air smells so fresh~"),
                () => {say(cacaboi1); this.npcHandler.stageUpNPCs(["caca_boi"])},
                () => {say("Go and tell him I will come.\nAlso I have a new number.\nTell him my new phone number is..."); this.npcHandler.stageUpNPCs(["caca_boi"])},
                () => {say("1..."); this.npcHandler.stageUpNPCs(["caca_boi"])},
                () => {say("2..."); this.npcHandler.stageUpNPCs(["caca_boi"])},
                () => {say("3..."); this.npcHandler.stageUpNPCs(["caca_boi"])},
                () => {say("4..."); this.npcHandler.stageUpNPCs(["caca_boi"])},
                () => {say("5..."); this.npcHandler.stageUpNPCs(["caca_boi"])},
                () => {say("6..."); this.npcHandler.stageUpNPCs(["caca_boi"])},
                () => {say("7..."); this.npcHandler.stageUpNPCs(["caca_boi","batman"])},
                () => say("Now go back to batman!"),
                () => say("Yes oh yes, I do enjoy, that I'm really caca boi!"),
        ],
        position: { x: 14, y: 308 }
    },
    {
        name: 'agent1', // Quest Starter
        stage: 0,
        action: [() => {say("Aye, ma'am! I'm Agent Yellowski and I work for the\nMagdeburgian Agency for Fred Research and Countermeasures.\nWhat is your issue?\nFred? Thats what I thought."); this.npcHandler.stageUpNPCs(["agent1","agent3"])},
                () => say("I'm not responsible for spontaneous Fred attacks,\nplease report your issue to Agent Redidi."),
                () => {say("You have a contract? Great!\nI will sign it and then you can start your assignment.\nHere you go."); this.npcHandler.stageUpNPCs(["agent1","agent3"])},
                () => say("Go to Agent Redidi,\nhe will tell you more about your assignment and what to do next."),
                () => {say("Great, you catched the ghosts!\nTo find out why they are arround we have to do some tests."); this.npcHandler.stageUpNPCs(["agent1","agent2"])},
                () => say("Please go to Agent Greenoble that he can do the tests with the ghosts."),
                () => {say("Here is your bamboo!\nTy for helping us with the ghosts. But Fred will be back and we need to be prepared for his next attack."); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["agent1","agent2","agent3","clock"])},
                () => say("I have no further tasks for you, but maybe Agent Redidi has some more for you.")],
        position: { x: 60, y: 190 },
    },
    {
        name: 'agent2',
        stage: 0,
        action: [() => say("Aye, ma'am! I'm Agent Greenoble and I work for the\nMagdeburgian Agency for Fred Research and Countermeasures.\nPlease talk to Agent Yellowski to get your assignment."),
                () => {say("Well, you want to help? No problemooo!\nWait, I'm missing some paper for your contract with us."); this.npcHandler.stageUpNPCs(["agent2","agent3"])},
                () => say("Please go back and ask Agent Redidi for some paper."),
                () => {say("You got the paper? Great!\nHere is the contract!\nIt still need a signature of Agent Yellowski."); this.npcHandler.stageUpNPCs(["agent2","agent1"])},
                () => say("Could you give Agent Yellowski the contract?\nHe will sign it and then you can start your assignment."),
                () => {say("Very fascinating,\nit seems that the ghosts should collect salt for Fred.\nWe recived information that Fred wanted\nto dry all lakes with the saltwater\nto have a monopol on the drinkable water\nand become the world's most powerful being."); this.npcHandler.stageUpNPCs(["agent2","agent3"])},
                () => say("But you stoped him. Well done!\nPlease go to Agent Redidi and tell him what we found out about the ghosts."),
                () => say("Well, I don't know what you could do, but maybe ask Agent Yellowski.")],
        position: { x: 50, y: 188 },
    },
    {
        name: 'agent3',
        stage: 0,
        action: [() => say("Aye, ma'am! I'm Agent Redidi working for the\nMagdeburgian Agency for Fred Research and Countermeasures.\nIf you have any concerns about Fred, please report to Agent Greenoble."),
                () => {say("Yes, here you are at the right location.\nHow can I help you? You want to help and have no concrete issue.\nWell, I can't help you but I know who!"); this.npcHandler.stageUpNPCs(["agent3","agent2"])},
                () => say("Please talk to Agent Greenoble\nand he will tell you how to help."),
                () => {say("You need paper? Nothing easier than that! Here you go!"); this.npcHandler.stageUpNPCs(["agent3","agent2"])},
                () => say("Now you can bring Agent Greenoble some paper."),
                () => {say("Welcome on board!\nYou are now officially part of the\nMagdeburgian Agency for Fred Research and Countermeasures."); this.npcHandler.stageUpNPCs(["agent3","clock"])},
                () => say("I don't have the time to talk to you right now,\nbut in one floor there is a grandfathers clock.\nTalk to it and it will tell you what to do."),
                () => {say("Wow well done!\nAs a reward you recive a bamboo.\nIt should be right here..."); this.npcHandler.stageUpNPCs(["agent3","agent1"]);},
                () => say("...\nI forgot the bamboo at Agent Yellowski,\ngo to him, and he will give you the bamboo."),
                () => say("Sorry, right now I'm out of tasks, but I think Agent Greenoble talked about something.")],
        position: { x: 66, y: 184 },
    },
    {
        name: 'clock',
        stage: 0,
        action: [() => say("Tick tock, tick tock, tick tock, tick tock, tick tock,\ntick tock, tick tock, tick tock, tick tock, tick tock, tick tock,\ntick tock, tick tock, tick tock, tick tock,\ntick tock, tick tock, tick tock, tick tock, tick tock, tick tock,\ntick tock, tick tock, tick tock, tick tock, tick tock"),
                () => {say("Tiki-tiki-tiki\nMa-te-te-ki-ta-ka-ta"); this.npcHandler.stageUpNPCs(["clock"])},
                () => {say("Tiki.. Tiki.. Tiki, TIKI-TI"); this.npcHandler.stageUpNPCs(["clock"])},
                () => {say("Bam da da dam dam dadadada\nBam da da da da dadadadam"); this.npcHandler.stageUpNPCs(["clock"])},
                () => {say(clock1); this.npcHandler.stageUpNPCs(["clock","ghost1","ghost2","ghost3"])},
                () => say("Here is a device to catch the ghosts.\nFind all 3 ghosts located at the sea, catch them and bring them to me.\nTiki-tiki-tiki\nMa-te-te-ki-ta-ka-ta"),
                () => {say("Tiki tiki, you catched all the ghosts?\nNice work, the agents will look for you now. And don't forget to tiki-tiki-tiiiii"); this.npcHandler.stageUpNPCs(["clock","agent1"])},
                () => say("Go to Agent Yellowski.\nTiki-tiki-tiki\nMa-te-te-ki-ta-ka-ta"),
                () => say("Tiki-tiki-tiki\nMa-te-te-ki-ta-ka-ta\nTiki-tiki-tiki\nMa-te-te-ki-ta-ka-ta")],
        position: { x: 54, y: 183 },
    },
    {
        name: 'ghost1',
        stage: 0,
        action: [() => say("Woooooohhhh, where is my saltwater?"),
                () => {say("Arrrggg, dooooooh not catch me please!"); this.npcHandler.addToInventory("ghost"); if (this.npcHandler.inventory.filter(x => x === "ghost").length === 3) {this.npcHandler.stageUpNPCs(["clock"]);}; this.npcHandler.stageUpNPCs(["ghost1"])},
                () => say("You already catched this ghost!")],
        position: { x: 44, y: 310 },
        img: 'ghost'
    },
    {
        name: 'ghost2',
        stage: 0,
        action: [() => say("IIIIIh neeeehd saltwaterhhh!!!"),
                () => {say("Arrrggg, dooooooh not catch me please!"); this.npcHandler.addToInventory("ghost"); if (this.npcHandler.inventory.filter(x => x === "ghost").length === 3) {this.npcHandler.stageUpNPCs(["clock"]);}; this.npcHandler.stageUpNPCs(["ghost2"])},
                () => say("You already catched this ghost!")],
        position: { x: 93, y: 327 },
        img: 'ghost'
    },
    {
        name: 'ghost3',
        stage: 0,
        action: [() => say("Saltwaterrrrrrhhhhhhhhhhhhh, I neeeeed itttt!!!"),
                () => {say("Arrrggg, dooooooh not catch me please!"); this.npcHandler.addToInventory("ghost"); if (this.npcHandler.inventory.filter(x => x === "ghost").length === 3) {this.npcHandler.stageUpNPCs(["clock"]);}; this.npcHandler.stageUpNPCs(["ghost3"])},
                () => say("You already catched this ghost!")],
        position: { x: 133, y: 294 },
        img: 'ghost'
    },


    //// PART 1 ////
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
                () => {say("Yayy gracias! You found the plan!\nNow we can get back to work and send the letters to their destinations.\nThank you so much! Here a bamboo!"); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["duo", "trader", "map", "finley"]);},
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
                () => {say("You found the map! Bring it to the poststation."); this.npcHandler.addToInventory("Map"); this.npcHandler.stageUpNPCs(["duo", "carte"])},
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
                () => {say("DIS 1 GOT IT! Thank you homie. Finally I can drop, SORRY 4 DA WAIT. Here ya go wit a bamboo."); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs(["carti", "red", "cat"])},
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
    ];
    }

    getBambooData() {
        const bamboos = [];
        const positions = [
            // Part 1
            { x: 0, y: 38 },
            { x: 100, y: 1 },
            { x: 71, y: 143 },
            { x: 0, y: 150 },
            // Part 2
            { x: 186, y: 168 },
            { x: 187, y: 311 },
            { x: 0, y: 268 },
            { x: 58, y: 224 },
            { x: 86, y: 157 }
        ];

        for (let i=0; i<positions.length; i++) {
            bamboos.push({
                name: `bamboo${i + 1}`,
                stage: 0,
                action: [() => {say("You found a bamboo!"); this.npcHandler.addBamboo(); this.npcHandler.stageUpNPCs([`bamboo${i + 1}`])},
                        () => say("You already found this bamboo")],
                position: positions[i],
                img: 'bamboo',
            });
        }
        return bamboos;
    }

    getLetterData() {
        const letters = [];
        const positions = [
            { x: 42, y: 2 },
            { x: 33, y: 143 },
            { x: 45, y: 55 },
            { x: 67, y: 11 },
            { x: 148, y: 2 },
            { x: 149, y: 19 },
            { x: 77, y: 93 },
            { x: 91, y: 147 },
            { x: 28, y: 110 },
            { x: 59, y: 133 },
        ]
        const messages = [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8, letter9, letter10];

        for (let i=0; i<positions.length; i++) {
            letters.push({
                name: `letter${i + 1}`,
                stage: 0,
                action: [() => say(messages[i])],
                position: positions[i],
                img: 'letter',
            });
        }
        return letters;
    }
}