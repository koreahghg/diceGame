import Dice from "./Dice";

function Board({ name, color }) {
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={1} />
      <div>총점: {0}</div>
      <div>기록: {[].join(", ")}</div>
    </div>
  );
}

export default Board;
