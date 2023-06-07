import styles from "./Information.module.css";
import Image from "next/image";

import blockchain from "@assets/Information/blockchain.svg";
import tokens from "@assets/Information/tokens.svg";
import wallet from "@assets/Information/wallet.svg";

export function Infromation() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Вы узнаете</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image src={tokens} alt="Крипта и токены" />
            <div className={styles.content}>
              <h3 className={styles.contentHeader}>Крипта и токены</h3>
              <p className={styles.contentDescription}>
                Что это такое
                <br />
                Почему на них зарабатывают
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <Image src={blockchain} alt="Блокчейн" />
            <div className={styles.content}>
              <h3 className={styles.contentHeader}>Блокчейн</h3>
              <p className={styles.contentDescription}>
                Как он устроен
                <br />
                Почему он безопасен
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <Image src={wallet} alt="Кошелек" />
            <div className={styles.content}>
              <h3 className={styles.contentHeader}>Кошелек</h3>
              <p className={styles.contentDescription}>
                Для чего он нужен
                <br />
                Можно ли без него
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
