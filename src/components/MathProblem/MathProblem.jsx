import React, { useState, useEffect } from "react";
import "./math-problem.css";

// GameStatus를 이용해 상태를 처리합니다.
const GameStatus = {
  CORRECT: "정답입니다",
  INCORRECT: "오답입니다",
  READY: "",
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function MathProblem() {
  // 필요한 숫자의 상태를 정의하세요.
  const [gameStatus, setGameStatus] = useState(GameStatus.READY);
  const [answer, setAnswer] = useState("");
  const [fnum, setFnum] = useState(0);
  const [rnum, setRnum] = useState(0);
  const generateProblem = () => {
    setGameStatus(GameStatus.READY);
    // generateRandomNumber를 이용해 새로 숫자를 생성하세요.
    setFnum(generateRandomNumber());
    setRnum(generateRandomNumber());
  };

  const handleSubmit = () => {
    // 제출시 정답 여부에 따라 GameStatus의 상태를 설정하세요.
    const ans = fnum + rnum;
    setGameStatus(
      ans === parseInt(answer) ? GameStatus.CORRECT : GameStatus.INCORRECT
    );
    console.log(gameStatus);
  };

  const handleAnswerInput = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  // 실행 결과와 동일한 기능을 하도록 마크업을 작성하세요.
  return (
    <div className="mathProblem">
      <div>
        <span>{fnum}</span>
        <span>+</span>
        <span>{rnum}</span>
      </div>

      <hr />

      <div>
        <div> = </div>
        <input
          onChange={handleAnswerInput}
          id="answer"
          type="number"
          name="answer"
          value={answer}
        />
        <button onClick={handleSubmit}>제출</button>
      </div>

      <div>{gameStatus}</div>
      <div>
        {gameStatus === GameStatus.CORRECT ? (
          <button onClick={generateProblem}>문제 생성</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MathProblem;
