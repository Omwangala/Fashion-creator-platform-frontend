const BASE_URL = import.meta.env.VITE_API_URL ;

export const postService = {
  // Matches [HttpGet] GetAllPosts
  getAllPosts: async () => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      credentials: 'include' // Required to send the secure cookie
    });

    if (!response.ok) throw new Error('Failed to fetch from the Vault');
    return await response.json();
  },

  // Matches [HttpPost] CreatePost
  createPost: async (formData) => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      body: formData, // Fetch automatically sets Content-Type for FormData
      credentials: 'include'
    });

    if (!response.ok) throw new Error('Failed to upload to the Vault');
    return await response.json();
  }
};