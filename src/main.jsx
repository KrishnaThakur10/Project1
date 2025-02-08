import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Index.css'
import Login from './components/Auth/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Login/>
  </StrictMode>
  // https://youtu.be/TTx7Y3a7EmA?si=GHjVESZ3h61Z2JDm   WATCH THIS VIDEO TO COMPLETE THE PROJECT
)
