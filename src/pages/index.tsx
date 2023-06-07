import Image from "next/image";
import { Inter } from "next/font/google";
import { Promo } from "@/components/Promo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Promo />
    </main>
  );
}
