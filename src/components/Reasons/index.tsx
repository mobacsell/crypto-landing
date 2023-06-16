import styles from "./Reasons.module.css";
import { Button } from "@/shared/Button";

export function Reasons() {
  return (
    <section className={styles.root}>
      <h2 className={styles.header}>
        Веские причины
        <br /> почему именно этот гайд
      </h2>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li>
            <h3 className={styles.contentHeader}>Правильный план объяснения</h3>
            <p className={styles.description}>
              Максимально эффективный путь понимания
              <br className={styles.br} />
              сферы. Я сам лично прошел несколько курсов
              <br className={styles.br} /> и просмотрел видео. Все они построены не
              <br className={styles.br} /> совсем верно.
            </p>
          </li>
          <li>
            <h3 className={styles.contentHeader}>Только то, что нужно</h3>
            <p className={styles.description}>
              Без воды. Повторения только там, где сложно
              <br className={styles.br} /> и рисунки, чтобы лучше и более полно
              <br className={styles.br} /> осталось в памяти.
            </p>
          </li>
          <li>
            <h3 className={styles.contentHeader}>
              Простыми словами, на аналогиях
            </h3>
            <p className={styles.description}>
              Помимо технических терминов, в гайде
              <br className={styles.br} /> проводятся аналогии с реальными
              <br className={styles.br} /> предметами. Так легче запоминать.
            </p>
          </li>
          <li>
            <h3 className={styles.contentHeader}>Всё в одном месте</h3>
            <p className={styles.description}>
              Ура! Никуда больше не надо ходить, что-либо
              <br className={styles.br} /> искать. Когда я сам начинал изучать эту тему,
              <br className={styles.br} /> то самое сложное было - собрать всё в одном
              <br className={styles.br} /> месте. Здесь же прочитать гайд - и всё.
            </p>
          </li>
        </ul>
      </div>
      <Button
        text="Скачать гайд"
        colorScheme="purpleLight"
        buttonSize="smButton"
        textSize="mdText"
      />
    </section>
  );
}
