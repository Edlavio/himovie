import { useState, useEffect } from "react";

export function useMovie(url) {
  const [movie, setMovie] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    getMovie(url);
  }, [url]);

  return { movie };
};

export function useFetch(url) {
  const [item, setItem] = useState([]);

  const getItem = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setItem(data);
  };

  useEffect(() => {
    getItem(url);
  }, [url]);

  return { item };
}



// const [movie, setMovie] = useState("");

// const getMovie = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();

//   setMovie(data);
// };

// useEffect(() => {
//   const moviePath = `${movieURL}${id}?${apiKey}&language=pt-BR`;

//   getMovie(moviePath);
// }, [id]);


//  Carousel



// const [popularMovies, setPopularMovies] = useState([]);

// const getPopularMovies = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();

//   setPopularMovies(data.results);
// };

// useEffect(() => {
//   const popularMoviesURL = `${movieURL}popular?${apiKey}&language=pt-PT`;

//   getPopularMovies(popularMoviesURL);
// }, []);
