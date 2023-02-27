export const GenerateNPCHealthBar = (maxHealth, setHealthBar) => {
  let red = [];
  let yellow = [];
  let green = [];
  let bar = [];
  for (let i = 0; i < maxHealth; i++) {
    green.push("🔴");
  }
  setHealthBar(green);
};
