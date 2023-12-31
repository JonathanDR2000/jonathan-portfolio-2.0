import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
   <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[550px] 
    sm:h-[700px]
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
     <motion.img
     initial={{
        y: -100,
        opacity: 0,
    }}
    transition={{ duration: 1.2,}}
    whileInView={{y: 0, opacity: 1,}}
    viewport={{ once: true,}}
     className='w-20 h-20 sm:w-32 sm:h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center'
     src='/logo-upc-universidad-politecnica-cataluna.jpg'
     />
     <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'> UPC</h4>
        <p className='font-bold text-2xl mt-1'>Multimedia</p>
        <div className='flex sace-x-2 my-2'>
          {/*<img
          className='h-10 w-10 rounded-full'
          src='/logo-upc-universidad-politecnica-cataluna.jpg'
          alt=''
          />
          <img
          className='h-10 w-10 rounded-full'
          src='/logo-upc-universidad-politecnica-cataluna.jpg'
          alt=''
          />
          <img
          className='h-10 w-10 rounded-full'
          src='/logo-upc-universidad-politecnica-cataluna.jpg'
          alt=''
          />
  */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Started: 2018  -  Ended: 2022</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Learned to develop websites</li>
            <li>Made several 3D models</li>
            <li>Animate charactes and objects</li>
            <li>Skilled at several softwares</li>
          
        </ul>
     </div>
   </article>
  )
}