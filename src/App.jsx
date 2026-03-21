import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import Styles from "./App.module.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleClick1 = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClick2 = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  const myNum = myHistory[myHistory.length - 1] || 1;
  const otherNum = otherHistory[otherHistory.length - 1] || 1;

  return (
    <div className={Styles.main}>
      <div className={Styles.header}>
        <h1 className={Styles.title}>주사위 게임</h1>
        <Button color="blue" onClick={handleClick1}>
          던지기
        </Button>
      </div>
      <div>
        <Button color="navy" onClick={handleClick2}>
          처음부터
        </Button>
      </div>
      <div>
        <Board
          name="나"
          color="blue"
          gameHistory={myHistory}
          isLoser={myNum < otherNum}
        />
        <Board
          name="상대"
          color="red"
          gameHistory={otherHistory}
          isLoser={otherNum < myNum}
        />
      </div>
    </div>
  );
}

export default App;
