import { createContext, useContext, useState, useEffect } from 'react';
import { apiRequest } from '../api/client';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🕵️ Check if user is already logged in when app loads
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const data = await apiRequest('/auth/me');

                // ✅ Handle different backend response shapes safely
                setUser(data.user || data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const registerUser = async (username, email, password) => {
        try {
            const data = await apiRequest('/auth/register', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
            });

            // Auto-login after successful registration
            setUser(data.user || data);

            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    // 🔐 Login
    const loginUser = async (username, password) => {
        try {
            const data = await apiRequest('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
            });

            // ✅ Flexible handling
            setUser(data.user || data);

            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    // 🚪 Logout
    const logoutUser = async () => {
        try {
            await apiRequest('/auth/logout', { method: 'POST' });
        } catch (error) {
            // even if backend fails, we still clear user
        } finally {
            setUser(null);
        }
    };

    // 🔄 Manual refresh (useful after profile update, etc.)
    const refreshUser = async () => {
        try {
            const data = await apiRequest('/auth/me');
            setUser(data.user || data);
        } catch {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                isAuthenticated: !!user,
                loginUser,
                logoutUser,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};