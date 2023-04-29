import styles from "./Footer.module.css";
import { IoLogoGithub, IoChevronUpSharp } from "react-icons/io5";
import { RxCaretUp } from "react-icons/rx";

export default function Footer() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Edlavio"
        target="_blank"
        className={styles.link}
        title="Meu perfil do Github: Edlavio"
      >
        <IoLogoGithub size={24} />
        Made with ❤️ by Edlavio
      </a>
      <button title="Voltar para o topo botão" onClick={handleClick}>
        <IoChevronUpSharp size={20} />
      </button>
    </footer>
  );
}
