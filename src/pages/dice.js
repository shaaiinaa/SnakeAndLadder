import { useState } from "react";
import "./dice.css";
import dice1 from "./dice1.png";
import dice2 from "./dice2.png";
import dice3 from "./dice3.png";
import dice4 from "./dice4.png";
import dice5 from "./dice5.png";
import dice6 from "./dice6.png";
import dicePerspective from "./diceperspective2.jpg";
const Dice = ({ id, setDice, turn, dice, gameSpeed, setTurn }) => {
  const [active, setActive] = useState("");
  console.log(active, turn, id);

  const handleClick = () => {
    if (turn == 0) {
      setTurn(Number(id));
      console.log("Turn0");
    }
    console.log(dice.value);
    setActive("active");
    setTimeout(() => {
      setActive("");
      setDice({ value: randomNumber(1, 6), id: dice.id + 1 });
      localStorage.setItem("dice", dice);
    }, 1500 / gameSpeed);
  };
  const randomNumber = (min, max) => {
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    return (Date.now() % 6) + 1;
  };
  const handleFace = () => {};
  let diceFace = <div className="dice-face">Start</div>;

  if (dice.value == 1) {
    diceFace = <img className="dice-face" src={dice1} alt="dice1" />;
  } else if (dice.value == 2) {
    diceFace = <img className="dice-face" src={dice2} alt="dice2" />;
  } else if (dice.value == 3) {
    diceFace = <img className="dice-face" src={dice3} alt="dice3" />;
  } else if (dice.value == 4) {
    diceFace = <img className="dice-face" src={dice4} alt="dice4" />;
  } else if (dice.value == 5) {
    diceFace = <img className="dice-face" src={dice5} alt="dice5" />;
  } else if (dice.value == 6) {
    diceFace = <img className="dice-face" src={dice6} alt="dice6" />;
  }
  return (
    <>
      <div
        onClick={turn == id || turn == 0 ? handleClick : null}
        className={`dice ${active}`}
      >
        {active !== "active" ? diceFace : null}
        {active !== "active" && (
          <img
            className={`dice1 ${turn == id ? "active1" : ""} `}
            src={dicePerspective}
            onClick={handleFace}
          />
        )}
      </div>
    </>
  );
};
// setInterval(() => console.log(randomNumber(1, 6)), 1000);

export default Dice;
