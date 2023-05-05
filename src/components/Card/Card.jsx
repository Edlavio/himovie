import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import placeholder from '../../assets/placeholder.svg';

const imgURL = import.meta.env.VITE_IMG;

export default function Card({
  movie,
  cardClass,
  imageClass,
  titleClass,
  cardInfoClass
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
    window.scrollTo(0, 0);
  }

  const ImageChecked = `${imgURL}w500/${movie.poster_path}` === `${imgURL}w500/null` ? placeholder : `${imgURL}w500/${movie.poster_path}`;

  return (
    <>
      <article className={`${styles.card} ${cardClass}`}>
        <Link to={`/movies/${movie.id}`} onClick={handleResetScroll}>
          <div className={styles.imageContainer}>
            <img
              src={ImageChecked}
              alt={movie.title}
              className={`${styles.cardImage} ${imageClass}`}
            />
          </div>
        </Link>
        <div className={styles.cardDetails}>
          <Link
            className={`${styles.title} ${titleClass}`}
            title={movie.title}
            to={`/movies/${movie.id}`}
            onClick={handleResetScroll}
          >
            {movie.title}
          </Link>
          <div className={`${styles.cardInfo} ${cardInfoClass}`}>
            <span title={`Ano de lançamento: ${year}`}>{year}</span>
            <span title={`Média de votos: ${movie.vote_average}`}>
              <IoStar size={14} weight="fill" />
              {formatNumber(`${movie.vote_average}`)}
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
