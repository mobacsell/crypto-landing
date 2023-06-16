import styles from "./About.module.css";
import Image from "next/image";

import author from "@assets/About/author.png";

export function About() {
  return (
    <section className={styles.root}>
      <h2 className={styles.header}>Кто составил данный гайд</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={author} alt="Автор" />
        </div>
        <div>
          <p className={styles.listHeader}>
            Денисевич Адександр, ведущий разработчик
            <br />В <span className={styles.purple}>криптопроектах</span> с 2018
            года
          </p>
          <ul className={styles.list}>
            <li>
              знаю <span className={styles.purple}>изнутри</span>, как всё
              устроено
            </li>
            <li>
              проверил на себе множество техник и<br /> 4х кратно
              <span className={styles.purple}> увеличил доход</span> за 2 года
            </li>
            <li>
              ежедневно пользуюсь{" "}
              <span className={styles.purple}>криптой в жизни</span>
            </li>
            <li>
              умею объяснять <span className={styles.purple}>просто</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
