import "./game.css";
import Dice from "./dice";
import { useEffect, useState } from "react";
import boardImage from "./snakeladdersboard1.png";
import fountainImage from "./fountain.gif";
import { useNavigate } from "react-router-dom";
const snakes = [
  {
    id: "s2",
    start: 94,
    end: 71,
  },
  {
    id: "s3",
    start: 96,
    end: 42,
  },
  {
    id: "s4",
    start: 37,
    end: 3,
  },
  {
    id: "s5",
    start: 28,
    end: 10,
  },
  {
    id: "s6",
    start: 75,
    end: 32,
  },
  {
    id: "s7",
    start: 48,
    end: 16,
  },
];
const ladders = [
  {
    id: "l1",
    start: 4,
    end: 56,
  },
  {
    id: "l2",
    start: 22,
    end: 58,
  },
  {
    id: "l3",
    start: 41,
    end: 79,
  },
  {
    id: "l4",
    start: 14,
    end: 55,
  },
  {
    id: "l5",
    start: 54,
    end: 88,
  },
  {
    id: "l6",
    start: 12,
    end: 50,
  },
];
let arr1 = [];
let arr2 = [];

const Game = ({ row, column, emoji1, emoji2 }) => {
  const navigate = useNavigate();

  const [dice, setDice] = useState({ value: 0, id: 0 });
  const [user1, setUser1] = useState(1);
  const [user2, setUser2] = useState(1);
  const [turn, setTurn] = useState(1);
  const [showDice, setShowDice] = useState(true);
  const [path, setPath] = useState([]);
  const [gameSpeed, setGameSpeed] = useState("1");

  const speedChange = (e) => {
    setGameSpeed(e.target.value);
  };
  const reset = () => {
    setUser1(1);
    setUser2(1);
    arr1 = [];
    arr2 = [];
  };
  if (row == "" || column == "") {
    navigate("/");
  }
  const endgame = () => {
    navigate("/");
  };
  useEffect(() => {
    if (dice.value > 0) {
      setTimeout(() => setShowDice(false), 2000 / gameSpeed);
      if (turn == 1) {
        let r = dice.value;
        arr1.unshift(r);
        console.log(arr1);
        for (let i = 1; i <= dice.value; i++) {
          setTimeout(() => setUser1(user1 + i), ((i + 2) * 1000) / gameSpeed);
        }
        if (dice.value != 6) setTurn(2);
      }
      if (turn == 2) {
        let r = dice.value;
        arr2.unshift(r);
        console.log(arr2);
        for (let i = 1; i <= dice.value; i++) {
          setTimeout(() => setUser2(user2 + i), ((i + 2) * 1000) / gameSpeed);
        }
        if (dice.value != 6) setTurn(1);
      }
      setTimeout(() => {
        setShowDice(true);
      }, ((dice.value + 4) * 1000) / gameSpeed);
      if (turn === 1) {
        let initValue = user1;
        let finalValue = user1 + dice.value;
        const temp = [];
        for (let i = initValue; i < finalValue + 1; i++) {
          temp.push(i);
        }
        setPath(temp);
      }
      if (turn === 2) {
        let initValue = user2;
        let finalValue = user2 + dice.value;
        const temp = [];
        for (let i = initValue; i < finalValue + 1; i++) {
          temp.push(i);
        }
        setPath(temp);
      }

      // highlight array ko empty karo
      setTimeout(() => {
        setPath([]);
      }, ((dice.value + 4) * 1000) / gameSpeed);
    }
  }, [dice]);

  if (!row && !column) {
    navigate("/");
  }
  let matrix = [];
  let val = 0;
  for (let i = 9; i >= 0; i--) {
    if (i % 2 == 0)
      for (let j = 1; j <= 10; j++) {
        val = parseInt(i * 10);
        matrix.push(val + Number(j));
      }
    else {
      for (let j = 10; j >= 1; j--) {
        val = parseInt(i * 10);
        matrix.push(val + Number(j));
      }
    }
  }
  //console.log(matrix);

  return (
    <>
      <div class="player1-details">
        <h1>
          {row}
          {emoji1}
        </h1>
        {/* {showDice ? ( */}
        <Dice
          id="1"
          setDice={setDice}
          dice={dice}
          turn={turn}
          row={row}
          column={column}
          emoji1={emoji1}
          emoji2={emoji2}
          gameSpeed={gameSpeed}
        />
        {/* ) : null} */}
        <div className="game-history">
          <span className="array-style">{arr1}</span>
        </div>
      </div>
      <div class="player2-details">
        <h1>
          {column} {emoji2}
        </h1>
        {/* {showDice ? ( */}
        <Dice
          id="2"
          setDice={setDice}
          dice={dice}
          turn={turn}
          row={row}
          column={column}
          emoji1={emoji1}
          emoji2={emoji2}
          gameSpeed={gameSpeed}
        />
        {/* ) : null} */}
        <div className="game-history">
          <span className="array-style">{arr2}</span>
        </div>
      </div>
      <img class="game-fountain" src={fountainImage} />
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${10}, 1fr)`,
          gridTemplateRows: `repeat(${10}, ${100 / parseInt(10)}%)`,
        }}
      >
        {/* <div className="image"></div> */}
        <img src={boardImage} className="image"></img>

        {matrix.map((elem) => {
          let val = "";
          snakes.map((snake) => {
            if (snake.start === elem) {
              val = `🐍 👄 ${snake.id}`;
            } else if (snake.end === elem) {
              val = `🐍 ${snake.id}`;
            }
            if (snake.start === user1 && showDice) {
              setUser1(snake.end);
            }
            if (snake.start === user2 && showDice) {
              setUser2(snake.end);
            }
          });
          let val2 = "";
          ladders.map((ladder) => {
            if (ladder.start === elem) {
              val2 = `🪜 ${ladder.id}`;
            } else if (ladder.end === elem) {
              val2 = `🪜 ${ladder.id}`;
            }
            if (ladder.start === user1 && showDice) {
              setUser1(ladder.end);
            }
            if (ladder.start === user2 && showDice) {
              setUser2(ladder.end);
            }
          });
          let player1 = "";
          if (elem == user1) {
            player1 = (
              <>
                <div className="user-details">
                  <span className="game-text">{row}</span>
                  {emoji1}
                </div>
              </>
            );
          }
          let player2 = "";
          if (elem == user2) {
            player2 = (
              <>
                <div className="user-details">
                  <span className="game-text">{column}</span>
                  {emoji2}
                </div>
              </>
            );
          }
          if (user1 >= 100 || user2 >= 100) {
            return (
              <div className="winner-box">
                <h1>Player {turn != 1 ? row : column} wins!</h1>
                <button className="replay" onClick={reset}>
                  Replay
                </button>
                <button className="endgame" onClick={endgame}>
                  Close
                </button>
              </div>
              // return <div key={elem}>Player 1 Wins!</div>;
            );
          }

          return (
            <div
              key={elem}
              className={`grid-item ${
                // h.find((val) => val === elem) ? "highlight-path" : ""
                path.includes(elem)
                  ? `highlight-path${turn === 1 ? "1" : turn === 2 ? "2" : ""}`
                  : ""
              }`}
            >
              <div className="game-players">
                {player1}
                {player2}
              </div>
              {/* {elem} {val}
              {val2} */}
            </div>
          );
        })}
      </div>
      <select className="speed" onClick={speedChange}>
        <option value="1">Slow</option>
        <option value="1.5">Normal</option>
        <option value="2">Fast</option>
        <option value="3">Very Fast</option>
      </select>
      <div className="reset" onClick={reset}>
        Reset
      </div>
      ;
    </>
  );
};
export default Game;
