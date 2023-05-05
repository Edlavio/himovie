import { Link } from "react-router-dom";
import styles from "./Error.module.css";
import ErrorImage from "../../assets/404.json";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Lottie from "lottie-react";

export default function ErrorPage() {
  useDocumentTitle("Página não encontrada");

  const style = {
    maxWidth: "500px",
  };

  return (
    <section className={styles.container}>
      <Lottie animationData={ErrorImage} style={style} title="Erro 404 Lottie Animação" />
      <div>
        <span>
          Verifique sua URL ou volte para a página de início do HiMovie.
        </span>
        <Link title="Voltar" to="/">Voltar</Link>
      </div>
    </section>
  );
}
