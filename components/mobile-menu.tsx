"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import MenuLinks from "./menu-links";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <div className="lg:hidden inline ml-4">
      <button className="relative z-50" onClick={() => setOpenMenu(!openMenu)}>
        <Image
          color="red"
          src="/icons/m-menu.svg"
          width={24}
          height={24}
          alt="logo"
        />
      </button>
      {openMenu && (
        <div className="bg-black/90 h-full w-full top-14 fixed z-30"></div>
      )}
      <div
        className={`h-full flex flex-col p-4 fixed pt-16 bottom-0 left-0 bg-[#222126] text-[#ADADAD] z-40 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MenuLinks />
      </div>
    </div>
  );
};

export default MobileMenu;
