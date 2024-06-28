"use client"
import MainArea from "@/components/main-area";
import Menu from "@/components/menu";
import { useMatchMedia } from "@/lib/useMatchMedia"

export default function Home() {
  const isMediumDevice = useMatchMedia("(width <= 1024px)", true);

  return (
    <main className="flex flex-row flex-1 relative">
      {!isMediumDevice && <Menu />}
      <MainArea />
    </main>
  );
}
