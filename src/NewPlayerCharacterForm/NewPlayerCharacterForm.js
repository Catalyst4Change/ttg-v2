import React, { useState } from "react";
import "../App.scss";
import { AttributesForm } from "./AttributesForm";
import { BasicsForm } from "./BasicsForm";
import { MasteriesForm } from "./MasteriesForm";
import { ProficienciesForm } from "./ProficienciesForm";
import "./NewPlayerCharacterForm.scss";

export const NewPlayerCharacterForm = ({
  addPlayerCharacter,
  setDeployNewCharacterForm,
}) => {
  const [formPage, setFormPage] = useState(0);

  const [playerName, setPlayerName] = useState("");
  const [charName, setCharName] = useState("");
  const [charConcept, setCharConcept] = useState("");
  const [charImage, setCharImage] = useState("");

  const [attributes, setAttributes] = useState({
    brawn: 1,
    agility: 1,
    intelligence: 1,
    wit: 1,
    charm: 1,
    presence: 1,
  });

  const [skills, setSkills] = useState([
    "Athletics",
    "Biology",
    "Computers",
    "Empathy",
    "Engineering",
    "Explosives",
    "Firearms",
    "Investigation",
    "Lying",
    "Melee",
    "Perform",
    "Persuasion",
    "Piloting",
    "Sneaking",
    "Spacewise",
    "Survival",
    "Telekinesis",
    "Telepathy",
  ]);

  const [skillTips, setSkillTips] = useState({
    athletics: {
      name: "Athletics",
      text: "The Athletics skill is used for running, jumping, and climbing trees. Any physical activity outside of combat is a good candidate for an Athletics flip. Running away is usually done with Athletics.",
    },
    biology: {
      name: "Biology",
      text: "Biology is useful for identifying living (or formerly living) beings and for diagnosing and treating ailments. Activities involving knowledge of living tissue like doctorin' or experimentin' may require Biology.",
    },
    computers: {
      name: "Computers",
      text: "The Computers skill determines a character's effectiveness with, you guessed it, computers. That means programming, hacking, data mining, and/or actions relating specifically to computer hardware, artificial intelligence, or anything with too many buttons.",
    },
    empathy: {
      name: "Empathy",
      text: "Empathy measures a character's skill at reading, soothing, and agitating another person's emotions. Empathy can be used anywhere emotional intelligence and understanding are needed. The tragedy of empathy is that it's least remembered when it's most required.",
    },
    engineering: {
      name: "Engineering",
      text: "Engineering represents a character's ability to construct, invent, and fix mechanical objects. Characters practiced in Engineering usually know a bit about math and physics and benefit from higher Intelligence and Wit scores.",
    },
    explosives: {
      name: "Explosives",
      text: "Want to blow something up on purpose? We highly recommend the Explosives skill. Explosives represents knack and enthusiasm for bombs, grenades, delicate compounds, and other things that go boom. You could also use Explosives to prevent something from blowing up, but where's the fun in that?",
    },
    firearms: {
      name: "Firearms",
      text: "Firearms represents a character's ability to manipulate projectile weapons, usually for homicide. Firing pistols, rifles, shotguns, laser guns, plasma miniguns, slingshots, potato cannons and more falls under the umbrella of a Firearms flip. Are bows Firearms? I guess they are. Sure.",
    },
    investigation: {
      name: "Investigation",
      text: "Investigation represents a character's ability to uncover information, clues, treasure, and traps. If you have a hunch that a suspicious environment is concealing something, use Investigation to find out.",
    },
    lying: {
      name: "Lying",
      text: "Lying represents a character's ability to bend, manipulate, and conceal the truth. A little Lying can be useful in day-to-day adventuring! Note: The makers of Space Kings want to remind everyone that you should endeavor to live an honest life, or at least keep your story straight.",
    },
    melee: {
      name: "Melee",
      text: "Melee is everyone's favorite skill for punching, elbow-dropping, smashing, tripping, bonking, stomping, slicing, chopping, poking, suplexing, et cetera. Are you hitting something or someone? Use Melee.",
    },
    perform: {
      name: "Perform",
      text: "Entertaining people is hard. Sometimes you have to give the people what they want and sometimes you have to express the phantom roar of your bleeding soul. Walk that fine line with the Perform skill!",
    },
    persuasion: {
      name: "Persuasion",
      text: "The universe would be a much better place if we all sat down, put away our anti-time grenade launchers, and talked to each other, wouldn't it? If you'd like to forge a new age built on calm, rational dialogue and everyone listening exclusively to you, choose Persuasion.",
    },
    piloting: {
      name: "Piloting",
      text: "Spaceships are absolutely the coolest idea that life has come up with and Piloting spaceships is the coolest action life is capable of. If you want to do barrel rolls, loop-de-loops, and cool flips while inside a metal death machine, choose Piloting.",
    },
    sneaking: {
      name: "Sneaking",
      text: "Trouble is a fake idea as long as you don't get caught. Sneaking is one way to temporarily avoid trouble without getting caught. Murder is another, dicier way. Probably easier to Sneak, though.",
    },
    spacewise: {
      name: "Spacewise",
      text: "Untold opportunities lie nestled in the inhabited regions of space, discoverable only by those who know where to go, who to talk to, and what to avoid. If you love navigating the stars as much as navigating a new city, if you want to trust the compass in your heart, consider Spacewise.",
    },
    survival: {
      name: "Survival",
      text: "Ah, Space. The most hostile and deadly frontier. Most planets don't even have a bathroom. In the wild, wild void, learning how to slap together a makeshift space suit or construct a shelter from trash could save your life. It's a tough Universe out there. If you want to survive, use Survival.",
    },
    telekinesis: {
      name: "Telekinesis",
      text: "Telekinesis turns brain power into physical power. Through sheer force of will, masters of Telekinesis can levitate objects, push goons, and even distort the fabric of reality a little bit.",
    },
    telepathy: {
      name: "Telepathy",
      text: "Telepathy represents a character's ability to connect their mind to other minds and defend from unwanted connections. Master telepaths can essentially infiltrate minds as a hacker infiltrates computer networks, the difference being the hacker usually isn't reduced to brain goo if they're hacked right back. Note: Never tell anyone the password to your brain.",
    },
  });

  const [chosenMasteries, setChosenMasteries] = useState([]);
  const [chosenProficiencies, setChosenProficiencies] = useState([]);

  const advanceFormPage = () => {
    setFormPage((formPage) => formPage + 1);
  };

  const submitNewCharacter = () => {
    advanceFormPage();
    const newChar = {
      playerName: playerName,
      charName: charName,
      charConcept: charConcept,
      charImage: charImage,
      attributes: attributes,
      chosenMasteries: chosenMasteries,
      chosenProficiencies: chosenProficiencies,
    };
    setDeployNewCharacterForm(false);

    addPlayerCharacter(newChar);
  };

  return (
    <main id="char-sheet">
      {/* create character */}
      <section id="0" className="form column center">
        {formPage === 0 && (
          <BasicsForm
            playerName={playerName}
            setPlayerName={setPlayerName}
            charName={charName}
            setCharName={setCharName}
            charConcept={charConcept}
            setCharConcept={setCharConcept}
            charImage={charImage}
            setCharImage={setCharImage}
            advanceFormPage={advanceFormPage}
            setDeployNewCharacterForm={setDeployNewCharacterForm}
          />
        )}
        {formPage === 1 && (
          <AttributesForm
            attributes={attributes}
            setAttributes={setAttributes}
            advanceFormPage={advanceFormPage}
            setDeployNewCharacterForm={setDeployNewCharacterForm}
          />
        )}
        {formPage === 2 && (
          <MasteriesForm
            chosenMasteries={chosenMasteries}
            setChosenMasteries={setChosenMasteries}
            skills={skills}
            setSkills={setSkills}
            advanceFormPage={advanceFormPage}
            setDeployNewCharacterForm={setDeployNewCharacterForm}
          />
        )}
        {formPage === 3 && (
          <ProficienciesForm
            chosenProficiencies={chosenProficiencies}
            setChosenProficiencies={setChosenProficiencies}
            skills={skills}
            setSkills={setSkills}
            intelligence={attributes.intelligence}
            submitNewCharacter={submitNewCharacter}
          />
        )}

        {/* {formPage === 4 &&
          {
          }} */}
      </section>
      <p>anti-joker</p>
      {/* <div className="badge anti-joker grey">
        🚫
        <p className="tooltip">
          When Jokers and Anti-Jokers collide, they obliterate each other. Use
          wisely to avoid the chaotic effects of flipping a Joker.
        </p>
      </div> */}
    </main>
  );
};
