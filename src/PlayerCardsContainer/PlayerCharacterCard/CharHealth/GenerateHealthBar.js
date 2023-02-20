export const GenerateHealthBar = (maxHealth, setHealthBar) => {
  let red = [];
  let yellow = [];
  let green = [];
  let bar = [];
  for (let i = 0; i < maxHealth / 3; i++) {
    red.push("🔴");
    yellow.push("🟡");
    green.push("🟢");
  }
  bar = red.concat(yellow, green);
  setHealthBar(bar);
};
