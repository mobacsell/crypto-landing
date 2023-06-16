import { Button } from "../Button";
import styles from "./SaleCard.module.css";
import { SaleCardProps } from "./types";

export function SaleCard({
  header,
  description,
  oldPrice,
  currentPrice,
  listHeader,
  list,
  listTextSize,
  listColor,
  btnProps,
}: SaleCardProps) {
  return (
    <div className={styles.root}>
      <h3 className={styles.header}>{header}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.sales}>
        <span className={styles.oldPrice}>{oldPrice}</span>
        <span className={styles.currentPrice}>{currentPrice}</span>
      </div>
      <h4 className={styles.listHeader}>{listHeader}</h4>
      <ul
        className={`${styles.list} ${styles[listColor]} ${styles[listTextSize]}`}
      >
        {list.map((value) => {
          return (
            <li className={styles.listItem} key={value.id}>
              {value.text}
            </li>
          );
        })}
      </ul>
      <Button
        text={btnProps.text}
        colorScheme={btnProps.colorScheme}
        buttonSize={btnProps.buttonSize}
        textSize={btnProps.textSize}
      />
    </div>
  );
}
