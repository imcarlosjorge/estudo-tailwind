import { useState } from "react";
import {Link} from "react-router-dom";
//import './App.css'
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link to="/cores">
              Cores
            </Link>
          </li> |
          <li>
            <Link to="/espacamentos-tamanhos">
              Espaçamentos e Tamanhos
            </Link>
          </li> |
          <li>
            <Link to="/tipografia">
              Tipografia
            </Link>
          </li> |
          <li>
            <Link to="/bordas-sombras">
              Bordas e Sombras
            </Link>
          </li> |
          <li>
            <Link to="/positions">
            Positions
            </Link>
          </li> |
          <li>
            <Link to="/flexbox">
            FlexBox
            </Link>
          </li> |
          <li>
            <Link to="/grid">
            Grid
            </Link>
          </li> |
          <li>
            <Link to="/design-responsivo">
            Design Responsivo
            </Link>
          </li> |
        </ul>
      </nav>

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
      </div>
    </>
  );
}

export default App;
