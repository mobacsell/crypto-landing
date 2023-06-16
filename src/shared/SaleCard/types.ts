import { ButtonProps } from "../Button/types";

export type SaleCardProps = {
  header: string;
  description?: (string | JSX.Element)[];
  oldPrice: string;
  currentPrice: string;
  listHeader?: string;
  list: List[];
  listTextSize: 'smList' | 'mdList',
  listColor: 'purpleList' | 'orangeList',
  btnProps: ButtonProps
};

type List = {
  id: number;
  text: (string | JSX.Element)[];
};
