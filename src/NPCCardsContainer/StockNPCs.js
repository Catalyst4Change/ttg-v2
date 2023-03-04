import { NPCCombatTraits } from "./NPCCombatTraitsList";

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

export const StockNPCs = [
  {
    type: "Trooper",
    currentHealth: 4,
    maxHealth: 4,
    power: 5,
    initiative: 3,
    combatTraits: [],
    notes: "",
    flavorText:
      "Troopers will most often attack the loudest, most distracting character, or whoever hurt them last. They rarely run away from a losing fight, but can be Persuaded to surrender if outnumbered or outgunned.",
  },
  {
    type: "Elite",
    currentHealth: 4,
    maxHealth: 4,
    power: 5,
    initiative: 4,
    combatTraits: [lethal],
    notes: "",
    flavorText:
      "Elites start a fight with a target in mind (usually either the weakest or the strongest in a group) and tend to focus all their firepower on that target. Elites usually work in teams or lead a small force of Troopers. Elites will attempt to flee if a battle goes sideways.",
  },
  {
    type: "Assault",
    currentHealth: 4,
    maxHealth: 4,
    power: 6,
    initiative: 5,
    combatTraits: [interference, speedDemon, smokeBomb],
    notes: "",
    flavorText:
      "Assaults target the biggest enemy they see and hit them as hard as possible. If they suffer significant damage or losses in combat, they will drop a Smoke Bomb to escape.",
  },
  {
    type: "Slasher",
    currentHealth: 3,
    maxHealth: 3,
    power: 7,
    initiative: 6,
    combatTraits: [interference],
    notes: "",
    flavorText:
      "Slashers work alone and prefer to divide their enemies up to pick them off one by one. They usually retreat the instant a fight stops going their way.",
  },
  {
    type: "Scion",
    currentHealth: 3,
    maxHealth: 3,
    power: 6,
    initiative: 4,
    combatTraits: [bubble],
    notes: "",
    flavorText:
      "Scions prefer to have several Troopers and at least one Defender between them and danger. They use their telekinetic attacks on whichever enemy seems like the biggest threat.",
  },
  {
    type: "Jetpack",
    currentHealth: 4,
    maxHealth: 4,
    power: 6,
    initiative: 5,
    combatTraits: [flight],
    notes: "",
    flavorText:
      "Jetpacks attack erratically, spreading damage over multiple targets. They rarely retreat before crashing.",
  },
  {
    type: "Defender",
    currentHealth: 4,
    maxHealth: 4,
    power: 6,
    initiative: 3,
    combatTraits: [guard],
    notes: "",
    flavorText:
      "Defenders partner up with a more vulnerable character and get up in the business of the closest, most aggressive enemy they see.",
  },
  {
    type: "Royal Guard",
    currentHealth: 5,
    maxHealth: 5,
    power: 7,
    initiative: 4,
    combatTraits: [guard, hardened],
    notes: "",
    flavorText:
      "Royal Guards defend a particular person, location, or object with everything they have. They always fight to the death and will sacrifice themselves to save their charge.",
  },
  {
    type: "Kingpin",
    currentHealth: 3,
    maxHealth: 3,
    power: 5,
    initiative: 6,
    combatTraits: [ratKing, demoralize],
    notes: "",
    flavorText:
      "Kingpins manipulate the flow of combat behind as many Defenders and Royal Guards as they can gather. Even their lowliest allies will attempt to preserve the life of a Kingpin.",
  },
  {
    type: "Raptor",
    currentHealth: 3,
    maxHealth: 3,
    power: 6,
    initiative: 6,
    combatTraits: [rage],
    notes: "",
    flavorText:
      "Raptors hunt in packs and start a fight with caution, probing for the weakest enemy before attacking without mercy. Once enraged, they'll fight to the death.",
  },
  {
    type: "Pterosaur",
    currentHealth: 6,
    maxHealth: 6,
    power: 6,
    initiative: 4,
    combatTraits: [flight, rage],
    notes: "",
    flavorText:
      "Pterosaurs are often solitary and endeavor not to stick around long enough to lose their Flight trait.",
  },
  {
    type: "Bot",
    currentHealth: 4,
    maxHealth: 4,
    power: 6,
    initiative: 4,
    combatTraits: [hardened],
    notes: "",
    flavorText:
      "Bots usually carry out simple commands, ignoring beings who stay out of their way. Bots commanded to eradicate a being won't stop until the job is done.",
  },
  {
    type: "Heavy",
    currentHealth: 4,
    maxHealth: 4,
    power: 6,
    initiative: 3,
    combatTraits: [extraTarget, hardened],
    notes: "",
    flavorText:
      "Heavys' propensity to attack multiple targets and take on long odds often compels their allies to do the same. They attack erratically, spreading damage evenly among their enemies.",
  },
  {
    type: "Spider Tank",
    currentHealth: 8,
    maxHealth: 8,
    power: 7,
    initiative: 3,
    combatTraits: [lethal, hardened],
    notes: "",
    flavorText:
      "Spider Tanks are robotic death machines with advanced weapons and simple programming. They attack the biggest, loudest lifeform first and work their way down.",
  },
  {
    type: "Sniper",
    currentHealth: 4,
    maxHealth: 4,
    power: 6,
    initiative: 5,
    combatTraits: [lethal, stealth],
    notes: "",
    flavorText:
      "Snipers attack alone, but may work with another character who acts as a distraction. When their Stealth is blown, they attempt to either escape or finish the job; they do not surrender.",
  },
  {
    type: "Gun Slinger",
    currentHealth: 6,
    maxHealth: 6,
    power: 6,
    initiative: 5,
    combatTraits: [lethal, extraTarget],
    notes: "",
    flavorText:
      "Gunslingers range from scoundrels to semi-honorable folks, though most tend to be cocky and overly self-assured.",
  },
  {
    type: "Swabbie",
    currentHealth: 3,
    maxHealth: 3,
    power: 5,
    initiative: 5,
    combatTraits: [],
    notes: "",
    flavorText:
      "Swabbies are cowardly and disorganized. They attack the closest enemy they see and run at the first sign of trouble.",
  },
  {
    type: "Lunk",
    currentHealth: 8,
    maxHealth: 8,
    power: 6,
    initiative: 2,
    combatTraits: [],
    notes: "",
    flavorText:
      "Lunks are strong, slow, and seldom listen to reason. They attack ferociously unless ordered to stop, and rarely run away from combat.",
  },
  {
    type: "Cyborg",
    currentHealth: 4,
    maxHealth: 4,
    power: 6,
    initiative: 5,
    combatTraits: [extraTarget],
    notes: "",
    flavorText:
      "Cyborgs detest direct combat and will attempt to flee or sabotage their enemies instead. When cornered, they'll surrender.",
  },
  {
    type: "Dissassembler",
    currentHealth: 6,
    maxHealth: 6,
    power: 6,
    initiative: 5,
    combatTraits: [lethal],
    notes: "",
    flavorText:
      "Disassemblers immediately target any robotic enemies, and may flee combat if there's no good salvage to be had.",
  },
  {
    type: "Pirate",
    currentHealth: 6,
    maxHealth: 6,
    power: 6,
    initiative: 5,
    combatTraits: [lethal, rage],
    notes: "",
    flavorText:
      "Disassemblers immediately target any robotic enemies, and may flee combat if there's no good salvage to be had.",
  },
  {
    type: "Bomber",
    currentHealth: 4,
    maxHealth: 4,
    power: 8,
    initiative: 4,
    combatTraits: [lethal, randomTargets],
    notes: "",
    flavorText:
      "Bombers feel twisted glee at causing as much havoc as possible whether they're in their ships or in a brawl. Other allies may be more inclined to leave any fight a Pirate Bomber participates in.",
  },
  {
    type: "Rat",
    currentHealth: 2,
    maxHealth: 2,
    power: 4,
    initiative: 5,
    combatTraits: [spacePox, ratKing],
    notes: "",
    flavorText:
      "Rats attack relentlessly if cornered or surprised. Surprisingly, they're extremely coordinated and work well with other units, especially other Rats.",
  },
  {
    type: "Huntress",
    currentHealth: 7,
    maxHealth: 7,
    power: 7,
    initiative: 6,
    combatTraits: [interference, packLeader, lethal],
    notes: "",
    flavorText:
      "Huntresses often fight surrounded by Raptors and Pterosaurs, which are committed to protecting the Huntress at all costs.",
  },
  {
    type: "Chupacabra",
    currentHealth: 8,
    maxHealth: 8,
    power: 8,
    initiative: 4,
    combatTraits: [lethal, bloodSucker, acidBreath],
    notes: "",
    flavorText:
      "Chupacabras typically fight in pairs and become more ferocious as they take damage.",
  },
  {
    type: "Endboss",
    currentHealth: 30,
    maxHealth: 30,
    power: 8,
    initiative: 5,
    combatTraits: [lethal, interference, shockArmor, darkPulse, finalForm],
    notes: "",
    flavorText:
      "Endbosses cannot be Persuaded or intimidated. The Endboss fights to the death and will always act to weaken or kill the most vulnerable target.",
  },
];
