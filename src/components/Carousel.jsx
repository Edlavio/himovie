import { useState, useEffect } from "react";

import styles from "./Carousel.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Card from "./Card";

const movieURL = import.meta.env.VITE_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Carousel() {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPopularMovies(data.results);
  };

  useEffect(() => {
    const popularMoviesURL = `${movieURL}popular?${apiKey}&language=pt-PT`;

    getPopularMovies(popularMoviesURL);
  }, []);

  return (
    <>
      <Splide
        tag="section"
        options={{
          pagination: false,
          width: "85vw",
          perPage: 5,
          perMove: 1,
          gap: "1rem",
          padding: "3rem",
          keyboard: true,
          breakpoints: {
            1200: {
              perPage: 4,
            },
            1024: {
              perPage: 3,
            },
            800: {
              width: "90vw",
            },
            768: {
              perPage: 2,
              padding: "6rem",
            },
            650: {
              padding: "4rem",
            },
            600: {
              perPage: 1,
              padding: "6rem",
            },
            450: {
              padding: "3rem",
            },
            400: {
              padding: "4rem",
            },
            350: {
              padding: "2rem",
            },
          },
        }}
        className={styles.carousel}
      >
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Card movie={movie} />
            </SplideSlide>
          ))}
      </Splide>
    </>
  );
}
