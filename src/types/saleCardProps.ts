import { ButtonProps } from "../shared/Button/types";

export type SaleCardProps = {
  header: string;
  description?: (string | JSX.Element)[];
  oldPrice: string;
  currentPrice: string;
  listHeader?: string;
  list: (string | JSX.Element)[][];
  listTextSize: "smList" | "mdList";
  listColor: "purpleList" | "orangeList";
  btnProps: ButtonProps;
};
