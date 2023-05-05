import styles from "./Skeleton.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton({ cards, className }) {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div className={`${styles.container} ${className}`} key={i}>
        <Skeleton width={200} height={300} style={{ borderRadius: "8px" }} />
        <Skeleton width={200} />
        <span className={styles.info}>
          <Skeleton width={40} />
          <Skeleton width={40} />
        </span>
      </div>
    ));
}

export function MovieSkeleton({ className }) {
  return (
    <div className={`${styles.movieContainer} ${className}`}>
      <Skeleton width={260} height={375} style={{ borderRadius: "8px" }} />
      <div className={styles.movieInfo}>
        <Skeleton width={500} height={24} />
        <div className={styles.genres}>
          <Skeleton width={60} />
          <Skeleton width={60} />
          <Skeleton width={60} />
          <Skeleton width={60} />
        </div>
        <div className={styles.genres}>
          <Skeleton width={70} height={20} />
          <Skeleton width={70} height={20} />
          <Skeleton width={70} height={20} />
        </div>
        <Skeleton width={300} />
        <Skeleton width={400} />
        <Skeleton width={400} />
        <Skeleton width={120} height={20} />
        <div className={styles.sinopse}>
          <Skeleton width={500} />
          <Skeleton width={500} />
          <Skeleton width={500} />
          <Skeleton width={500} />
          <Skeleton width={500} />
        </div>
      </div>
    </div>
  );
}
