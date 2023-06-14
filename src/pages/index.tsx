import Image from "next/image";
import { Promo } from "@/components/Promo";
import { Infromation } from "@/components/Information";
import { About } from "@/components/About";
import { Reasons } from "@/components/Reasons";
import { Reviews } from "@/components/Reviews";
import { Screen } from "@/components/Screen";

export default function Home() {
  return (
    <main>
      <Promo />
      <Infromation />
      <About />
      <Reasons />
      <Reviews />
      <Screen />
    </main>
  );
}
