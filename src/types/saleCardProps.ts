import { ButtonProps } from "../shared/Button/types";

export type SaleCardProps = {
  header: string;
  description?: JSX.Element;
  oldPrice: string;
  currentPrice: string;
  listHeader?: string;
  list: JSX.Element[];
  listTextSize: "smList" | "mdList";
  listColor: "purpleList" | "orangeList";
  btnProps: ButtonProps;
};
