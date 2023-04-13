import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Moon } from "phosphor-react";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>
          <span>Hi</span>Movie
        </h1>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
