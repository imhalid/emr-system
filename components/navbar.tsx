import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"
const Navbar = () => {
  return (
    <div className="bg-[#FBFBFB] py-3">
      <div className="flex gap-3 justify-end items-center px-4">
        <div className="relative">
          <Image className="absolute top-1/2 left-2 transform -translate-y-1/2" src="/icons/search.svg" width={20} height={20} alt="search" />
          <input type="text" placeholder="Hasta ara" className="bg-white w-[200px] h-[40px] rounded-lg pl-9 pr-4 placeholder-[#D5D5D5]" />
        </div>
        <Popover>
          <PopoverTrigger>
            <Image src="/icons/notification.svg" width={24} height={24} alt="notification" />
          </PopoverTrigger>
          <PopoverContent className="mt-4">
            <div className="flex flex-col">
              <p className="text-[#222126] font-medium mb-4 text-lg">Bildirimler</p>

              <p>Yeni bir randevunuz var</p>
              <span className="text-[#B7B7B7] text-sm">6 dakika önce</span>
              <div className="h-0.5 w-full my-1 bg-[#F2F2F2]"></div>
              <p>Yeni bir randevunuz var</p>
              <span className="text-[#B7B7B7] text-sm">10 dakika önce</span>
            </div>
          </PopoverContent>
        </Popover>
        <div className="h-5 bg-[#F2F2F2] w-[2px]"></div>
        <Popover>
          <PopoverTrigger className="text-left ml-1">
            <p className="text-[#222126]">Dr. Damir Khabirov</p>
            <p className="text-xs text-[#656565]">Beyin Cerrahi</p>
          </PopoverTrigger>
          <PopoverContent className="m-2 w-fit min-w-56">
            <div className="flex items-center flex-col">
              <Image className="rounded-full" src="/dr.png" width={76} height={76} alt="doctor" />
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
      </div>
    </div>
  )
}

export default Navbar