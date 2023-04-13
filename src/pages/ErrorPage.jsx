import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Desculpa, houve um erro pagina não encontrada!</p>
    </div>
  )
}
