import Image from "next/image";
import NoticeBoardItems from "./notice-board-items";
const NoticeBoard = () => {
  return (
    <div className="flex flex-col min-w-72 relative">
      <div className="bg-[#FBFBFB] outline outline-[#DCDCDC] outline-1 rounded-t-lg p-2 flex justify-between">
        <div className="flex gap-2">
          <Image
            src="./icons/notif-board.svg"
            width={24}
            height={24}
            alt="profile"
          />
          <p className="text-lg font-medium">Duyurular</p>
        </div>
      </div>
      <div className="bg-gradient-to-t pointer-events-none from-[#FBFBFB] to-[#FBFBFB00] rounded-lg  absolute bottom-0 left-0 w-full h-12 z-10"></div>
      <div className="outline-[#DCDCDC] max-h-96 overflow-y-auto rounded-b-lg gap-5 outline-1 outline bg-white flex p-3 relative">
        <NoticeBoardItems />
      </div>
    </div>
  );
};

export default NoticeBoard;
