import { useState } from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  const [status, setStatus] = useState(true)

  const changeStatus = () => {
    setStatus(!status)
  }
  return (
    <div className="App">
      <Timer status={status} timeLimit={10} />

      <button onClick={changeStatus}>{status ? "Pause" : "Play"}</button>
    </div>
  );
}

export default App;
