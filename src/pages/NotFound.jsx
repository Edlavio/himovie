import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import Image from "../assets/404.svg";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function ErrorPage() {
  useDocumentTitle("Erro 404 Página não encontrada");

  return (
    <section className={styles.container}>
      <img src={Image} />
      <div>
        <span>
          Verifique sua URL ou volte para a página de início do HiMovie.
        </span>
        <Link to="/">Voltar</Link>
      </div>
    </section>
  );
}
