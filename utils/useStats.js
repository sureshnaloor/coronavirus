import { useState, useEffect } from 'react';

export default function useStats(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    console.log('mounting or updating!');

    async function fetchData() {
      setLoading(true);
      setError();

      console.log('fetching data');

      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setStats(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return { stats, loading, error };
}
