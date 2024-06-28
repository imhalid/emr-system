"use client";
import MainArea from "@/components/main-area";
import Menu from "@/components/menu";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Home() {
  const isMediumDevice = useMediaQuery("(width <= 1025px)");

  return (
    <main className="flex flex-row flex-1 relative">
      {!isMediumDevice && <Menu />}
      <MainArea />
    </main>
  );
}
