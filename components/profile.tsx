import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
const Profile = () => {
  return (
    <Popover>
      <PopoverTrigger className="text-left ml-1">
        <Image
          className="lg:hidden inline"
          color="red"
          src="/icons/m-user-square.svg"
          width={24}
          height={24}
          alt="notification"
        />
        <div className="hidden lg:inline">
          <p className="text-[#222126]">Dr. Damir Khabirov</p>
          <p className="text-xs text-[#656565]">Beyin Cerrahi</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="m-2 w-fit min-w-56">
        <div className="flex items-center flex-col">
          <Image
            className="rounded-full"
            src="/dr.png"
            width={76}
            height={76}
            alt="doctor"
          />
          <p className="text-[#222126]">Dr. Damir Khabirov</p>
          <p className="text-xs text-[#656565]">Beyin Cerrahi</p>
          <div className="h-0.5 w-full my-2 bg-[#F2F2F2]"></div>
          <div className="text-left w-full flex flex-col items-start font-medium">
            <button className="text-[#222126] text-sm">Profili Duzenle</button>
            <button className="text-[#222126] text-sm">Ayarlar</button>
            <div className="h-0.5 w-full my-2 bg-[#F2F2F2]"></div>
            <button className="text-[#222126] text-sm">Cikis yap</button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
