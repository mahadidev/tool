import { HomeHero, HomeChat } from "@/components";
import { Background } from "@/components/common";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Background />
      <HomeHero />
      <HomeChat />
    </main>
  );
}
