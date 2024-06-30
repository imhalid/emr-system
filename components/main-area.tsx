import Navbar from "./navbar";
import NoticeBoard from "@/components/notice-board/notice-board";
import PatientInfo from "@/components/patient/patient-info";
import PatientList from "@/components/patient/patient-list";
import Image from "next/image";

const MainArea = () => {
  return (
    <div id="main-area" className="bg-[#F1EFEE] w-full">
      <Navbar />
      <div className="bg-[#F1EFEE] p-4 max-w-7xl mx-auto flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <PatientInfo />
          <div className="hidden lg:inline">
            <NoticeBoard />
          </div>
        </div>
        <div className="w-full flex justify-center opacity-50 lg:hidden">
          <Image
            src="./icons/drag.svg"
            width={24}
            height={24}
            alt="drag-icon"
          />
        </div>
        <PatientList />
      </div>
    </div>
  );
};

export default MainArea;
