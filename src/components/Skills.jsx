import React from 'react'
import { motion } from 'framer-motion'


const Skills = () => {
  return (
    <div className='flex flex-col items-start mx-auto my-5 w-[70%] md:w-[60%] pt-[100px]' id='skills'>
      <h1 className='font-serif text-xl lg:text-2xl'>Skills :</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 1, delay: 1 }} className="skills flex flex-wrap gap-3 my-5">
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Java</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Javascript</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>HTML</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>CSS</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>PHP</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>C</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>React js</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Node js</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Express js</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Spring boot</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Mysql</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Mongodb</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Linux</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Git</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Github</span>
        <span className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Postman</span>

      </motion.div>

    </div>
  )
}

export default Skills