import { useState } from 'react'
//import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col'>
        <h1 className="text-3xl font-bold underline">TailWind Estudo</h1>

        <button className='bg-gray-800 text-white py-2 px-5'>
          Clique aqui
        </button>
      </div>
    </>
  )
}

export default App
