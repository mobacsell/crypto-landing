import styles from "./Reasons.module.css";
import { Button } from "@/shared/Button";

const list = [
  {
    itemHeader: "Правильный план объяснения",
    itemText: [
      "Максимально эффективный путь понимания",
      <br className={styles.br} key="1" />,
      "сферы. Я сам лично прошел несколько курсов",
      <br className={styles.br} key="2" />,
      " и просмотрел видео. Все они построены не",
      <br className={styles.br} key="3" />,
      " совсем верно.",
    ],
  },
  {
    itemHeader: "Только то, что нужно",
    itemText: [
      "Без воды. Повторения только там, где сложно",
      <br className={styles.br} key="1" />,
      " и рисунки, чтобы лучше и более полно",
      <br className={styles.br} key="2" />,
      " осталось в памяти.",
    ],
  },
  {
    itemHeader: "Простыми словами, на аналогиях",
    itemText: [
      "Помимо технических терминов, в гайде",
      <br className={styles.br} key="1" />,
      " проводятся аналогии с реальными",
      <br className={styles.br} key="2" />,
      " предметами. Так легче запоминать.",
    ],
  },
  {
    itemHeader: "Всё в одном месте",
    itemText: [
      "Ура! Никуда больше не надо ходить, что-либо",
      <br className={styles.br} key="1" />,
      " искать. Когда я сам начинал изучать эту тему,",
      <br className={styles.br} key="2" />,
      " то самое сложное было - собрать всё в одном",
      <br className={styles.br} key="3" />,
      " месте. Здесь же прочитать гайд - и всё.",
    ],
  },
];

export function Reasons() {
  return (
    <section className={styles.root}>
      <h2 className={styles.header}>
        Веские причины
        <br /> почему именно этот гайд
      </h2>
      <div className={styles.content}>
        <ul className={styles.list}>
          {list.map((value, index) => {
            return (
              <li key={index}>
                <h3 className={styles.contentHeader}>{value.itemHeader}</h3>
                <p className={styles.description}>{value.itemText}</p>
              </li>
            );
          })}
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
