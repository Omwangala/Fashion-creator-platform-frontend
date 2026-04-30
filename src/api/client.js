const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiRequest = async (endpoint, options = {}) => {
    const url = `${BASE_URL}${endpoint}`;
    
    // Default headers and settings
    const defaultOptions = {
        credentials: 'include', // 🍪 Necessary to send/receive HttpOnly cookies
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    };

    const response = await fetch(url, defaultOptions);

    // If the backend returns a 401, you could handle auto-logout here
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Something went wrong');
    }

    // Some endpoints (like Logout) might return empty 204 No Content
    if (response.status === 204) return null;

    return response.json();
};