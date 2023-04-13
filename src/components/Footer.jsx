import { CaretUp, GithubLogo} from 'phosphor-react';
import styles from './Footer.module.css';

export default function Footer() {
    function handleClick () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className={styles.footer}>
      <a href='https://github.com/Edlavio' target='_blank' rel="noopener noreferrer">
        <button>
          <GithubLogo size={18} weight='fill'/>
        </button>
        Made with by Edlavio
      </a>
      <button onClick={handleClick}>
        <CaretUp size={24}/>
      </button>
    </footer>
  )
}
