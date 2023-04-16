import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {    
    const fetchMovie = async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      setMovie(data.results)
    }  

    fetchMovie();
  }, [url]);

  return [movie];
}
