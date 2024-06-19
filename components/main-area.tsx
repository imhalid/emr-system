import Navbar from "./navbar"
import NoticeBoard from "./notice-board"
import PatientInfo from "./patient-info"
import PatientList from "./patient-list"

const MainArea = () => {
  return (
    <div id="main-area" className="bg-[#F1EFEE] w-full">
      <Navbar />
      <div className="bg-[#F1EFEE] p-4 max-w-7xl mx-auto flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <PatientInfo />
          <NoticeBoard />
        </div>
        <PatientList />
      </div>
    </div>
  )
}

export default MainArea