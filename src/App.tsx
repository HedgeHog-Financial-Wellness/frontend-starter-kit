import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1 className="text-4xl font-bold">Hello 👋, Hedge 🦔 </h1>
      <button type="button" onClick={handleClick}>
        Count: {count}
      </button>
    </>
  );
}

export default App;
