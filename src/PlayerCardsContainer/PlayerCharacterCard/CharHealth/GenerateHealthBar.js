import greenDot from "../../../Assets/Images/icons8-green-circle-96.png";

export const GenerateHealthBar = (maxHealth) => {
  let red = [];
  let yellow = [];
  let green = [];
  let bar = [];
  for (let i = 0; i < maxHealth / 3; i++) {
    red.push(<img className="health-bar-dot" src={greenDot} />);
    yellow.push(<img className="health-bar-dot" src={greenDot} />);
    green.push(<img className="health-bar-dot" src={greenDot} />);
  }
  bar = red.concat(yellow, green);
  return bar;
};
