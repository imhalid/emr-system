import Seperator from "./ui/seperator"
import Image from "next/image"
const Navbar = () => {
  return (
    <div className="bg-[#FBFBFB] py-3">
      <div className="flex gap-3 justify-end items-center px-4">
        <div className="relative">
          <Image className="absolute top-1/2 left-2 transform -translate-y-1/2" src="/icons/search.svg" width={20} height={20} alt="search" />
          <input type="text" placeholder="Hasta ara" className="bg-white w-[200px] h-[40px] rounded-lg pl-9 pr-4 placeholder-[#D5D5D5]" />
        </div>
          <button>
          <Image src="/icons/notification.svg" width={24} height={24} alt="notification" />
          </button>
        <div className="h-5 bg-[#F2F2F2] w-[2px]"></div>
        <button className="flex ml-1 flex-col">
          <p className="text-[#222126]">Dr. Damir Khabirov</p>
          <p className="text-xs text-[#656565]">Beyin Cerrahi</p>
        </button>
      </div>
    </div>
  )
}

export default Navbar