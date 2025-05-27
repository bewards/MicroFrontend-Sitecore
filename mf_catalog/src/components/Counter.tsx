import React, { useState } from 'react';
import 'tailwindcss/index.css';

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount || 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <section className="container mx-auto my-4 outline-3 outline-red-500">
      <h2>Counter</h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 cursor-pointer"
      >
        Count: {count}
      </button>
    </section>
  );
};

export default Counter;
