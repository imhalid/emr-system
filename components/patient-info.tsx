import Image from "next/image"
import PatientHistory from "./patient-history"
import PatientProfile from "./patient-profile"
const PatientInfo = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-[#FBFBFB] outline outline-[#DCDCDC] outline-1 rounded-t-lg p-2 flex justify-between">
        <div className="flex gap-2">
          <Image src="./icons/patient-card.svg" width={24} height={24} alt="profile" />
          <p className="text-lg font-medium">Hasta Bilgileri</p>
        </div>
        <div className="flex gap-2">
          <button className="flex p-1 px-2 rounded-[5px] items-center gap-1 text-sm bg-white outline-1 outline outline-[#DCDCDC]">
            <Image src="./icons/new-prescription.svg" width={18} height={18} alt="edit" />
            <p>Yeni Reçete</p>
          </button>
          <button className="flex p-1 px-2 rounded-[5px] items-center gap-1 text-sm bg-white outline-1 outline outline-[#DCDCDC]">
            <Image src="./icons/new-appointment.svg" width={18} height={18} alt="edit" />
            <p>Yeni Randevu</p>
          </button>
        </div>
      </div>
      <div className="outline-[#DCDCDC] max-h-96 overflow-y-auto rounded-b-lg gap-5 outline-1 outline bg-white flex p-3 relative">
        <PatientProfile />
        <div className="min-h-max w-[1px] bg-[#F2F2F2] sticky top-0"></div>
        <PatientHistory />
      </div>
    </div>
  )
}

export default PatientInfo