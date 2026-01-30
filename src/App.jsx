import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);

  const handleClick1 = () => {
    const nextNum = random(6);
    setNum(nextNum);
  }

  const handleClick2 = () => {
    setNum(1);
  }

  return (
    <div>
      <h1>주사위 게임</h1>
      <div>
        <Button onClick={handleClick1}>던지기</Button>
        <Button onClick={handleClick2}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  );
}

export default App;
