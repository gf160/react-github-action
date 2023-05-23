import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>

        <button data-testid="minus-btn"
          onClick={() => setCount(prev => prev === 0 ? 0 : prev - 1)}
          disabled={disabled}
          >-</button>
        <button data-testid="plus-btn" 
          onClick={() => setCount(prev => prev + 1)}
          disabled={disabled}
          >+</button>

        <div>
          <button data-testid="on/off-btn"
            style={{backgroundColor: "blue"}}
            onClick={() => {setDisabled(prev => !prev)}}
          >on/off</button>
        </div>
      </header>
    </div>
  );
}

export default App;
