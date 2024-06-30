import Image from "next/image";
import PatientHistory from "./patient-history";
import PatientProfile from "./patient-profile";
const PatientInfo = () => {
  return (
    <div className="flex flex-col w-full relative mt-16  lg:mt-0">
      <div className="bg-[#FBFBFB] outline outline-[#DCDCDC] outline-1 rounded-t-lg p-2 flex justify-between items-center">
        <div className="flex gap-1">
          <Image
            src="./icons/patient-card.svg"
            width={20}
            height={20}
            alt="profile"
          />
          <p className="lg:text-lg text-sm font-medium">Hasta Bilgileri</p>
        </div>
        <div className="flex gap-1">
          <button className="flex p-1 px-1.5 rounded-[5px] items-center gap-1 text-xs bg-white outline-1 outline outline-[#DCDCDC] hover:bg-[#F5F5F5] active:bg-[#E5E5E5]">
            <Image
              src="./icons/new-prescription.svg"
              width={18}
              height={18}
              alt="edit"
            />
            <p>Yeni Reçete</p>
          </button>
          <button className="flex p-1 px-1.5 rounded-[5px] items-center gap-1 text-xs bg-white outline-1 outline outline-[#DCDCDC] hover:bg-[#F5F5F5] active:bg-[#E5E5E5]">
            <Image
              src="./icons/new-appointment.svg"
              width={18}
              height={18}
              alt="edit"
            />
            <p>Yeni Randevu</p>
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-t pointer-events-none from-[#FBFBFB] to-[#FBFBFB00] rounded-lg  absolute bottom-0 left-0 w-full h-12 z-10"></div>
      <div className="outline-[#DCDCDC] md:max-h-96 max-h-[550px] overflow-y-auto rounded-b-lg gap-5 outline-1 outline bg-white flex flex-col md:flex-row p-3 relative">
        <PatientProfile />
        <div className="min-h-max w-[1px] bg-[#F2F2F2] sticky top-0"></div>
        <PatientHistory />
      </div>
    </div>
  );
};

export default PatientInfo;
