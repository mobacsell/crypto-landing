export type ButtonProps = {
  text: string;
  colorScheme: "purpleLight" | "orangePurple" | "purpleOrangePurple";
  buttonSize: "smButton" | "mdButton";
  textSize: "smText" | "mdText";
  handlerBtnClick?: () => void;
};
