import Image from "next/image"
import NoticeBoardItems from "./ui/notice-board-items"
const NoticeBoard = () => {
  return (
    <div className="flex flex-col min-w-72">
      <div className="bg-[#FBFBFB] outline outline-[#DCDCDC] outline-1 rounded-t-lg p-2 flex justify-between">
        <div className="flex gap-2">
          <Image src="./icons/notif-board.svg" width={24} height={24} alt="profile" />
          <p className="text-lg font-medium">Duyurular</p>
        </div>
      </div>
      <div className="outline-[#DCDCDC] max-h-96 overflow-y-auto rounded-b-lg gap-5 outline-1 outline bg-white flex p-3 relative">
        <NoticeBoardItems />
      </div>
    </div>
  )
}

export default NoticeBoard