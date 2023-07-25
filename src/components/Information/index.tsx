import styles from "./Information.module.css";
import Image from "next/image";
import { list } from "./data";

export function Information() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Вы узнаете</h2>
        <ul className={styles.list}>
          {list.map((value, index) => {
            return (
              <li className={styles.item} key={index}>
                <Image src={value.imagePath} alt={value.imageName} />
                <div className={styles.content}>
                  <h3 className={styles.contentHeader}>{value.header}</h3>
                  <p className={styles.contentDescription}>
                    {value.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
