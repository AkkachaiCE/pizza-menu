import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Pizza } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Pizza />
    <Pizza />
    <Pizza />
  </StrictMode>,
)
