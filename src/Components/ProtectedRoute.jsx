import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    // ⏳ Wait until auth check finishes
    if (loading) {
        return (
            <div className="app-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-main)', letterSpacing: '4px' }}>
                    INITIALIZING CORE...
                </div>
            </div>
        );
    }

    // 🚫 Not logged in → redirect to login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // ✅ Logged in → allow access
    return children;
};

export default ProtectedRoute;