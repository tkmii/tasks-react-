import { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counterValue');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  const isDisabled = count <= 0;

  useEffect(() => {
    localStorage.setItem('counterValue', count.toString());
  }, [count]);

  function increaseCount() {
    setCount(prevCount => prevCount + 1);
  }

  function decreaseCount() {
    setCount(prevCount => Math.max(0, prevCount - 1));
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <button className="button plus" onClick={increaseCount}>+</button>
      <div className="counter">{count}</div>
      <button className="button minus" onClick={decreaseCount} disabled={isDisabled}>
        -
      </button>
      <button className="button reset" onClick={resetCount} disabled={isDisabled}>
        Сброс
      </button>
    </>
  );
}

export default Counter;