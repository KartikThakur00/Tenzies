import React from "react";
import Die from "./component/Die";
import { nanoid } from "nanoid";
import "./app.css";
function App() {
  const [dice, setDice] = React.useState(allNewDice());

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
    setDice(allNewDice());
  }

  function holdDice(id){
    console.log(id)
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} handle={()=>holdDice(die.id)}/>
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
