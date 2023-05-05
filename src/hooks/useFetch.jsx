import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(url);
  }, [url]);

  return { movie, isLoading };
};