import styles from "./Screen.module.css";
import Image from "next/image";

import image from "@assets/Screen/screenshot.png";

export function Screen() {
  return (
    <section className={styles.root}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="Семинар" />
      </div>
    </section>
  );
}
