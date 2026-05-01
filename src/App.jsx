import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './context/AuthContext';

// Pages
import LandingPage from './Pages/LandingPage/LandingPage';
import AuthPage from './Pages/AuthPage'; // This is your Login
import SignupPage from './Pages/SignupPage'; // Create this file next

// Protected Route
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            
            {/* Landing Page */}
            <Route path="/" element={<LandingPage />} />

            {/* Split Auth Routes */}
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Legacy redirect: if anyone hits /auth, send them to /login */}
            <Route path="/auth" element={<Navigate to="/login" replace />} />

            {/* Example Protected Page (Uncomment when ready)
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