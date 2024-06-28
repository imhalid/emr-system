import Image from "next/image";

const PatientProfile = () => {
  return (
    <div className=" min-w-64 max-w-72 md:sticky top-0">
      <div className="flex gap-2">
        <Image src="/patient-profile.jpg" width={90} height={90} alt="profile" quality={100} className="rounded-md" />
        <div className="flex flex-col gap-2 justify-between">
          <div className="gap-1 flex flex-col">
            <p className="text-xs text-[#B7B7B7] uppercase font-medium">Ad Soyad</p>
            <p className="text-sm text-[#222126]">Ömer Kılıç</p>
          </div>
          <div>
            <p className="text-xs text-[#B7B7B7] uppercase font-medium">TCKN</p>
            <p className="text-sm text-[#222126]">23456789012</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-5 md:flex-col md:flex-nowrap gap-1 mt-2 ">
        <div>
          <p className="text-xs text-[#B7B7B7] uppercase font-medium">Yaş</p>
          <p className="text-sm text-[#222126]">45</p>
        </div>
        <div>
          <p className="text-xs text-[#B7B7B7] uppercase font-medium">Kan Grubu</p>
          <p className="text-sm text-[#222126]">B+</p>
        </div>
        <div>
          <p className="text-xs text-[#B7B7B7] uppercase font-medium">Telefon</p>
          <p className="text-sm text-[#222126]">+90 551 123 4408</p>
        </div>
        <div className="h-[1px] w-full my-2 bg-[#F2F2F2]"></div>
        <div>
          <p className="text-xs text-[#B7B7B7] uppercase font-medium">En Son Muayene Tarihi</p>
          <p className="text-sm text-[#222126]">10.05.2024</p>
        </div>
        <div>
          <p className="text-xs text-[#B7B7B7] uppercase font-medium">Hastalık Şikayeti</p>
          <p className="text-sm text-[#222126]">Baş Dönmesi</p>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;