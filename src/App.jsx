import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './context/AuthContext';

// Pages
import LandingPage from './Pages/LandingPage/LandingPage';
import AuthPage from './Pages/AuthPage';
//import Upload from './pages/Upload';

// Protected Route
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            
            {/* Landing has Navbar INSIDE */}
            <Route path="/" element={<LandingPage />} />

            {/* Auth page has NO navbar */}
            <Route path="/auth" element={<AuthPage />} />

            {/* Protected page
            <Route 
              path="/upload" 
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              } 
            /> */}

          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;