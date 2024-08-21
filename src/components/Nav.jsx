import React from 'react'
import { AiOutlineClose } from "react-icons/ai";


const Nav = ({isOpen,setIsOpen}) => {

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div className={`flex flex-col border border-red-400 w-[200px] h-[400px] bg-purple-500 fixed top-20 right-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div onClick={handleClose} className="close p-3 w-[50px] hover:text-white hover:scale-110 transition-transform duration-300 block relative -right-40">
        <AiOutlineClose />
      </div>

      <a href="#about" onClick={handleClose} className="mr-2 p-3 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 block border-t">About</a>
      <a href="#skills" onClick={handleClose} className="mr-2 p-3 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 block border-t">Skills</a>
      <a href="#education" onClick={handleClose} className="mr-2 p-3 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 block border-t">Education</a>
      <a href="#projects" onClick={handleClose} className="mr-2 p-3 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 block border-t">Projects</a>
      <a href="#contact" onClick={handleClose} className="mr-2 p-3 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 block border-t">ContactMe</a>
    </div>
  )
}

export default Nav