import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'


import App from './App.tsx'
import Sidebar from './resources/Sidebar.tsx'
import Graficas from './resources/Grficas.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
  
      <Sidebar />

    </BrowserRouter>
  </StrictMode>,
)
