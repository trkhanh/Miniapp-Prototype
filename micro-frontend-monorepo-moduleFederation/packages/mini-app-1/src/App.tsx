import React from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="mini-app-1">
      <h2>Mini App 1 - Counter</h2>
      <p>This is an isolated React component loaded via Module Federation.</p>

      <div className="counter-box">
        <p>Count: <span className="count">{count}</span></p>
        <button onClick={() => setCount(count + 1)} className="btn-primary">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="btn-secondary">
          Decrement
        </button>
        <button onClick={() => setCount(0)} className="btn-danger">
          Reset
        </button>
      </div>

      <div className="info-box">
        <h3>Features:</h3>
        <ul>
          <li>Independent deployment</li>
          <li>Isolated state management</li>
          <li>Styled in isolation</li>
          <li>Runtime dynamic loading</li>
        </ul>
      </div>
    </div>
  );
}