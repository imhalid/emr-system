'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimationControls, AnimatePresence, delay } from "framer-motion"
import { useState, useEffect } from "react"
import Seperator from './ui/seperator'

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState('Anasayfa');

  const [isOpen, setIsOpen] = useState(false)

  const containerControls = useAnimationControls()
  const svgControls = useAnimationControls()

  useEffect(() => {
    const mainArea = document.querySelector('#main-area') as HTMLElement;
    if (isOpen) {
      containerControls.start("open")
      svgControls.start("open")
      mainArea.style.marginLeft = '16rem'
    } else {
      containerControls.start("close")
      svgControls.start("close")
      mainArea.style.marginLeft = '4.1rem'
    }
  }, [containerControls, isOpen, svgControls])

  const handleOpenClose = () => {
    setIsOpen(!isOpen)
  }

  const containerVariants = {
    close: {
      width: "4.1rem",
      transition: {
        type: "ease-in-out",
        damping: 15,
        duration: 0.1,
      },
    },
    open: {
      width: "16rem",
      transition: {
        type: "ease-in-out",
        damping: 15,
        duration: 0.1,
      },
    },
  }

  const clipmaskVariantsLogo = {
    close: {
      clipPath: "inset(0 75% 0 0)",
      transition: {
        type: "ease-in-out",
        damping: 15,
        duration: 0.1,
      },
    },
    open: {
      clipPath: "inset(0 0 0 0)",
      transition: {
        type: "ease-in-out",
        damping: 15,
        duration: 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="h-full flex flex-col p-4 left-0 fixed bg-[#222126] text-[#ADADAD]">
      <Link href='/' className='relative h-8 p-1'>
        <motion.div
          variants={clipmaskVariantsLogo}
          animate={svgControls}
          initial='close'
          className='w-32'
        >
          <Image className='' src='./logo.svg' width={126} height={24} alt='logo' />
        </motion.div>

      </Link>
      <Seperator />
      <div
        className='flex flex-col mt-2 h-full'
      >
        <div className='gap-2 flex flex-col'>
          {MenuData.slice(0, -2).map((item, index) => (
            <button
              key={index}
              className={`flex items-center cursor-pointer rounded-[4px] p-1 gap-2 ${selectedMenu === item.name ? 'bg-[#2F3138] text-[#E0E1E8] outline outline-[#36373E]' : ''}`}
              onClick={() => setSelectedMenu(item.name)}
            >
              <Image
                className={`${selectedMenu === item.name ? 'glow-menu-logo' : ''}`}
                src={item.icon} width={24} height={24} alt={item.name} />
              <span
                className='text-nowrap text-inherit font-poppins overflow-hidden whitespace-nowrap tracking-wide'>{item.name}
              </span>
            </button>
          ))}
        </div>
        <div className='mt-auto gap-2 flex flex-col'>
          {MenuData.slice(-2).map((item, index) => (
            <button
              key={index}
              className={`flex items-center cursor-pointer rounded-[4px] p-1 gap-2 ${selectedMenu === item.name ? 'bg-[#2F3138] text-[#E0E1E8] outline outline-[#36373E]' : ''}`}
              onClick={() => setSelectedMenu(item.name)}
            >
              <Image className={`${selectedMenu === item.name ? 'glow-menu-logo' : ''}`} src={item.icon} width={24} height={24} alt={item.name} />
              <span className='text-nowrap text-inherit font-poppins overflow-hidden whitespace-nowrap tracking-wide'>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
      <button
        className={`absolute bg-[#222126] p-2 rounded-lg -right-2 text-nowrap top-1/2 transform -translate-y-1/2 ${isOpen ? 'cursor-w-resize' : 'cursor-e-resize'}`}
        onClick={handleOpenClose}
      >
        <Image
          className='transition-transform duration-500 ease-in-out'
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          src='./menu-toogle.svg' width={6} height={11} alt='arrow' />
      </button>
    </motion.div>
  )
}
export default Menu

const MenuData = [
  {
    name: 'Anasayfa',
    icon: './icons/home.svg',
  },
  {
    name: 'Geçmiş',
    icon: './icons/history.svg',
  },
  {
    name: 'Randevular',
    icon: './icons/appointment.svg',
  },
  {
    name: 'İş Listesi',
    icon: './icons/job-list.svg',
  },
  {
    name: 'Ayarlar',
    icon: './icons/setting.svg',
  },
  {
    name: 'Yardım',
    icon: './icons/help.svg',
  },
]