import Image from "next/image";
import Profile from "./profile";
import Notification from "./notification";
import MenuLinks from "./menu-links";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const Navbar = () => {
  return (
    <div className="bg-[#222126] h-14 lg:bg-[#FBFBFB] py-3 pl-4 fixed left-0 top-0 z-50 w-full lg:relative lg:justify-end flex justify-between items-center">
      <Sheet>
        <SheetTrigger>
          <Image
            className=""
            src="/icons/m-menu.svg"
            width={24}
            height={24}
            alt="logo"
          />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="h-full w-[290px] flex flex-col p-4 fixed pt-16 bg-[#222126] text-[#ADADAD] border-none"
        >
          <MenuLinks />
        </SheetContent>
      </Sheet>
      <Image
        className="lg:hidden inline mr-auto ml-4"
        color="red"
        src="./logo.svg"
        width={126}
        height={24}
        alt="logo"
      />
      <div className="flex gap-3 justify-end items-center px-4">
        <Image
          className="lg:hidden inline"
          color="red"
          src="/icons/m-search.svg"
          width={24}
          height={24}
          alt="search"
        />
        <div className="relative hidden lg:inline">
          <Image
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            src="/icons/search.svg"
            width={20}
            height={20}
            alt="search"
          />
          <input
            type="text"
            placeholder="Hasta ara"
            className="bg-white w-[200px] h-[40px] rounded-lg pl-9 pr-4 placeholder-[#D5D5D5] outline outline-1 outline-[#D5D5D5]"
          />
        </div>
        <Notification />
        <div className="h-5 bg-[#F2F2F2] w-[2px] hidden lg:inline"></div>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
