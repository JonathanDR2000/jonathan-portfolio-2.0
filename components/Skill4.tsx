import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export default function Skill4({ directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{duration:1}}
        whileInView={{opacity: 1, x: 0}}
        src='/logo-mysql-mysql-and-moodle-elearningworld-5.png'
        className='rounded-full border border-gray-500 object-cover
         w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter 
        group-hover:grayscale transition
        duration-300 ease-in-out'
        alt=''
        />
        <div className='absolute opacity-0 group-hover:opacity-80 
        transition duration-300 ease-in-out
        group-hover:bg-white w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    30%
                </p>
            </div>
        </div>
        
    </div>
    
  )
}