import styles from "./Button.module.css";
import { ButtonProps } from "./types";

export function Button({
  text,
  colorScheme,
  buttonSize,
  textSize,
  handlerBtnClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[colorScheme]} ${styles[buttonSize]} ${styles[textSize]}`}
      onClick={handlerBtnClick}
    >
      {text}
    </button>
  );
}
