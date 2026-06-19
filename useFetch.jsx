import { useState, useEffect } from 'react';

export const useFetch = (simulatedData, delay = 800) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(simulatedData);
      setLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [simulatedData, delay]);

  return { data, loading };
};