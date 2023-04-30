import { useState, useEffect } from "react";

import styles from "./Carousel.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Card from "./Card";
import useFetch from "../hooks/useFetch";

const movieURL = import.meta.env.VITE_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Carousel({URL}) {
  const url = URL ? URL : `${movieURL}popular?${apiKey}&language=pt-PT`;
  const { movie } = useFetch(url);

  const movieList = movie.results;
  
  return (
    <>
      <Splide
        tag="section"
        options={{
          pagination: false,
          width: "1200px",
          perPage: 5,
          perMove: 1,
          gap: "1rem",
          padding: "3rem",
          keyboard: true,
          breakpoints: {
            1200: {
              perPage: 4,
              width: "90%",
            },
            1024: {
              perPage: 3,
            },
            768: {
              width: "80%",
              perPage: 2,
              padding: "5rem",
            },
            650: {
              padding: "3rem",
            },
            600: {
              width: "70%",
              perPage: 1,
              padding: "5rem",
            },
            500: {
              padding: "3rem",
            },
            400: {
              padding: "1rem",
            },
          },
        }}
        className={styles.carousel}
      >
        {movieList &&
          movieList.map((movie) => (
            <SplideSlide key={movie.id}>
              <Card movie={movie} />
            </SplideSlide>
          ))}
      </Splide>
    </>
  );
}
