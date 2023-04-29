import { Star } from "phosphor-react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

const imgURL = import.meta.env.VITE_IMG;

export default function Card({
  movie,
  cardClass,
  imageClass,
  titleClass,
  cardInfoClass,
}) {
  function extractYear(text) {
    const regex = /\d{4}/;
    const year = text.match(regex);
    return year;
  }

  function formatNumber(number) {
    return number.toString().replace(/^(\d+\.\d)\d+$/, "$1");
  }

  const year = extractYear(movie.release_date);

  function handleResetScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <article className={`${styles.card} ${cardClass}`}>
      <Link to={`/movie/${movie.id}`} onClick={handleResetScroll}>
        <div className={styles.imageContainer}>
          <img
            src={`${imgURL}w500/${movie.poster_path}`}
            alt={movie.title}
            className={`${styles.cardImage} ${imageClass}`}
          />
        </div>
      </Link>
      <div className={styles.cardDetails}>
        <Link
          className={`${styles.title} ${titleClass}`}
          title={movie.title}
          to={`/movie/${movie.id}`}
          onClick={handleResetScroll}
        >
          {movie.title}
        </Link>
        <div className={`${styles.cardInfo} ${cardInfoClass}`}>
          <span title={`Ano de lançamento: ${year}`}>{year}</span>
          <span title={`Média de votos: ${movie.vote_average}`}>
            <Star size={14} weight="fill" className="text-yellow-500" />
            {formatNumber(`${movie.vote_average}`)}
          </span>
        </div>
      </div>
    </article>
  );
}
