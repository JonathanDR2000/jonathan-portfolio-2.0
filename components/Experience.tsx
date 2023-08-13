import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
    initial={{
        x: -200,
        opacity: 0,
    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{
        x: 0,
        opacity: 1,
    }}
    viewport={{
        once: true,
    }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full 
    px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl'>
        Education
        </h3>
        <div className=''>
       {/* w-full flex space-x-5  p-10 snap-x snap-mandatory  items-center overflow-x-scroll
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] */}

            <ExperienceCard/>
            {/*<ExperienceCard/>
            <ExperienceCard/>*/}


        </div>
        
    </motion.div>
  )
}