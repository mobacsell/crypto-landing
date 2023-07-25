import styles from "./Reasons.module.css";
import { Button } from "@/shared/Button";
import { list } from "./data";

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
