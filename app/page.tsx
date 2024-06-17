import MainArea from "@/components/main-area";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <main className="h-screen flex flex-row-reverse flex-1">
      <MainArea />
      <Menu />
    </main>
  );
}
