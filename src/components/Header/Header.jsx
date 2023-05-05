import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Link to="/">
          <h1>
            <span>Hi</span>Movie
          </h1>
        </Link>
      </header>
    </div>
  );
}
