import { SaleCard } from "@/shared/SaleCard";
import styles from "./Sales.module.css";
import { SaleCardProps } from "@/types/saleCardProps";

const cardsDataList: SaleCardProps[] = [
  {
    header: "Базовый",
    description: [
      "Отлично подходит для ознакомления со",
      <br key="1" />,
      "всеми основными понятиями.",
      <br key="2" />,
      <span className={styles.purple} key="3">
        Простым языком
      </span>,
    ],
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
      [
        "Что такое ",
        <span className={styles.purpleLight} key="1">
          крипта
        </span>,
        " и ",
        <span className={styles.purpleLight} key="2">
          блокчейн
        </span>,
      ],
      [
        "Почему это ",
        <span className={styles.purple} key="1">
          безопасно
        </span>,
      ],
      [
        "Что такое ",
        <span className={styles.purpleLight} key="1">
          кошелек
        </span>,
      ],
      [
        "Почему это ",
        <span className={styles.purple} key="1">
          прибыльно
        </span>,
      ],
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
      [
        "Как создать себе ",
        <span className={styles.purpleLight} key="1">
          кошелек
        </span>,
        ". ",
        <span className={styles.purpleLight} key="2">
          По шагам
        </span>,
      ],
      [
        "Как и где обменять ",
        <span className={styles.purple} key="1">
          токены на рубли
        </span>,
        " Биржа, ",
        <span className={styles.bold} key="2">
          p2p
        </span>,
        ", вывод на карту и обратно",
      ],
      [
        "Что такое ",
        <span className={styles.orangeGradient} key="1">
          NFT
        </span>,
        " и как ими торговать",
      ],
      [
        'Что такое "эфир" и чем он отличается от ',
        <span className={styles.green} key="1">
          USDT
        </span>,
        ". Различия ",
        <span className={styles.orange} key="2">
          Bitcoin
        </span>,
        " и ",
        <span className={styles.purple} key="3">
          Etherium
        </span>,
      ],
      [
        "Как ",
        <span className={styles.purple} key="1">
          безопасно
        </span>,
        " хранить средства в ",
        <span className={styles.purple} key="2">
          токенах
        </span>,
        " и получать с них ",
        <span className={styles.purpleLight} key="3">
          доход 15%
        </span>,
        " годовых с ",
        <span className={styles.purple} key="4">
          выводом в любое время
        </span>,
      ],
      [
        <span className={styles.grey} key="1">
          Более глубокие технические особенности (по запросу)
        </span>,
      ],
    ],
  },
  {
    header: "Индивидуальный",
    description: [
      "Полноценное Наставничество.",
      <br key="1" />,
      "Zoom звонок, 2-3 дня. Вся нужная",
      <br key="2" />,
      "информация",
      <br key="3" />,
      <span className={styles.purple} key="4">
        Простым языком
      </span>,
    ],
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
    list: [["Наставничество и консультация по всем вопросам в течение месяца"]],
  },
];

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
