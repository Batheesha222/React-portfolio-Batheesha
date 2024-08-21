import React from 'react'
import { motion } from 'framer-motion'



const ContactMe = () => {
    return (
        <motion.div whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration:1, delay:.5}} className='' id='contact'>
            <h1 className='font-serif text-4xl lg:text-5xl flex justify-center' ><span className='underline'>ContactMe</span>🤙</h1>
            <div className="flex flex-col w-[85%] md:w-[70%] lg:w-[50%] border border-purple-500 bg-blue-300 rounded-xl m-auto my-10 p-5">
                <p className='font-medium text-xl lg:text-2xl text-center p-2 md:p-5 '><span className='font-bold'>Email</span>📧 : batheesha.dilmeen@gmail.com</p>
                <p className='font-medium text-xl lg:text-2xl text-center p-2 md:p-5 '><span className='font-bold'>Phone No.</span>📞 : +94773968486</p>
            </div>

        </motion.div>
    )
}

export default ContactMe