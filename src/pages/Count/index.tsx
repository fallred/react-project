import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(s => s + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        // 更新操作
        // increment();
        // increment();
        // increment();

        // 覆盖操作
        setScore(score + 1);
        setScore(score + 1);
        setScore(score + 1);
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}
