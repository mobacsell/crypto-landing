import styles from "./Promo.module.css";
import Image from "next/image";
import { Button } from "@/shared/Button";

import arrow from "@assets/Promo/arrow.svg";
import bitCoin from "@assets/Promo/bitCoin.svg";
import candy from "@assets/Promo/candy.svg";
import eos from "@assets/Promo/eos.svg";
import ethereum from "@assets/Promo/ethereum.svg";
import sCrypt from "@assets/Promo/sCrypt.svg";
import tCrypt from "@assets/Promo/tCrypt.svg";

export function Promo() {
  const handlerArrowClick = () => {};

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>
          Просто о крипте
          <br />
          на <span className={styles.headerGradient}>фантиках</span>
        </h1>
        <p className={styles.description}>
          Наконец, <span className={styles.light}>все знания</span> собраны в{" "}
          <span className={styles.light}>одном месте</span>
          <br />
          <span className={styles.light}>Простым языком</span>
        </p>
        <ul className={styles.list}>
          <li>
            Как все работает и{" "}
            <span className={styles.light}>что такое крипта</span>
          </li>
          <li>
            Зачем нужен <span className={styles.light}>кошелек</span>
          </li>
          <li>
            Почему на этом{" "}
            <span className={styles.purple}>зарабатывают большие деньги</span>
          </li>
        </ul>
        <Button
          text="Скачать гайд"
          colorScheme="purpleLight"
          buttonSize="smButton"
          textSize="mdText"
        />
        <div className={styles.arrow} onClick={handlerArrowClick}>
          <Image src={arrow} alt="стрелка" />
        </div>
        <div className={styles.bitCoin}>
          <Image src={bitCoin} alt="Биткоин" />
        </div>
        <div className={styles.candy}>
          <Image src={candy} alt="Конфета" />
        </div>
        <div className={styles.eos}>
          <Image src={eos} alt="eos" />
        </div>
        <div className={styles.ethereum}>
          <Image src={ethereum} alt="ethereum" />
        </div>
        <div className={styles.sCrypt}>
          <Image src={sCrypt} alt="ethereum" />
        </div>
        <div className={styles.tCrypt}>
          <Image src={tCrypt} alt="ethereum" />
        </div>
        <div className={styles.bitCoinBlur}>
          <Image src={bitCoin} alt="Биткоин" />
        </div>
      </div>
    </section>
  );
}
