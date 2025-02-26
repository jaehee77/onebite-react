import { useEffect, useState } from 'react';

export default function useFetcher(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error('Fetching Error: ', err);
        setData([]);
      }
    };
    fetchWord();
  }, [url]);

  return data;
}
