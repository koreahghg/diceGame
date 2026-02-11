import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleClick1 = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
  }

  const handleClick2 = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }

  return (
    <div>
      <h1>주사위 게임</h1>
      <div>
        <Button onClick={handleClick1}>던지기</Button>
        <Button onClick={handleClick2}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num} />
        <div>총점: {sum}</div>
        <div>기록: {gameHistory.join(", ")}</div>
      </div>
    </div>
  );
}

export default App;
