import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMedium } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='h-[120px] bg-violet-500 text-center '>
        <p className='text-l p-5 md:text-xl md:p-5'>@2024 | Batheesha Dilmeen | Alright reserved</p>
        <div className="text-4xl flex justify-center gap-10">
        <a href="https://github.com/Batheesha222" className=' hover:text-white hover:scale-110 transition-transform duration-300'><AiOutlineGithub /></a>
                    <a href="https://www.linkedin.com/in/batheesha-dilmeen-ilankoon-273417247/" className=' hover:text-white hover:scale-110 transition-transform duration-300' ><AiFillLinkedin /></a>
                    <a href="https://medium.com/@batheesha.dilmeen.ugc" className=' hover:text-white hover:scale-110 transition-transform duration-300' ><AiOutlineMedium /></a>
                </div>
    </div>
  )
}

export default Footer