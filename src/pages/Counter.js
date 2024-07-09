import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button style={{ marginRight: '0px' }} onClick={decrement}>-</button>
      <span style={{ margin: '0 5px' }}>{count}</span>
      <button style={{ marginLeft: '0px' }} onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
