import Image from "next/image";
import { Inter } from "next/font/google";
import { Promo } from "@/components/Promo";
import { Infromation } from "@/components/Information";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Promo />
      <Infromation />
    </main>
  );
}
