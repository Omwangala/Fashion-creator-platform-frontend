import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'; // <--- Add this line!
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <LandingPage />
          <div className="ticks"></div>
          <section id="spacer"></section>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App