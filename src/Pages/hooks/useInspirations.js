import { useState, useEffect } from 'react';

export const useInspirations = () => {
  const [inspirations, setInspirations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch from backend later
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { inspirations, loading };
};