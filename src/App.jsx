import { useState } from "react";
import Button from "./Button";
import Board from "./Board";


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
        <Board name="나" color="blue" />
        <Board name="상대" color="red" />
      </div>
    </div>
  );
}

export default App;
