import Die from "./Die"
function Main() {
    return (
        <main>
          <h1 id="title">Tenzies</h1>
          <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="die-container">
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
            <Die value={1}/>
          </div>
        </main>
    );
  }

  export default Main;