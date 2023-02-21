export const NPCCombatTraits = [
  {
    lethal: {
      name: "Lethal",
      text: "Lethal grants a certain number of automatic successes when a character takes an action. For example: An NPC with Power 5 and Lethal Melee 2 flips five cards and adds two successes to their result when making a Melee attack. If a character has multiple Lethal traits, the effects of these are cumulative. Yeah, it stacks.",
    },
  },
  {
    interference: {
      name: "Interference",
      text: "Interference removes cards from flips made against this character. For example: A character flipping 7 cards for a [Brawn + Melee] attack against a character with Melee Interference 3 can only flip 4 cards. If Interference would reduce the number of cards flipped to 0 or lower, flip 1 card instead. If a character has multiple Interference traits, the effects of these are cumulative. This also stacks.",
    },
  },
  {
    extraTarget: {
      name: "Extra Target",
      text: "Extra Target copies the effects of one attack onto multiple targets.",
    },
  },
  {
    stealth: {
      name: "Stealth",
      text: "Stealth allows characters to hide from view, meaning they must be discovered before they can be attacked directly. Stealth is reduced by one at the beginning of each turn. Players may flip [Intelligence/Wit + Investigation] to remove Stealth points from a character.",
    },
  },
  {
    guard: {
      name: "Guard",
      text: "Guard protects other, usually weaker characters without the Guard ability. Each allied character without Guard gains Interference equal to the amount of Guard shared across all allies. For example: An NPC with Guard 2 and one with Guard 1 grant Interference 3 to allies in combat with them, but not to each other.",
    },
  },
  {
    hardened: {
      name: "Hardened",
      text: "Hardened NPCs are tougher than average thanks to a generous armored shell. If a Hardened character would take 2 or more damage from an external source, reduce that damage by 1. If an enemy attacks a Hardened character with bare appendages, that enemy takes 1 damage. This damage cannot be dodged.",
    },
  },
  {
    speedDemon: {
      name: "Speed Demon",
      text: "When Assaults take their first action in combat, they flip 2 additional cards.",
    },
  },
  {
    smokeBomb: {
      name: "Smoke Bomb",
      text: "Once per combat encounter, Assaults may flip [Power]. The Assault and their allies gain Stealth equal to their successes.",
    },
  },
  {
    bubble: {
      name: "Bubble",
      text: "Scions and their allies gain Firearms Interference 1.",
    },
  },
  {
    flight: {
      name: "Flight",
      text: "Jetpacks have Melee Interference 3 until they have taken damage equal to or exceeding half of their Health.",
    },
  },
  {
    ratKing: {
      name: "Rat King",
      text: "You may use your action to grant another ally Lethal 1 until the end of their turn.",
    },
  },
  {
    demoralize: {
      name: "Demoralize",
      text: "When this character dies, reduce all their allies' Power by 1 for the rest of combat.",
    },
  },
  {
    rage: {
      name: "Rage",
      text: "Gain Lethal Melee 1 if they've taken any damage.",
    },
  },
  {
    randomTargets: {
      name: "Random Targets",
      text: "When this character flips an Explosives action, the Host, each player, and each NPC in combat also flip a single card. Each character who flipped lower than the Host's card takes damage equal to the number of successes. Aces are High, Jokers increase the amount of successes to Pirate Bomber's action by 1.",
    },
  },
  {
    spacePox: {
      name: "Space Pox",
      text: "When a Rat deals damage to a character's Health, that character becomes Diseased and suffers -1 to their Brawn actions. Any character may take a [Intelligence + Biology] action on their turn to engineer a cure. If 2 cumulative successes are gained, the Disease is removed.",
    },
  },
  {
    packLeader: {
      name: "Pack Leader",
      text: "The Huntress and other characters allied with them gain Lethal Melee 1.",
    },
  },
  {
    bloodSucker: {
      name: "Blood Sucker",
      text: "Whenever the Chupacabra deals Melee damage to a character's Health, they recover that much Health.",
    },
  },
  {
    acidBreath: {
      name: "Acid Breath",
      text: "Flip [Power]. The Chupacabra deals Biology damage equal to the number of successes flipped to up to two enemies.",
    },
  },
  {
    shockArmor: {
      name: "Shock Armor",
      text: "Characters who deal Melee damage to an Endboss take 1 damage. This damage cannot be dodged.",
    },
  },
  {
    darkPulse: {
      name: "Dark Pulse",
      text: "Flip [Power]. Each enemy takes Telekinesis damage equal to the number of successes flipped.",
    },
  },
  {
    finalForm: {
      name: "Final Form",
      text: "If the Endboss takes more damage than half of their Health, they gain Extra Target 1.",
    },
  },
];
