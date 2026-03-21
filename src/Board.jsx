import Dice from "./Dice";
import Styles from "./Board.module.css";

function Board({ name, color, gameHistory, isLoser }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const boardClassNames = `${Styles.board} ${isLoser ? Styles.loser : ""}`;

  if (isLoser) {
    console.log(name);
  }
  return (
    <div className={boardClassNames}>
      <div className={Styles.diceContainer}>
        <h2 className={Styles.title}>{name}</h2>
        <Dice color={color} num={num} />
      </div>
      <div className={Styles.totalScore}>
        <span className={Styles.score}>{sum}점</span>
      </div>
      <div className={Styles.gameHistory}>{gameHistory.join(", ")}</div>
    </div>
  );
}

export default Board;
