import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <button
        className="py-2 px-6 cursor-pointer text-white bg-blue-600 hover:bg-blue-400 transition-all duration-200 rounded-2xl"
        onClick={handleClick}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default App;
