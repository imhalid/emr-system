"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import NoticeBoard from "./notice-board";

import { useMatchMedia } from "@/lib/useMatchMedia"

const MobileLinks = () => {
  const [selectedMenu, setSelectedMenu] = useState("Anasayfa");
  const isLargeDevice = useMatchMedia("(width >= 1024px)", true)
  return (
    <div className="flex flex-col mt-2 h-full">
      <div className="gap-2 flex flex-col">
        {MenuData.slice(0, -2).map((item, index) => (
          <Link
            href={"/"}
            key={index}
            className={`flex items-center cursor-pointer rounded-[4px] p-1 gap-2 ${selectedMenu === item.name ? "bg-[#2F3138] text-[#E0E1E8] outline outline-[#36373E]" : ""}`}
            onClick={() => setSelectedMenu(item.name)}
          >
            <Image
              className={`${selectedMenu === item.name ? "glow-menu-logo" : ""}`}
              src={item.icon}
              width={24}
              height={24}
              alt={item.name}
            />
            <span className="text-nowrap text-inherit font-poppins overflow-hidden whitespace-nowrap tracking-wide">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-auto gap-2 flex flex-col">
        {!isLargeDevice && <Dialog>
  <DialogTrigger>
    <div
            className={`flex items-center cursor-pointer rounded-[4px] p-1 gap-2 ${selectedMenu === "Duyurular" ? "bg-[#2F3138] text-[#E0E1E8] outline outline-[#36373E]" : ""}`}
            onClick={() => setSelectedMenu("Duyurular")}
          >
            <Image
              className={`${selectedMenu === "Duyurular" ? "glow-menu-logo" : ""}`}
              src="./icons/m-notice.svg"
              width={24}
              height={24}
              alt="Duyurular"
            />
            <span className="text-nowrap text-inherit font-poppins overflow-hidden whitespace-nowrap tracking-wide">
              Duyurular
            </span>
          </div>
  </DialogTrigger>
  <DialogContent className="bg-transparent p-0 w-auto overflow-hidden">
    <NoticeBoard />
  </DialogContent>
</Dialog>}
        
        {MenuData.slice(-2).map((item, index) => (
          <Link
            key={index}
            href={"/"}
            className={`flex items-center cursor-pointer rounded-[4px] p-1 gap-2 ${selectedMenu === item.name ? "bg-[#2F3138] text-[#E0E1E8] outline outline-[#36373E]" : ""}`}
            onClick={() => setSelectedMenu(item.name)}
          >
            <Image
              className={`${selectedMenu === item.name ? "glow-menu-logo" : ""}`}
              src={item.icon}
              width={24}
              height={24}
              alt={item.name}
            />
            <span className="text-nowrap text-inherit font-poppins overflow-hidden whitespace-nowrap tracking-wide">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileLinks;

const MenuData = [
  {
    name: "Anasayfa",
    icon: "./icons/home.svg",
  },
  {
    name: "Geçmiş",
    icon: "./icons/history.svg",
  },
  {
    name: "Randevular",
    icon: "./icons/appointment.svg",
  },
  {
    name: "İş Listesi",
    icon: "./icons/job-list.svg",
  },
  {
    name: "Ayarlar",
    icon: "./icons/setting.svg",
  },
  {
    name: "Yardım",
    icon: "./icons/help.svg",
  },
];
