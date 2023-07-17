import styles from "./Reviews.module.css";
import Image from "next/image";

import face1 from "@assets/Reviews/face-1.png";
import face2 from "@assets/Reviews/face-2.png";

const listContent = [
  {
    image: face1,
    name: "Яна Никитина",
    description: "",
    about:
      "Живя в современном мире невольно задумываешься о новых способах заработка. Никогда не интересовалась криптой и, соответственно, ничего не знала, не понимала, считала сложным и ненадёжным. Но, прочитав этот гайд, я уже обладаю базовыми определениями и знаниями, которые смогут мне в дальнейшем пригодиться. Всё рассказано максимально просто и понятно. Без лишней воды и сложностей. Оформлено интересно и удобно.",
    descrBlockType: "about-sm",
  },
  {
    image: face1,
    name: "Терехова Светлана",
    description: "художник",
    about:
      "Прочитала гайд про криптовалюту на фантиках от Александра Денисевича и только хочется сказать - спасибо! Наконец-то все понятно и доступно объяснено. Очень рекомендую пройти этот гайд всем, кто только начинает знакомиться с этой темой.",
    descrBlockType: "about-md",
  },
  {
    image: face2,
    name: "Максим Липов",
    description: "техник 2 категории",
    about:
      "Я наконец-то понял, что такое криптовалюты и блокчейн! Спасибо автору за простоту в объяснениях и аналогии с фантиками. Теперь я готов к погружению в этот интересный мир новых технологий!",
    descrBlockType: "about-lg",
  },
  {
    image: face2,
    name: "Олег Винельников",
    description: "врач-онколог",
    about: "Сказать, что что-то сложно, я бы не сказал, мне все понятно.",
    descrBlockType: "about-lg",
  },
];

export function Reviews() {
  return (
    <section className={styles.root}>
      <h2 className={styles.header}>Отзывы первых участников</h2>
      <ul className={styles.list}>
        {listContent.map((value, index) => {
          return (
            <li className={styles.itemContent} key={index}>
              <div className={styles.clientInfo}>
                <Image src={value.image} alt={`фотография ${value.name}`} />
                <h3 className={styles.clientName}>{value.name}</h3>
                <p className={styles.clientDescription}>{value.description}</p>
              </div>
              <div
                className={`${styles.about} ${styles[value.descrBlockType]}`}
              >
                {value.about}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
