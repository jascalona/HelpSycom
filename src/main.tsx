import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'

import App from './App.tsx'
import Sidebar from './resources/Sidebar.tsx'
import Graficas from './resources/Grficas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sidebar />
  </StrictMode>,
)
