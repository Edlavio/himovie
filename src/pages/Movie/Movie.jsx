import styles from "./Movie.module.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useFetch from "../../hooks/useFetch";

import { IoCalendarClearOutline, IoStar, IoTimeOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";

const movieURL = import.meta.env.VITE_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;

export default function Movie({URL}) {
  const { id } = useParams();
  const { movie, isLoading } = useFetch(`${movieURL}${id}?${apiKey}&language=pt-BR`);
  const { movie: item } = useFetch(`${movieURL}${id}/credits?${apiKey}&language=pt-BR`);

  const productionList = item.crew;
  const prodution = productionList && Object.values(productionList).filter((d) => d.job === "Director");

  const actorsList = item.cast;
  const actor = actorsList && Object.values(actorsList).filter((a) => a.order < 4);

  const recommended = `${movieURL}${id}/recommendations?${apiKey}&language=pt-BR`;

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
    <>
      <Header />
      {isLoading && <p>Carregando...</p>}
      <section>
        <div className={styles.wrapper}>
          <article className={styles.backdrop}>
            <img
              src={`${imgURL}original/${backdrop_path}`}
              alt={`${movie.title} Imagem de fundo`}
            />
          </article>
          <article className={styles.moviebox}>
            <img
              className={styles.poster}
              src={`${imgURL}w500/${poster_path}`}
              alt={title}
            />
            <div>
              <div className={styles.container}>
                <h2>{title}</h2>
                <div className={styles.genres}>
                  {genres &&
                    genres.map((genre) => (
                      <span key={genre.id} title={`Genêro: ${genre.name}`}>
                        {genre.name}
                      </span>
                    ))}
                </div>
                <div className={styles.movieDetails}>
                  <span title={`Duração: ${runtime} minutos`}>
                    <IoTimeOutline size={20} />
                    {runtime} min
                  </span>
                  <span
                    title={`Ano de lançamento: ${extractYear(
                      `${release_date}`
                    )}`}
                  >
                    <IoCalendarClearOutline size={20} />
                    {extractYear(`${release_date}`)}
                  </span>
                  <span title={`Média de votos: ${movie.vote_average}`}>
                    <IoStar weight="fill" size={20} />
                    {formatNumber(`${vote_average}`)}
                  </span>
                </div>
                <div className={styles.creditos}>
                  <span title={`Ano de lançamento: ${release_date}`}>
                    Lançado: {release_date}
                  </span>
                  <span>
                    Director:
                    {prodution &&
                      Object.values(prodution).map((d) => (
                        <span className={styles.director} key={d.id} title={`Director: ${d.name}`}>
                          {d.name}
                        </span>
                      ))}
                  </span>
                  <span>
                    Elenco:
                    {actor &&
                      Object.values(actor).map((a) => (
                        <span className={styles.actor} key={a.id} title={`Actor: ${a.name}`}>
                          {a.name},
                        </span>
                      ))}
                  </span>
                </div>
                <div className={styles.sinopse} title='Sinopse'>
                  <h3>Sinopse</h3>
                  <p>{overview}</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <Carousel titulo="Sugestões" URL={recommended} />
      </section>
      <Footer />
    </>
  );
}