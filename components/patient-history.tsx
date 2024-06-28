"use client";
import { history, historyType, historyItem, details } from "@/patient-data";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PatientHistory = () => {
  return (
    <div className="flex flex-col w-full pb-2">
      <Accordion key="value1" type="single" collapsible defaultValue="0001">
        {history.map((item: historyItem) => (
          <>
            <AccordionItem
              key={item.details.result}
              value={item.id}
              className="w-full"
            >
              <AccordionTrigger>
                <h3 className="text-xs text-[#222126] font-medium ">
                  {item.date} / {item.department}
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-3">
                  <div className="flex lg:flex-row flex-col gap-10 justify-between  px-3 py-2 outline outline-1 outline-[#F8F8F7]  rounded-b-lg">
                    <div className="flex-col gap-3 flex min-w-48">
                      <div>
                        <p className="text-xs text-[#8C8C8C] uppercase font-medium">
                          Tarih / Saat
                        </p>
                        <p className="text-sm text-[#222126]">
                          {item.details.appointment_date}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#8C8C8C] uppercase font-medium">
                          Muayene Türü
                        </p>
                        <p className="text-sm text-[#222126]">
                          {item.details.examination_type}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#8C8C8C] uppercase font-medium">
                          Yapılan Tetkikler
                        </p>
                        <p className="text-sm text-[#222126]">
                          {item.details.tests_conducted}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#8C8C8C] uppercase font-medium">
                          Yazılan İlaçlar
                        </p>
                        <p className="text-sm text-[#222126]">
                          Sumatriptan (100 mg)
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#8C8C8C] uppercase font-medium">
                          Sonuç
                        </p>
                        <p className="text-sm text-[#222126]">
                          {item.details.result}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-[#8C8C8C] uppercase font-medium">
                        Dosyalar
                      </p>
                      <div className="flex gap-2">
                        <Image
                          className="w-16 h-16 object-cover rounded-lg"
                          src="/photo1.jpg"
                          alt="Dosya 1"
                          width={60}
                          height={60}
                        />
                        <Image
                          className="w-16 h-16 object-cover rounded-lg"
                          src="/photo2.jpg"
                          alt="Dosya 2"
                          width={60}
                          height={60}
                        />
                        <Image
                          className="w-16 h-16 object-cover rounded-lg"
                          src="/photo3.jpg"
                          alt="Dosya 3"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <span className="text-xs text-[#8C8C8C] uppercase font-medium">
                          Not
                        </span>
                        <textarea
                          className="w-full text-sm h-20 px-3 py-2 border rounded-lg bg-[#F8F8F7] placeholder:text-xs font-medium max-h-28 min-h-11"
                          placeholder="Muayene hakkında notunuzu"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </div>
  );
};

export default PatientHistory;

{
  /* <div className='w-full min-w-[17rem] max-w-[36rem]'>
      <div className="p-2 bg-[#F1EFEE] rounded-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xs text-[#222126] font-medium">01.06.2024 / Nöroloji</h3>
          <span>
            <Image src="/icons/arrow.svg" width={16} height={16} alt="edit" />
          </span>
        </div>
      </div>
      <div className='px-3'>
      <div className="flex flex-row gap-10  px-3 py-2 outline outline-1 outline-[#F8F8F7]  rounded-b-lg">
          <div className="flex-col gap-3 flex min-w-48">
          <div>
            <p className="text-xs text-[#8C8C8C] uppercase font-medium">Tarih / Saat</p>
            <p className="text-sm text-[#222126]">01.06.2024</p>
          </div>
          <div>
            <p className="text-xs text-[#8C8C8C] uppercase font-medium">Muayene Türü</p>
            <p className="text-sm text-[#222126]">Nöroloji</p>
          </div>
          <div>
            <p className="text-xs text-[#8C8C8C] uppercase font-medium">Yapılan Tetkikler</p>
            <p className="text-sm text-[#222126]">Beyin Tomografisi</p>
          </div>
          <div>
            <p className="text-xs text-[#8C8C8C] uppercase font-medium">Yazılan İlaçlar</p>
            <p className="text-sm text-[#222126]">Sumatriptan (100 mg)</p>
          </div>
          <div>
            <p className="text-xs text-[#8C8C8C] uppercase font-medium">Sonuç</p>
            <p className="text-sm text-[#222126]">Migren Tanısı</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs text-[#8C8C8C] uppercase font-medium">Dosyalar</p>
          <div className="flex gap-2">
            <Image
              className="w-16 h-16 object-cover rounded-lg"
              src="/photo1.jpg"
              alt="Dosya 1"
              width={60}
              height={60}
            />
            <Image
              className="w-16 h-16 object-cover rounded-lg"
              src="/photo2.jpg"
              alt="Dosya 2"
              width={60}
              height={60}
            />
            <Image
              className="w-16 h-16 object-cover rounded-lg"
              src="/photo3.jpg"
              alt="Dosya 3"
              width={60}
              height={60}
            />
          </div>
          <div>
              <span className="text-xs text-[#8C8C8C] uppercase font-medium">Not</span>
            <textarea className="w-full text-sm h-20 px-3 py-2 border rounded-lg bg-[#F8F8F7] placeholder:text-xs font-medium max-h-28 min-h-11"
            placeholder="Muayene hakkında notunuzu" />
          </div>
        </div>

      </div>
      </div>
    </div> */
}
