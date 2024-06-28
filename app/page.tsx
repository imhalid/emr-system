"use client"
import MainArea from "@/components/main-area";
import Menu from "@/components/menu";
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isMediumDevice = useMediaQuery({query: "(width <= 1024px)"});

  return (
    <main className="flex flex-row flex-1 relative">
      {!isMediumDevice && <Menu />}
      <MainArea />
    </main>
  );
}
