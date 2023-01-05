import React from "react";
import Die from "./component/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./app.css";
function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [score, setScore] = React.useState({
    rollCount: 0,
    timeCount: 0,
  });

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You Won!");
    }
  }, [dice]);
  //generating arr[10] of random numbers
  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++)
      arr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    return arr;
  }

  function rollDice() {
    if (!tenzies) {
      setScore((prevScore) => ({
        ...prevScore,
        rollCount: prevScore.rollCount + 1,
      }));
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setScore({
        rollCount: 0,
        timeCount: 0,
      });
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      handle={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 id="title">Tenzies</h1>
      <p className="description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <div className="tbc">
        <div className="count">{score.timeCount} s</div>
        <button className="roll-dice" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
        <div className="count">{score.rollCount}</div>
      </div>
    </main>
  );
}

export default App;
