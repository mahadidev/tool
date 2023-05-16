import {
  HomeHero,
  HomeChat,
  HomePDF,
  HomeDalle,
  HomeScrape,
} from "@/components";
import { Background } from "@/components/common";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Background />
      <HomeHero />
      <HomeChat />
      <HomePDF />
      <HomeScrape />
      <HomeDalle />
    </main>
  );
}
