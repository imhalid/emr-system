"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import MenuLinks from "./menu-links";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    console.log("menu rendered");
    const mainArea = document.querySelector("#main-area") as HTMLElement;
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
      mainArea.style.marginLeft = "13rem";
    } else {
      containerControls.start("close");
      svgControls.start("close");
      mainArea.style.marginLeft = "4.1rem";
    }
  }, [containerControls, isOpen, svgControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    close: {
      width: "4.1rem",
      transition: {
        type: "ease-in-out",
        duration: 0.0,
      },
    },
    open: {
      width: "13rem",
      transition: {
        type: "ease-in-out",
        duration: 0.0,
      },
    },
  };

  const clipmaskVariantsLogo = {
    close: {
      clipPath: "inset(0 75% 0 0)",
      transition: {
        duration: 0.0,
      },
    },
    open: {
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.0,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="h-full flex flex-col p-4 left-0 fixed bg-[#222126] text-[#ADADAD]"
    >
      <Link href="/" className="relative h-8 p-1">
        <motion.div
          variants={clipmaskVariantsLogo}
          animate={svgControls}
          initial="close"
          className="w-32"
        >
          <Image
            className=""
            src="./logo.svg"
            width={126}
            height={24}
            alt="logo"
          />
        </motion.div>
      </Link>
      <MenuLinks />
      <button
        className={`absolute bg-[#222126] p-2 rounded-lg -right-2 text-nowrap top-1/2 transform -translate-y-1/2 ${isOpen ? "cursor-w-resize" : "cursor-e-resize"}`}
        onClick={handleOpenClose}
      >
        <Image
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          src="./menu-toogle.svg"
          width={6}
          height={11}
          alt="arrow"
        />
      </button>
    </motion.div>
  );
};
export default Menu;
