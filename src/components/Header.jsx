import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import Nav from "./Nav";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleDownload = () =>{
        window.open("/CV-Batheesha_Dilmeen.pdf","_blank")
    }
    return (
        <header className="">
            <div className="font-mono p-5 my-5 flex justify-between fixed -top-5 left-0 right-0 z-50 bg-purple-400">
                <h1 className=" p-2 "><img src="src\assets\logo.png" alt="" className=" w-[120px] md:w-[180px] " /></h1>
                <nav className="flex items-center">
                    <a href="#about" className="mr-2 p-1 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 hidden md:block">About</a>
                    <a href="#skills" className="mr-2 p-1 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 hidden md:block">Skills</a>
                    <a href="#education" className="mr-2 p-1 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 hidden md:block">Education</a>
                    <a href="#projects" className="mr-2 p-1 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 hidden md:block">Projects</a>
                    <a href="#contact" className="mr-2 p-1 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 hidden md:block">ContactMe</a>
                    <button onClick={handleDownload} className="bg-blue-300 rounded-md p-1 hover:bg-blue-400 hover:text-white ">Download CV</button>
                    <button onClick={handleToggle} className="mr-2 p-3 hover:font-bold hover:text-white hover:scale-110 transition-transform duration-300 block md:hidden">
                        {isOpen ? <AiOutlineClose /> : <AiOutlineAlignLeft />}
                        
                    </button>
                </nav>
            </div>
            {isOpen && (
                <div className="">
                    < Nav isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            )}
        </header>
    );
};

export default Header;
