import Image from "next/image"
import Profile from "./profile"
import Notification from "./notification"
const Navbar = () => {
  return (
    <div className="bg-[#FBFBFB] py-3">
      <div className="flex gap-3 justify-end items-center px-4">
        <div className="relative">
          <Image className="absolute top-1/2 left-2 transform -translate-y-1/2" src="/icons/search.svg" width={20} height={20} alt="search" />
          <input type="text" placeholder="Hasta ara" className="bg-white w-[200px] h-[40px] rounded-lg pl-9 pr-4 placeholder-[#D5D5D5] outline outline-1 outline-[#D5D5D5]" />
        </div>
        <Notification />
        <div className="h-5 bg-[#F2F2F2] w-[2px]"></div>
        <Profile />
      </div>
    </div>
  )
}

export default Navbar