import React from 'react'
import { motion } from 'framer-motion'


const Projects = () => {
    return (
        <div id='projects' className='pt-[100px]'>
            <h1 className='font-serif text-4xl lg:text-5xl flex justify-center'><span className='underline'>Projects</span>⚒</h1>
            <div className="flex flex-col flex-wrap md:flex-row lg:flex-row gap-5 m-5 lg:[70%]">

                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:1, delay:.5}} className="projects border border-purple-950 m-10 rounded-lg w-[80%] max-w-[400px] mx-auto hover:scale-105 transition-transform duration-300">
                    <div className="project flex flex-col justify-center gap-5 m-auto my-5 w-[80%]">
                        <div className="project-details">
                            <h3 className='font-bold text-xl lg:text-2xl mb-5'>Blog-Hive</h3>
                            <p className='text-m lg:text-balance'>This project is a full-featured blog application built using React. It allows users to create, read, update, and delete blog posts. The application is designed to be user-friendly and responsive, providing a seamless experience across different devices.</p>
                            <p className='font-medium'>React js | Express js | Node js | Mongodb </p>
                            <p className='flex gap-3 py-3'><a href="https://github.com/Batheesha222/Blog-Hive" className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white hover:bg-purple-600 hover:scale-110 transition-transform duration-300'>FrontEnd</a> <a href="https://github.com/Batheesha222/BLOG-REST-API" className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white hover:bg-purple-600 hover:scale-110 transition-transform duration-300'>BackEnd</a></p>
                        </div>
                        <div className="flex justify-center ">
                            <img src="src/assets/blog-hive.jpg" alt="project1" className='w-[200px] lg:w-[300px]' />
                        </div>
                    </div>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:1, delay:.7}} className="projects border border-purple-950 m-10 rounded-lg w-[80%] max-w-[400px] mx-auto hover:scale-105 transition-transform duration-300">
                    <div className="project flex flex-col justify-center gap-5 m-auto my-5 w-[80%]">
                        <div className="project-details">
                            <h3 className='font-bold text-xl lg:text-2xl mb-5'>Todo app</h3>
                            <p className='text-m lg:text-balance'>The Todo App is a full-stack web application designed to help users manage their daily tasks efficiently. Built using Node.js, Express, and MongoDB, the app provides a seamless experience for creating, reading, updating, and deleting (CRUD) todo items.</p>
                            <p className='font-medium'>ejs | Express js | Node js | Mongodb </p>
                            <p className='flex gap-3 py-3'><a href="https://github.com/Batheesha222/todo-app" className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white hover:bg-purple-600 hover:scale-110 transition-transform duration-300'>Repo</a></p>
                        </div>
                        <div className="flex justify-center">
                            <img src="src/assets/todo.jpg" alt="project2" className='w-[200px] lg:w-[300px]' />
                        </div>
                    </div>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:1, delay:.9}} className="projects border border-purple-950 m-10 rounded-lg w-[80%] max-w-[400px] mx-auto hover:scale-105 transition-transform duration-300">
                    <div className="project flex flex-col justify-center gap-5 m-auto my-5 w-[80%]">
                        <div className="project-details">
                            <h3 className='font-bold text-xl lg:text-2xl mb-5'>User Management System</h3>
                            <p className='text-m lg:text-balance'>The User Management System is a full-stack web application designed to manage user data efficiently.The system is built using modern web technologies, ensuring a responsive and user-friendly experience</p>
                            <p className='font-medium'>React js | Java | Spring boot </p>
                            <p className='flex gap-3 py-3'><a href="https://github.com/Batheesha222/fullstack-frontend" className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white hover:bg-purple-600 hover:scale-110 transition-transform duration-300'>FrontEnd</a> <a href="https://github.com/Batheesha222/fullstack-backend" className='bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white hover:bg-purple-600 hover:scale-110 transition-transform duration-300'>BackEnd</a></p>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="src/assets/user_management_system.jpg" alt="project3" className='w-[200px] lg:w-[300px]' />
                        </div>
                    </div>
                </motion.div>
            </div>


        </div>
    )
}

export default Projects