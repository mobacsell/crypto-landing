import blockchain from "@assets/Information/blockchain.svg";
import tokens from "@assets/Information/tokens.svg";
import wallet from "@assets/Information/wallet.svg";

export const list = [
  {
    imagePath: tokens,
    imageName: "Логотип эфириум",
    header: "Крипта и токены",
    description: (
      <>
        Что это такое
        <br /> Почему на них зарабатывают
      </>
    ),
  },
  {
    imagePath: blockchain,
    imageName: "Логотип блокчейн",
    header: "Блокчейн",
    description: (
      <>
        Что это такое
        <br />
        Почему на них зарабатывают
      </>
    ),
  },
  {
    imagePath: wallet,
    imageName: "Кошелек",
    header: "Кошелек",
    description: (
      <>
        Для чего он нужен
        <br />
        Можно ли без него
      </>
    ),
  },
];
