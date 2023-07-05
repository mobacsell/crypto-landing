import styles from "./Information.module.css";
import Image from "next/image";

import blockchain from "@assets/Information/blockchain.svg";
import tokens from "@assets/Information/tokens.svg";
import wallet from "@assets/Information/wallet.svg";

const list = [
  {
    imagePath: tokens,
    imageName: "Логотип эфириум",
    header: "Крипта и токены",
    description: [
      "Что это такое",
      <br key="1" />,
      "Почему на них зарабатывают",
    ],
  },
  {
    imagePath: blockchain,
    imageName: "Логотип блокчейн",
    header: "Блокчейн",
    description: [
      "Что это такое",
      <br key="1" />,
      "Почему на них зарабатывают",
    ],
  },
  {
    imagePath: wallet,
    imageName: "Кошелек",
    header: "Кошелек",
    description: ["Для чего он нужен", <br key="2" />, "Можно ли без него"],
  },
];

export function Infromation() {
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
