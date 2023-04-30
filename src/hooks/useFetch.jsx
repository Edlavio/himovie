import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [movie, setMovie] = useState([]);

  const getData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return { movie };
}