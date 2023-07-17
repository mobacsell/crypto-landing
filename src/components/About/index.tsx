import styles from "./About.module.css";
import Image from "next/image";

import author from "@assets/About/author.png";

const list = [
  [
    "знаю ",
    <span className={styles.purple} key="1">
      изнутри
    </span>,
    " как всё устроено",
  ],
  [
    "проверил на себе множество техник и",
    <br key="1" />,
    "4х кратно",
    <span className={styles.purple} key="2">
      {" "}
      увеличил доход
    </span>,
    " за 2 года",
  ],
  [
    "ежедневно пользуюсь ",
    <span className={styles.purple} key="1">
      криптой в жизни
    </span>,
  ],
  [
    "умею объяснять ",
    <span className={styles.purple} key="1">
      просто
    </span>,
  ],
];

export function About() {
  return (
    <section className={styles.root}>
      <h2 className={styles.header}>Кто составил данный гайд</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={author} alt="Автор" quality={100} />
        </div>
        <div>
          <p className={styles.listHeader}>
            Денисевич Адександр, ведущий разработчик
            <br />В <span className={styles.purple}>криптопроектах</span> с 2018
            года
          </p>
          <ul className={styles.list}>
            {list.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
