import styles from "./Footer.module.css";
import { CaretUp, GithubLogo } from "phosphor-react";

export default function Footer() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Edlavio"
        target="_blank"
        className={styles.link}
      >
        <span>
          <GithubLogo size={24} weight="fill" />
        </span>
        Made with &#x1F49C; by Edlavio
      </a>
      <button onClick={handleClick}>
        <CaretUp size={24} />
      </button>
    </footer>
  );
};
