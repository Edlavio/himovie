import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

import styles from "./Carousel.module.css";

import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const movieURL = import.meta.env.VITE_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Carousel({ URL, titulo, category }) {
  const url = URL ? URL : `${movieURL}popular?${apiKey}&language=pt-PT`;

  const { movie } = useFetch(url);

  const movieList = movie.results;
  const categoryName = titulo ? titulo : "Populares";

  return (
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        <h2>{categoryName}</h2>
        {category === true && (
          <select defaultValue="categoria" className={styles.select}>
            <option value="categoria" disabled>
              Selecionar Categoria
            </option>
            <option value="populares">Populares</option>
            <option value="avaliados">Mais avaliados</option>
            <option value="brevemente">Brevemente</option>
            <option value="lancados">Lançados</option>
          </select>
        )}
      </div>
      <Splide
        options={{
          perPage: 5,
          perMove: 1,
          pagination: false,
          keyboard: "global",
          breakpoints: {
            1100: {
              perPage: 4,
            },
            900: {
              perPage: 3,
            },
            650: {
              perPage: 2,
            },
            460: {
              perPage: 1,
            },
          },
        }}
      >
        {movieList &&
          movieList.map((movie) => (
            <SplideSlide key={movie.id}>
              <Card movie={movie} cardClass={styles.card} />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
}
