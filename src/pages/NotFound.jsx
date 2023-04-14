import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import Image from "../assets/404.svg";

export default function ErrorPage() {
  return (
    <section className={styles.container}>
      <img src={Image}/>
      <div>
        <h1>Oops!</h1>
        <p>Verifique sua URL ou volte para a página de início do HiMovie.</p>
      </div>
      <Link to="/">Voltar</Link>
    </section>
  );
}
