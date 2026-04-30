import { createContext, useContext, useState, useEffect } from 'react';
import { apiRequest } from '../api/client';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🕵️ Check if user is already logged in when the app starts
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // You'll need a simple GET /auth/me endpoint in your backend 
                // that returns the user object if the cookie is valid
                const data = await apiRequest('/auth/me');
                setUser(data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const loginUser = async (username, password) => {
        const data = await apiRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });
        setUser(data.user); // Assuming your login returns { user: {...} }
    };

    const logoutUser = async () => {
        await apiRequest('/auth/logout', { method: 'POST' });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);