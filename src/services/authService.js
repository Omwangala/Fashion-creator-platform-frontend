import { apiRequest } from '../api/client';

const loginUser = async (username, password) => {
    const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
    });

    // handle both possible backend formats safely
    setUser(data.user || data);
};
export const createPost = async (formData) => {
    // When sending FormData (images), we MUST NOT set Content-Type header.
    // The browser will automatically set it to 'multipart/form-data' with the correct boundary.
    return await apiRequest('/posts', {
        method: 'POST',
        body: formData,
        headers: {}, // Remove the default application/json
    });
};