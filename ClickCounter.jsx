import React, { useState } from "react";
import "./ClickCounter.css";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const LIMIT = 10;                // configurable threshold

  const increase = () => {
    if (count < LIMIT) setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(prev => prev - 1);
  };

  return (
    <div className="counter-card">
      <h1>Click Counter</h1>

      <p className="count-display" aria-live="polite">
        {count}
      </p>

      {count === LIMIT && (
        <p className="limit-message">You’ve reached the limit!</p>
      )}

      <div className="btn-group">
        <button onClick={increase} disabled={count === LIMIT}>
          Increase
        </button>
        <button onClick={decrease} disabled={count === 0}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default ClickCounter;