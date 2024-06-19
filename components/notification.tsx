import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"
const Notification = () => {
  return (
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
  )
}

export default Notification