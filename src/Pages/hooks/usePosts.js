import { useState, useEffect } from 'react';
import { postService } from '../services/postService';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFromVault = async () => {
      try {
        const data = await postService.getAllPosts(); // Hits GET api/posts implicitly
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFromVault();
  }, []);

  return { posts, setPosts, loading, error };
};