import { SaleCard } from "@/shared/SaleCard";
import styles from "./Sales.module.css";

export function Sales() {
  const brElement = <br />;
  const setSpan = (text: string, style: string) => {
    return <span className={`${styles[style]}`}>{text}</span>;
  };

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
        <SaleCard
          header="Базовый"
          description={[
            "Отлично подходит для ознакомления со",
            brElement,
            "всеми основными понятиями.",
            brElement,
            setSpan("Простым языком", "purple"),
          ]}
          oldPrice="3000 р."
          currentPrice="Бесплатно"
          btnProps={{
            text: "Скачать pdf",
            colorScheme: "purpleLight",
            buttonSize: "mdButton",
            textSize: "mdText",
          }}
          listTextSize="mdList"
          listColor="purpleList"
          list={[
            {
              id: 1,
              text: [
                "Что такое ",
                setSpan("крипта", "purpleLight"),
                " и ",
                setSpan("блокчейн", "purpleLight"),
              ],
            },
            {
              id: 2,
              text: ["Почему это ", setSpan("безопасно", "purple")],
            },
            {
              id: 3,
              text: ["Что такое ", setSpan("кошелек", "purpleLight")],
            },
            {
              id: 4,
              text: ["Почему это ", setSpan("прибыльно", "purple")],
            },
          ]}
        />
        <SaleCard
          header="Продвинутый"
          oldPrice="35000 р."
          currentPrice="20,000 р."
          listHeader="Базовый, плюс:"
          btnProps={{
            text: "Запись на консультацию",
            colorScheme: "purpleOrangePurple",
            buttonSize: "mdButton",
            textSize: "smText",
          }}
          listTextSize="smList"
          listColor="purpleList"
          list={[
            {
              id: 1,
              text: [
                "Как создать себе ",
                setSpan("кошелек", "purpleLight"),
                ". ",
                setSpan("По шагам", "purpleLight"),
              ],
            },
            {
              id: 2,
              text: [
                "Как и где обменять ",
                setSpan("токены на рубли", "purple"),
                " Биржа, ",
                setSpan("p2p", "bold"),
                ", вывод на карту и обратно",
              ],
            },
            {
              id: 3,
              text: [
                "Что такое ",
                setSpan("NFT", "orangeGradient"),
                " и как ими торговать",
              ],
            },
            {
              id: 4,
              text: [
                'Что такое "эфир" и чем он отличается от ',
                setSpan("USDT", "green"),
                ". Различия ",
                setSpan("Bitcoin", "orange"),
                " и ",
                setSpan("Etherium", "purple"),
              ],
            },
            {
              id: 5,
              text: [
                "Как ",
                setSpan("безопасно", "purple"),
                " хранить средства в ",
                setSpan("токенах", "purpleLight"),
                " и получать с них ",
                setSpan("доход 15%", "purpleLight"),
                " годовых с ",
                setSpan("выводом в любое время", "purple"),
              ],
            },
            {
              id: 6,
              text: [
                setSpan(
                  "Более глубокие технические особенности (по запросу)",
                  "grey"
                ),
              ],
            },
          ]}
        />
        <SaleCard
          header="Индивидуальный"
          description={[
            "Полноценное Наставничество.",
            brElement,
            "Zoom звонок, 2-3 дня. Вся нужная",
            brElement,
            "информация",
            brElement,
            setSpan("Простым языком", "purple"),
          ]}
          oldPrice="750000 р."
          currentPrice="50,000 р."
          listHeader="Продвинутый, плюс:"
          btnProps={{
            text: "Запись на консультацию",
            colorScheme: "orangePurple",
            buttonSize: "mdButton",
            textSize: "smText",
          }}
          listTextSize="mdList"
          listColor="orangeList"
          list={[
            {
              id: 1,
              text: [
                "Наставничество и консультация по всем вопросам в течение месяца",
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
