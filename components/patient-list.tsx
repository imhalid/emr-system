"use client";
import { Patient, PatientListData } from "@/patient-list-data";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import { useState } from "react";

const statusClasses: { [key: string]: string } = {
  "Devam Ediyor": "bg-[#56B13F] text-[#E7FFEC] outline-[#2D7F44]",
  Sırada: "bg-[#FFF7EF] text-[#91502C] outline-[#F7E5CA]",
  "Muayene İptal": "bg-[#F25050] text-[#FFEDED] outline-[#A32222]",
  Gelmedi: "bg-[#F2F3F7] text-[#1A2331] outline-[#E1E3E9]",
  Tamamlandı: "bg-[#EFF3FF] text-[#2C2E91] outline-[#CAD6F7]",
};

const statusLineBGClasses: { [key: string]: string } = {
  "Devam Ediyor": "bg-[#56B13F]",
  Sırada: "bg-[#F7E5CA]",
  "Muayene İptal": "bg-[#F25050]",
  Gelmedi: "bg-[#1A2331]",
  Tamamlandı: "bg-[#2C2E91]",
};

const PatientList = () => {
  const [filter, setFilter] = useState("Bekleyen");

  const filteredData = PatientListData.filter((patient) => {
    if (filter === "Bekleyen") {
      return patient.status === "Sırada" || patient.status === "Devam Ediyor";
    } else if (filter === "Tamamlanan") {
      return (
        patient.status === "Tamamlandı" || patient.status === "Muayene İptal"
      );
    } else {
      return true;
    }
  });

  return (
    <div className="relative">
      <div className="flex md:bg-[#E8E7E6] bg-[#fbfbfb] md:w-fit w-full px-1 md:rounded-lg rounded-t-lg outline outline-1 outline-[#DCDCDC] h-9 md:mb-2">
        <ToggleGroup
          className="w-full justify-between md:w-fit"
          type="single"
          defaultValue="waiting"
        >
          <ToggleGroupItem
            value="waiting"
            aria-label="Toggle waiting"
            onClick={() => setFilter("Bekleyen")}
            defaultChecked
          >
            Bekleyen
          </ToggleGroupItem>
          <ToggleGroupItem
            value="completed"
            aria-label="Toggle completed"
            onClick={() => setFilter("Tamamlanan")}
          >
            Tamamlanan
          </ToggleGroupItem>
          <ToggleGroupItem
            value="all"
            aria-label="Toggle all"
            onClick={() => setFilter("Tümü")}
          >
            Tümü
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {/* <div className="bg-gradient-to-t bg-white pointer-events-none from-[#FBFBFB] to-[#FBFBFB00] rounded-lg  absolute bottom-0 left-0 w-full h-12 z-10"></div> */}
      <div className="overflow-y-scroll md:rounded-lg rounded-b-lg outline outline-[#DCDCDC] outline-1 md:outline-none h-[30rem] grid gap-3 w-full md:p-[1px] p-3 bg-white hide-scrollbar">
        {filteredData.map((patient, index) => (
          <div
            key={index}
            className="rounded-lg bg-white outline outline-[#DCDCDC] outline-1 relative"
          >
            <div className="absolute bottom-6 right-3 text-[11rem] leading-none opacity-5 pointer-events-none font-extrabold">
              {patient.no}
            </div>
            <div
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-2/4 w-1 pointer-events-none ${statusLineBGClasses[patient.status]}`}
            ></div>
            <div
              className={`flex relative justify-between items-center outline outline-[#DCDCDC] mb-2 outline-1 rounded-t-lg px-2 py-1 ${
                patient.status === "Muayene İptal"
                  ? "bg-gradient-to-r from-[#F2505020] to-[#F2505000]"
                  : patient.status === "Devam Ediyor"
                    ? "bg-gradient-to-r from-[#E2FFE2] to-[#E2FFE200]"
                    : patient.status == "Sırada"
                      ? "bg-gradient-to-r from-[#FFF7EF] to-[#FFF7EF00]"
                      : patient.status == "Tamamlandı"
                        ? "bg-gradient-to-r from-[#EFF3FF] to-[#EFF3FF00]"
                        : "white"
              }`}
            >
              <h2 className="text-lg font-bold text-gray-800">
                No {patient.no}
              </h2>
              <p
                className={`w-fit text-xs px-1.5 rounded-full outline outline-2 font-medium ${statusClasses[patient.status]}`}
              >
                {patient.status}
              </p>
            </div>
            <table className="w-full">
              <tbody>
                <tr className="hover:bg-neutral-100">
                  <td width={125} className="pl-3 text-gray-600">
                    Ad Soyad
                  </td>
                  <td align="right" className="font-medium pr-2 text-gray-800 ">
                    {patient.name}
                  </td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td width={125} className="pl-3 text-gray-600">
                    Yaş
                  </td>
                  <td
                    align="right"
                    className="font-medium  pr-2 text-gray-800 "
                  >
                    {patient.age}
                  </td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td width={125} className="pl-3 text-gray-600">
                    Cinsiyet
                  </td>
                  <td
                    align="right"
                    className="font-medium  pr-2 text-gray-800 "
                  >
                    {patient.gender}
                  </td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td width={125} className="pl-3 text-gray-600">
                    TCKN
                  </td>
                  <td
                    align="right"
                    className="font-medium  pr-2 text-gray-800 "
                  >
                    {patient.tckn}
                  </td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td width={125} className="pl-3 text-gray-600">
                    Randevu Tarihi
                  </td>
                  <td
                    align="right"
                    className="font-medium  pr-2 text-gray-800 "
                  >
                    {patient.regDate}
                  </td>
                </tr>
                <tr className="hover:bg-neutral-100">
                  <td width={125} className="pl-3 text-gray-600">
                    Randevu Saati
                  </td>
                  <td align="right" className="font-medium  pr-2 text-gray-800">
                    {patient.regTime}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 flex p-1.5 gap-x-2">
              <button className="flex flex-1 justify-center gap-1 text-sm items-center bg-[#F5F5F5] outline-[#DCDCDC] outline-1 outline text-[#222126] px-2 py-1 rounded hover:bg-[#E5E5E5] active:bg-[#D5D5D5]">
                <Image
                  src="/icons/patient-call.svg"
                  width={18}
                  height={18}
                  alt="call"
                />
                <p>Hastayi Çağır</p>
              </button>
              <button className="flex flex-1 justify-center gap-1 text-sm items-center bg-[#F5F5F5] outline-[#DCDCDC] outline-1 outline text-[#222126] px-2 py-1 rounded hover:bg-[#E5E5E5] active:bg-[#D5D5D5]">
                <Image
                  src="/icons/patient-info.svg"
                  width={18}
                  height={18}
                  alt="info"
                />
                <p>Hasta Bilgileri</p>
              </button>
            </div>
          </div>
        ))}
        {/* <table className="w-full overflow-y-scroll bg-[#FBFBFB] relative">
          <thead className="sticky top-0 rounded-t-lg outline outline-1 outline-[#DCDCDC]">

            <tr className="text-[#656565] text-sm text-left">
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">No</th>
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">Ad</th>
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">TCKN</th>
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">Yaş</th>
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">Cinsiyet</th>
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">R. Tarihi</th>
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">R. Saati</th>
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">Durum</th>
              <th className="py-2 px-4 bg-[#FBFBFB] outline outline-1 outline-[#DCDCDC]">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-lg">
            {filteredData.map((patient, index) => (
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
                  <button className="flex gap-1 text-sm items-center bg-[#F5F5F5] outline-[#DCDCDC] outline-1 outline text-[#222126] px-2 py-1 rounded hover:bg-[#E5E5E5] active:bg-[#D5D5D5]">
                    <Image src="/icons/patient-call.svg" width={18} height={18} alt="call" />
                    <p>Hastayi Çağır</p>
                  </button>
                  <button className="flex gap-1 text-sm items-center bg-[#F5F5F5] outline-[#DCDCDC] outline-1 outline text-[#222126] px-2 py-1 rounded hover:bg-[#E5E5E5] active:bg-[#D5D5D5]">
                    <Image src="/icons/patient-info.svg" width={18} height={18} alt="info" />
                    <p>Hasta Bilgileri</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default PatientList;
