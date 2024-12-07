import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment} style={{ margin: '0 10px', padding: '10px 20px' }}>+</button>
        <button onClick={decrement} style={{ margin: '0 10px', padding: '10px 20px' }}>-</button>
        <button onClick={reset} style={{ margin: '0 10px', padding: '10px 20px' }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
