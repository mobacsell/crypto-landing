import styles from "./Reviews.module.css";
import Image from "next/image";
import { listContent } from "./data";

export function Reviews() {
  return (
    <section className={styles.root}>
      <h2 className={styles.header}>Отзывы первых участников</h2>
      <ul className={styles.list}>
        {listContent.map((value, index) => {
          return (
            <li className={styles.itemContent} key={index}>
              <div className={styles.clientInfo}>
                <Image src={value.image} alt={`фотография ${value.name}`} />
                <h3 className={styles.clientName}>{value.name}</h3>
                <p className={styles.clientDescription}>{value.description}</p>
              </div>
              <div
                className={`${styles.about} ${styles[value.descrBlockType]}`}
              >
                {value.about}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
