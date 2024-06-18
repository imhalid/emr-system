import Image from "next/image"
const PatientInfo = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-[#FBFBFB] p-1 flex justify-between">
        <div className="flex gap-2">
      <Image src="./icons/patient-card.svg" width={24} height={24} alt="profile" />
      <p className="text-lg font-medium">Hasta Bilgileri</p>
        </div>
        <div>
          <button>Yeni Reçete</button>
          <button>Yeni Randevu</button>
        </div>
      </div>
      <div>
        <div>
        profile
        </div>
        <div>
          geçmiş
        </div>
      </div>
    </div>
  )
}

export default PatientInfo