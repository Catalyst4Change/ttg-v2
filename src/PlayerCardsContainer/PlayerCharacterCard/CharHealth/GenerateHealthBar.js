import greenDot from "../../../Assets/Images/icons8-green-circle-96.png";
import yellowDot from "../../../Assets/Images/icons8-yellow-circle-96.png";
import redDot from "../../../Assets/Images/icons8-red-circle-96.png";

export const GenerateHealthBar = (maxHealth) => {
  let red = [];
  let yellow = [];
  let green = [];
  let bar = [];
  const translation = 21;
  const healthDots = maxHealth / 3;
  for (let i = 0; i < healthDots; i++) {
    red.push(
      <circle
        key={Math.random()}
        transform={`translate(${i * translation}, ${11})`}
        r="10.5"
        strokeWidth={1}
        stroke="darkred"
        fill="red"
      ></circle>
    );
    yellow.push(
      <circle
        key={Math.random()}
        transform={`translate(${
          translation * healthDots + i * translation
        }, ${11})`}
        r="10.5"
        strokeWidth={1}
        stroke="gold"
        fill="yellow"
      ></circle>
    );
    green.push(
      <circle
        key={Math.random()}
        transform={`translate(${
          translation * healthDots * 2 + i * translation
        }, ${11})`}
        r="10.5"
        strokeWidth={1}
        stroke="green"
        fill="limegreen"
      ></circle>
    );
  }
  bar = red.concat(yellow, green);
  return bar;
};
