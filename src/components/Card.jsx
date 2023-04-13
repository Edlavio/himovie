import { Star } from "phosphor-react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

const imageURL = import.meta.env.VITE_IMG;

export default function Card({ movie}) {
  function extractYear(text) {
    const regex = /\d{4}/;
    const year = text.match(regex);
    return year;
  }

  function formatNumber (number) {
    return number.toString().replace(/^(\d+\.\d)\d+$/, '$1')
  };

  const year = extractYear(movie.release_date)

  function handleResetScroll () {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
 
  return (
    <article className={styles.card}>
      <Link to={`/movie/${movie.id}`} onClick={handleResetScroll}>
        <img
          src={imageURL + movie.poster_path}
          alt={movie.title}
          className={styles.cardImage}
        />
      </Link>
      <div className={styles.cardDetails}>
        <Link
          className={styles.title}
          title={movie.title}
          to={`/movie/${movie.id}`}
          onClick={handleResetScroll}
        >
          {movie.title}
        </Link>
        <div className={styles.cardInfo}>
          <span title={`Ano de lançamento ${year}`}>{year}</span>
          <span className="flex items-center gap-1" title={`Média de votos ${movie.vote_average}`}>
            <Star size={14} weight="fill" className="text-yellow-500" />
            {formatNumber(`${movie.vote_average}`)}
          </span>
        </div>
      </div>
    </article>
  );
}