import { SaleCard } from "@/shared/SaleCard";
import styles from "./Sales.module.css";
import { cardsDataList } from "./data";

export function Sales() {
  return (
    <section className={styles.root}>
      <h2 className={styles.header}>Получить свой гайд</h2>
      <p className={styles.description}>
        Базовый гайд уже <span className={styles.purple}>готов</span>! Идет
        запись на поток Продвинутый и Индивидуальный.
        <br />
        Цены действительны на последние 4 места
      </p>
      <div className={styles.cardWrapper}>
        {cardsDataList.map((value, index) => {
          return <SaleCard {...value} key={index} />;
        })}
      </div>
    </section>
  );
}
