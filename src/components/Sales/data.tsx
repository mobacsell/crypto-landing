import styles from "./Sales.module.css";
import { SaleCardProps } from "@/types/saleCardProps";

export const cardsDataList: SaleCardProps[] = [
  {
    header: "Базовый",
    description: (
      <>
        Отлично подходит для ознакомления со
        <br />
        всеми основными понятиями
        <br />
        <span className={styles.purple}>Простым языком</span>
      </>
    ),
    oldPrice: "3000 р.",
    currentPrice: "Бесплатно",
    btnProps: {
      text: "Скачать pdf",
      colorScheme: "purpleLight",
      buttonSize: "mdButton",
      textSize: "mdText",
    },
    listTextSize: "mdList",
    listColor: "purpleList",
    list: [
      <>
        Что такое <span className={styles.purpleLight}>крипта</span> и{" "}
        <span className={styles.purpleLight}>блокчейн</span>
      </>,
      <>
        Почему это <span className={styles.purple}>безопасно</span>
      </>,
      <>
        Что такое <span className={styles.purpleLight}>кошелек</span>
      </>,
      <>
        Почему это <span className={styles.purple}>прибыльно</span>
      </>,
    ],
  },
  {
    header: "Продвинутый",
    oldPrice: "35000 р.",
    currentPrice: "20,000 р.",
    listHeader: "Базовый, плюс:",
    btnProps: {
      text: "Запись на консультацию",
      colorScheme: "purpleOrangePurple",
      buttonSize: "mdButton",
      textSize: "smText",
    },
    listTextSize: "smList",
    listColor: "purpleList",
    list: [
      <>
        Как создать себе <span className={styles.purpleLight}>кошелек</span>.{" "}
        <span className={styles.purpleLight}>По шагам</span>
      </>,
      <>
        Как и где обменять{" "}
        <span className={styles.purple}>токены на рубли</span>
        <br />
        Биржа, <span className={styles.bold}>p2p</span>, вывод на карту и
        обратно
      </>,
      <>
        Что такое <span className={styles.orangeGradient}>NFT</span> и как ими
        торговать
      </>,
      <>
        Что такое &171;эфир&187; и чем он отличается
        <br />
        от<span className={styles.green}>USDT</span>. Различия{" "}
        <span className={styles.orange}>Bitcoin</span> и{" "}
        <span className={styles.purple}>Etherium</span>
      </>,
      <>
        Как <span className={styles.purple}>безопасно</span> хранить средства в
        <br />
        <span className={styles.purple}>токенах</span> и получать с них{" "}
        <span className={styles.purpleLight}>доход 15%</span>
        <br />
        годовых с <span className={styles.purple}>выводом в любое время</span>
      </>,
      <>
        <span className={styles.grey}>
          Более глубокие технические
          <br />
          особенности (по запросу)
        </span>
      </>,
    ],
  },
  {
    header: "Индивидуальный",
    description: (
      <>
        Полноценное Наставничество.
        <br />
        Zoom звонок, 2-3 дня. Вся нужная
        <br />
        информация
        <br />
        <span className={styles.purple}>Простым языком</span>
      </>
    ),
    oldPrice: "750000 р.",
    currentPrice: "50,000 р.",
    listHeader: "Продвинутый, плюс:",
    btnProps: {
      text: "Запись на консультацию",
      colorScheme: "orangePurple",
      buttonSize: "mdButton",
      textSize: "smText",
    },
    listTextSize: "mdList",
    listColor: "orangeList",
    list: [
      <>Наставничество и консультация по всем вопросам в течение месяца</>,
    ],
  },
];
