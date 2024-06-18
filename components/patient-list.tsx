import { Patient, PatientListData } from "@/patient-list-data"
import Image from "next/image";

const statusClasses: { [key: string]: string } = {
  "Devam Ediyor": "bg-[#56B13F] text-[#E7FFEC] outline-[#2D7F44]",
  "Sırada": "bg-[#FFF7EF] text-[#91502C] outline-[#F7E5CA]",
  "Muayene İptal": "bg-[#F25050] text-[#FFEDED] outline-[#A32222]",
  "Gelmedi": "bg-[#F2F3F7] text-[#1A2331] outline-[#E1E3E9]",
  "Tamamlandı": "bg-[#EFF3FF] text-[#2C2E91] outline-[#CAD6F7]"
};

const PatientList = () => {
  return (
    <div className="">
      <table className="min-w-full bg-[#FBFBFB]   outline outline-1 outline-[#DCDCDC] rounded-lg overflow-hidden">
        <thead>
          <tr className="text-[#656565] text-sm border-b text-left">
            <th className="py-2 px-4 ">No</th>
            <th className="py-2 px-4">Ad</th>
            <th className="py-2 px-4">TCKN</th>
            <th className="py-2 px-4">Yaş</th>
            <th className="py-2 px-4">Cinsiyet</th>
            <th className="py-2 px-4">R. Tarihi</th>
            <th className="py-2 px-4">R. Saati</th>
            <th className="py-2 px-4">Durum</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {PatientListData.map((patient, index) => (
            <tr key={index} className={
              patient.status === "Muayene İptal" ? "bg-gradient-to-r from-[#F2505020] to-[#F2505000]" :
                patient.status === "Devam Ediyor" ? "bg-gradient-to-r from-[#E2FFE2] to-[#E2FFE200]" :
                  "bg-white"
            }>
              <td className="py-2 px-4 border-b border-[#F2F2F2] text-left">{patient.no}</td>
              <td className="py-2 px-4 border-b border-[#F2F2F2]">
              {patient.name}</td>
              <td className="py-2 px-4 border-b border-[#F2F2F2] text-left">{patient.tckn}</td>
              <td className="py-2 px-4 border-b border-[#F2F2F2] text-left">{patient.age}</td>
              <td className="py-2 px-4 border-b border-[#F2F2F2] text-left">{patient.gender}</td>
              <td className="py-2 px-4 border-b border-[#F2F2F2] text-left">{patient.regDate}</td>
              <td className="py-2 px-4 border-b border-[#F2F2F2] text-left">{patient.regTime}</td>
              <td className={`py-2 px-4 border-b border-[#F2F2F2] text-left`}>
                <p className={`w-fit text-xs px-1.5 rounded-full outline outline-2 font-medium ${statusClasses[patient.status]}`}>
                  {patient.status}
                </p>
              </td>
              <td className="py-2 px-4 border-b border-[#F2F2F2] text-left gap-2 flex ">
                <button className="flex gap-1 text-sm items-center bg-[#F5F5F5] outline-[#DCDCDC] outline-1 outline text-[#222126] px-2 py-1 rounded">
                  <Image src="/icons/patient-call.svg" width={18} height={18} alt="call" />
                  <p>Hastayi Çağır</p>
                </button>
                <button className="flex gap-1 text-sm items-center bg-[#F5F5F5] outline-[#DCDCDC] outline-1 outline text-[#222126] px-2 py-1 rounded">
                  <Image src="/icons/patient-info.svg" width={18} height={18} alt="info" />
                  <p>Hasta Bilgileri</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;