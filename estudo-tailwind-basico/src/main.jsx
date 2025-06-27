import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// pages
import { Cores } from './assets/pages/cores.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/cores' element={<Cores />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
