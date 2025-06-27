import { useState } from "react";
import {Link} from "react-router-dom";
//import './App.css'
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col bg-amber-400">
          <h1 className="text-3xl font-bold underline mb-5">TailWind Estudo</h1>

          <button
            className="bg-gray-800 
            text-white 
            py-2 
            px-1 
            cursor-pointer 
            rounded-2xl
            mb-2.5"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +1
          </button>

          <button
            className="bg-yellow-800 text-white py-2 px-1 cursor-pointer rounded-2xl"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <p>Número: {count}</p>
        </div>

        <Link to="/cores">
          Cores
        </Link>

      </div>
    </>
  );
}

export default App;
