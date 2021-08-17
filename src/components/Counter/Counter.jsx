import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} type="button">
        Increase
      </button>
      <button onClick={() => setCount(count - 1)} type="button">
        Decrease
      </button>
    </div>
  );
}
