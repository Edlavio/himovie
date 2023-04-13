import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import { CalendarBlank, Clock, Star } from "phosphor-react";
import Carousel from "../components/Carousel";
import useDocumentTitle from "../hooks/useDocumentTitle";

const movieURL = import.meta.env.VITE_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const moviePath = `${movieURL}${id}?${apiKey}&language=pt-PT`;

    getMovie(moviePath);
  }, [id]);

  function extractYear(text) {
    const regex = /\d{4}/;
    const year = text.match(regex);
    return year;
  }

  function formatNumber(number) {
    return number.toString().replace(/^(\d+\.\d)\d+$/, "$1");
  }
  
  const {
    title,
    genres,
    poster_path,
    backdrop_path,
    runtime,
    release_date,
    vote_average,
    overview,
  } = movie;

  useDocumentTitle(title);

  return (
    <section>
      <div className={styles.wrapper}>
        <article className={styles.backdrop}>
          <img
            src={imgURL + backdrop_path}
            alt={`${movie.title} backdrop Image`}
          />
        </article>
        <article className={styles.moviebox}>
          <img
            className={styles.poster}
            src={imgURL + poster_path}
            alt={title}
          />
          <div>
            <div className={styles.container}>
              <h2>{title}</h2>
              <div className={styles.genres}>
                {genres &&
                  genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
              </div>
              <div className={styles.movieDetails}>
                <span>
                  <Clock size={20} />
                  {runtime} min
                </span>
                <span>
                  <CalendarBlank size={20} />
                  {extractYear(`${release_date}`)}
                </span>
                <span>
                  <Star weight="fill" size={20} />
                  {formatNumber(`${vote_average}`)}
                </span>
              </div>
              <span>Lançado: {release_date}</span>
              <span>Director: </span>
              <span>Elenco: </span>
              <div className={styles.sinopse}>
                <h3>Sinopse</h3>
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Carousel />
    </section>
  );
}
