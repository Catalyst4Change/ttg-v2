import { NPCCombatTraits } from "./NPCCombatTraits";

const [
  lethal,
  interference,
  extraTarget,
  stealth,
  guard,
  hardened,
  speedDemon,
  smokeBomb,
  bubble,
  flight,
  ratKing,
  demoralize,
  rage,
  randomTargets,
  spacePox,
  packLeader,
  bloodSucker,
  acidBreath,
  shockArmor,
  darkPulse,
  finalForm,
] = NPCCombatTraits;

export const NPCList = [
  {
    trooper: {
      type: "Trooper",
      health: 4,
      power: 5,
      initiative: 3,
      combatTraits: [],
      flavorText:
        "Troopers will most often attack the loudest, most distracting character, or whoever hurt them last. They rarely run away from a losing fight, but can be Persuaded to surrender if outnumbered or outgunned.",
    },
  },
  {
    elite: {
      type: "Elite",
      health: 4,
      power: 5,
      initiative: 4,
      combatTraits: [lethal],
      flavorText:
        "Elites start a fight with a target in mind (usually either the weakest or the strongest in a group) and tend to focus all their firepower on that target. Elites usually work in teams or lead a small force of Troopers. Elites will attempt to flee if a battle goes sideways.",
    },
  },
  {
    assault: {
      type: "Assault",
      health: 4,
      power: 6,
      initiative: 5,
      combatTraits: [interference, speedDemon, smokeBomb],
      flavorText:
        "Assaults target the biggest enemy they see and hit them as hard as possible. If they suffer significant damage or losses in combat, they will drop a Smoke Bomb to escape.",
    },
  },
  {
    slasher: {
      type: "Slasher",
      health: 3,
      power: 7,
      initiative: 6,
      combatTraits: [interference],
      flavorText:
        "Slashers work alone and prefer to divide their enemies up to pick them off one by one. They usually retreat the instant a fight stops going their way.",
    },
  },
  {
    scion: {
      type: "Scion",
      health: 3,
      power: 6,
      initiative: 4,
      combatTraits: [bubble],
      flavorText:
        "Scions prefer to have several Troopers and at least one Defender between them and danger. They use their telekinetic attacks on whichever enemy seems like the biggest threat.",
    },
  },
  {
    jetPack: {
      type: "Jetpack",
      health: 4,
      power: 6,
      initiative: 5,
      combatTraits: [flight],
      flavorText:
        "Jetpacks attack erratically, spreading damage over multiple targets. They rarely retreat before crashing.",
    },
  },
  {
    defender: {
      type: "Defender",
      health: 4,
      power: 6,
      initiative: 3,
      combatTraits: [guard],
      flavorText:
        "Defenders partner up with a more vulnerable character and get up in the business of the closest, most aggressive enemy they see.",
    },
  },
  {
    royalGuard: {
      type: "Royal Guard",
      health: 5,
      power: 7,
      initiative: 4,
      combatTraits: [guard, hardened],
      flavorText:
        "Royal Guards defend a particular person, location, or object with everything they have. They always fight to the death and will sacrifice themselves to save their charge.",
    },
  },
  {
    kingPin: {
      type: "Kingpin",
      health: 3,
      power: 5,
      initiative: 6,
      combatTraits: [ratKing, demoralize],
      flavorText:
        "Kingpins manipulate the flow of combat behind as many Defenders and Royal Guards as they can gather. Even their lowliest allies will attempt to preserve the life of a Kingpin.",
    },
  },
  {
    raptor: {
      type: "Raptor",
      health: 3,
      power: 6,
      initiative: 6,
      combatTraits: [rage],
      flavorText:
        "Raptors hunt in packs and start a fight with caution, probing for the weakest enemy before attacking without mercy. Once enraged, they'll fight to the death.",
    },
  },
  {
    pterosaur: {
      type: "Pterosaur",
      health: 6,
      power: 6,
      initiative: 4,
      combatTraits: [flight, rage],
      flavorText:
        "Pterosaurs are often solitary and endeavor not to stick around long enough to lose their Flight trait.",
    },
  },
  {
    bot: {
      type: "Bot",
      health: 4,
      power: 6,
      initiative: 4,
      combatTraits: [hardened],
      flavorText:
        "Bots usually carry out simple commands, ignoring beings who stay out of their way. Bots commanded to eradicate a being won't stop until the job is done.",
    },
  },
  {
    heavy: {
      type: "Heavy",
      health: 4,
      power: 6,
      initiative: 3,
      combatTraits: [extraTarget, hardened],
      flavorText:
        "Heavys' propensity to attack multiple targets and take on long odds often compels their allies to do the same. They attack erratically, spreading damage evenly among their enemies.",
    },
  },
  {
    spiderTank: {
      type: "Spider Tank",
      health: 8,
      power: 7,
      initiative: 3,
      combatTraits: [lethal, hardened],
      flavorText:
        "Spider Tanks are robotic death machines with advanced weapons and simple programming. They attack the biggest, loudest lifeform first and work their way down.",
    },
  },
  {
    sniper: {
      type: "Sniper",
      health: 4,
      power: 6,
      initiative: 5,
      combatTraits: [lethal, stealth],
      flavorText:
        "Snipers attack alone, but may work with another character who acts as a distraction. When their Stealth is blown, they attempt to either escape or finish the job; they do not surrender.",
    },
  },
  {
    gunSlinger: {
      type: "Gun Slinger",
      health: 6,
      power: 6,
      initiative: 5,
      combatTraits: [lethal, extraTarget],
      flavorText:
        "Gunslingers range from scoundrels to semi-honorable folks, though most tend to be cocky and overly self-assured.",
    },
  },
  {
    swabbie: {
      type: "Swabbie",
      health: 3,
      power: 5,
      initiative: 5,
      combatTraits: [],
      flavorText:
        "Swabbies are cowardly and disorganized. They attack the closest enemy they see and run at the first sign of trouble.",
    },
  },
  {
    lunk: {
      type: "Lunk",
      health: 8,
      power: 6,
      initiative: 2,
      combatTraits: [],
      flavorText:
        "Lunks are strong, slow, and seldom listen to reason. They attack ferociously unless ordered to stop, and rarely run away from combat.",
    },
  },
  {
    cyborg: {
      type: "Cyborg",
      health: 4,
      power: 6,
      initiative: 5,
      combatTraits: [extraTarget],
      flavorText:
        "Cyborgs detest direct combat and will attempt to flee or sabotage their enemies instead. When cornered, they'll surrender.",
    },
  },
  {
    dissasembler: {
      type: "Dissassembler",
      health: 6,
      power: 6,
      initiative: 5,
      combatTraits: [lethal],
      flavorText:
        "Disassemblers immediately target any robotic enemies, and may flee combat if there's no good salvage to be had.",
    },
  },
  {
    pirate: {
      type: "Pirate",
      health: 6,
      power: 6,
      initiative: 5,
      combatTraits: [lethal, rage],
      flavorText:
        "Disassemblers immediately target any robotic enemies, and may flee combat if there's no good salvage to be had.",
    },
  },
  {
    bomber: {
      type: "Bomber",
      health: 4,
      power: 8,
      initiative: 4,
      combatTraits: [lethal, randomTargets],
      flavorText:
        "Bombers feel twisted glee at causing as much havoc as possible whether they're in their ships or in a brawl. Other allies may be more inclined to leave any fight a Pirate Bomber participates in.",
    },
  },
  {
    rat: {
      type: "Rat",
      health: 2,
      power: 4,
      initiative: 5,
      combatTraits: [spacePox, ratKing],
      flavorText:
        "Rats attack relentlessly if cornered or surprised. Surprisingly, they're extremely coordinated and work well with other units, especially other Rats.",
    },
  },
  {
    huntress: {
      type: "Rat",
      health: 7,
      power: 7,
      initiative: 6,
      combatTraits: [interference, packLeader, lethal],
      flavorText:
        "Huntresses often fight surrounded by Raptors and Pterosaurs, which are committed to protecting the Huntress at all costs.",
    },
  },
  {
    chupacabra: {
      type: "Chupacabra",
      health: 8,
      power: 8,
      initiative: 4,
      combatTraits: [lethal, bloodSucker, acidBreath],
      flavorText:
        "Chupacabras typically fight in pairs and become more ferocious as they take damage.",
    },
  },
  {
    endBoss: {
      type: "Endboss",
      health: 30,
      power: 8,
      initiative: 5,
      combatTraits: [lethal, interference, shockArmor, darkPulse, finalForm],
      flavorText:
        "Endbosses cannot be Persuaded or intimidated. The Endboss fights to the death and will always act to weaken or kill the most vulnerable target.",
    },
  },
];
