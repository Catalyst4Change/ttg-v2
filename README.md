# Space Kings Character Tracker

Hello! I'm Catalyst.  
As a novice coder and budding Game/Dungeon Master, I wanted to build a way to keep track of my players' characters and my NPCs. It's nice to be able to reference that info at a glance without having a bunch of note cards everywhere. After two solid weeks of hacking at it, I believe I have made just the thing.
I digitized Space Kings' character sheets, then did all the math and logic to make them interactive. [Space Kings](https://supertry.itch.io/spacekings) is a rad [TTRPG](https://en.wikipedia.org/wiki/Tabletop_role-playing_game) made by [Kevin Cole](https://supertry.itch.io), who doesn't seem very litigious. It's fun, less complicated than D&D, plus it's in fucking space. Currently, my players' characters are hard-coded in. Consider it an example of what's possible. Delete them and create your own!

### A user is able to:
- Create a new player character sheet (with error-handling, so you don't forget anything)!
- View all your stats at a glance and mouseover any term to see it's definition!
- Lose and gain Health, plus be shown your condition at any point!
- Keep track of Drive, Dodge, Hero Points, and the vital Anti-Joker! 
- Add notes to the character to track inventory or remind you of your Ultimate traits!
- Deploy pre-made NPCs or create your own!
- Delete a card if the character dies! So it goes.
- Stare into 8-bit space for hours on end!

### It is a desktop web-app available for free [HERE](https://space-kings-desktop.vercel.app).

If you find a bug or have an idea, I would love to hear any feedback at [CatalystFourChange@iCloud.com](mailto:catalystfourchange@icloud.com).  
If you like it, consider giving me a job and paying me to build more cool stuff.  
While you're at it, checkout my website: [catalyst.sex](https://catalyst.sex)

![screenshot of app showing player characters](https://github.com/Catalyst4Change/ttg-v2/blob/main/Screenshot%202023-03-04%20at%202.19.46%20AM.png)
![screenshot of NPCs](https://github.com/Catalyst4Change/ttg-v2/blob/main/Screenshot%202023-03-04%20at%202.32.37%20AM.png)

### Known bugs and next steps:
- Fix the wonky styling issues in Safari. Looks great in Chrome tho.
  - Turns out Safari adds a few pixels of white space around emojis that is not present in Chrome or Firefox. This very small differeence was causing huge problems with my UI. I'm in the process of removing the emojis and replacing them with PNGs.
- Select Ulitimates during character creation as a choice based on your Attributes & Skills.
- Add mobile-firendly individual character sheet for players. 
- Save your player characters and custom NPCs to your computer and eventually to the cloud.
- Sync Host's account with their players so an update on one changes the other.

In the course of building this I learned a lot about state-management and modifying values of keys in objects in objects in arrays in state. 
This app was made using HTML, SCSS, React, & JavaScript. I used no dependancies.
