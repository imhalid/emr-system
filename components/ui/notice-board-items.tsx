'use client'
import { NoticeBoardData, Notice, NoticeBoardType } from "@/notice-board-data"
import Image from "next/image"
const NoticeBoardItems = () => {
  return (
    <div className="w-full max-w-96 relative">
      {NoticeBoardData.map((data) => (
        <Items key={data.id} data={data} />
      ))}
    </div>
  )
}

export default NoticeBoardItems

const Items = ({ data }: {data: Notice}) => {
  return (
    <div>
      <div className={`${data.status}  relative px-2 py-1 rounded-md text-white overflow-hidden font-medium ${data.status === 'standard' ? 'text-[#4c4c4c]' : 'text-white'}`}>
        <div className={`notice notice-${data.status}`}></div>
        <div className="relative z-10 flex gap-1 ">
          <Image src={`./icons/${data.status}.svg`} width={24} height={24} alt="notif" />
          <p>{data.date}</p>
        </div>
      </div>
      <NoticeContent content={data} />
    </div>
  )
}


const NoticeContent = ({ content }: {content: Notice}) => {
  return (
    <div className={`p-3 pt-1 flex flex-col gap-1 relative notice-line-${content.status}`}>
      <p className="font-medium">{content.title}</p>
      <p className="text-sm">{content.content}</p>
    </div>
  )
}