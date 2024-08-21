import React from "react";
import {
    AiOutlineGithub,
    AiFillLinkedin,
    AiOutlineMedium,
} from "react-icons/ai";
import { motion } from "framer-motion";

const container = (delay, x) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 1,
        },
    },
});

const Hero = () => {
    return (
        <div
            className="flex flex-col-reverse md:flex-row mx-auto w-[80%] justify-center pt-20"
            id="about"
        >
            <motion.div
                variants={container(0, -100)}
                initial="hidden"
                animate="visible"
                className=" rounded-full flex justify-center md:place-items-end"
            >
                <img
                    src="src\assets\hero.jpg"
                    alt=""
                    className=" h-[300px] md:h-[300px] lg:h-[350px] m-5 rounded-3xl "
                />
            </motion.div>
            <div className="flex flex-col text-center md:w-3/5 ">
                <div className="mx-auto">
                    <motion.h4 variants={container(0, 100)}
                        initial="hidden"
                        animate="visible" className="font-mono text-l lg:text-2xl mt-20">Hi..! I'm</motion.h4>
                    <motion.h1 variants={container(0.8,100)}
                initial="hidden"
                animate="visible" className="font-serif text-4xl lg:text-5xl mb-5">
                        Batheesha Dilmeen
                    </motion.h1>
                    <motion.h3 variants={container(0.5, 100)}
                        initial="hidden"
                        animate="visible" className="font-serif text-xl lg:text-2xl mb-8">
                        Fullstack Developer
                    </motion.h3>
                    <motion.p variants={container(0.6,100)}
                initial="hidden"
                animate="visible" className="font-mono lg:w-[500px] mx-auto leading-7">
                        I am a passionate and driven full stack developer with a keen
                        interest in building seamless web applications. Join me down below.
                        Let's get cracking...!
                    </motion.p>
                </div>
                <motion.div variants={container(0.7,100)}
                initial="hidden"
                animate="visible" className="text-4xl flex justify-center gap-10 p-10">
                    <a
                        href="https://github.com/Batheesha222"
                        className=" hover:text-purple-500 hover:scale-110 transition-transform duration-300"
                    >
                        <AiOutlineGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/batheesha-dilmeen-ilankoon-273417247/"
                        className=" hover:text-purple-500 hover:scale-110 transition-transform duration-300"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href="https://medium.com/@batheesha.dilmeen.ugc"
                        className=" hover:text-purple-500 hover:scale-110 transition-transform duration-300"
                    >
                        <AiOutlineMedium />
                    </a>
                </motion.div> 
            </div>
        </div>
    );
};

export default Hero;
