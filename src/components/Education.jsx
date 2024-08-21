import React from 'react'
import { motion } from 'framer-motion'


const Education = () => {
    return (
        <div className="pt-[100px]" id='education'>
            <h1 className='font-serif text-4xl lg:text-5xl flex justify-center'><span className='underline'>Education</span>🎓</h1>
            <div className='flex flex-col md:flex-row md:flex-warp justify-center gap-5 mx-auto my-10 w-[80%]'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:1, delay:.5}} className="flex justify-center p-10">
                    <img src="/education.png" alt="Education" className='h-[200px] lg:h-[300px]' />
                </motion.div>
                <div className="education ">
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration:1, delay:.7}} className="University font-medium text-l lg:text-xl border border-purple-600 bg-purple-400 rounded-lg p-5 my-5 mx-auto w-[80%] md:w-[100%]">
                        <h3 className='font-bold'>University of Kelaniya</h3>
                        <p>GPA - 3.27</p>
                        <p>2021 - 2025</p>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration:1, delay:.9}} className="College font-medium lg:text-xl border border-purple-600 bg-purple-400 rounded-lg p-5 my-5 mx-auto w-[80%] md:w-[100%]">
                        <h3 className='font-bold'>Kurunegala Maliyadeva College</h3>
                        <p>GCE Advanced Level - physical science(2A's 1B) </p>
                        <p>2016 - 2019</p>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Education