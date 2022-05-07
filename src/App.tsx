import { useState } from "react";

function App() {
  const [number, setNumber] = useState<number>(0);
  
  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1)
        }}
      >
        adcionar
      </button>
      <span>{number}</span>
      <button
        onClick={() => {
          setNumber(number - 1)
        }}
      >
        remover
      </button>
    </div>
  );
}

export default App;
