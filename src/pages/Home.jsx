import { useEffect, useRef, useState } from "react";

import styles from "./Home.module.css";
import { MagnifyingGlass } from "phosphor-react";

import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  useDocumentTitle("Feito para amantes de filmes");

  useEffect(() => {
    function handleKeyDown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <>
      <Header />
      <section>
        <article className={styles.bannerContainer}>
          <div>
            <h2>Encontre os seus filmes em um só lugar</h2>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
              <button title="Botão de pesquisa">
                <MagnifyingGlass size={20} />
              </button>
              <input
                type="text"
                placeholder="Digita o nome do filme"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                ref={inputRef}
              />
            </form>
          </div>
        </article>

          <Carousel />
      </section>
      <Footer />
    </>
  );
}
