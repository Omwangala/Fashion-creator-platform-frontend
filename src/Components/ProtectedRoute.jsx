import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    // ⏳ Wait until auth check finishes
    if (loading) {
        return (
            <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
                Loading...
            </div>
        );
    }

    // 🚫 Not logged in → redirect
    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }

    // ✅ Logged in → allow access
    return children;
};

export default ProtectedRoute;