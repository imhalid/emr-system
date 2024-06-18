import Navbar from "./navbar"
import NoticeBoard from "./notice-board"
import PatientInfo from "./patient-info"

const MainArea = () => {
  return (
    <div className="bg-[#F1EFEE] w-full">
      <Navbar />
      <div className="p-4">
        <div className="flex gap-4">
      <PatientInfo />
      <NoticeBoard />
        </div>
      </div>
    </div>
  )
}

export default MainArea