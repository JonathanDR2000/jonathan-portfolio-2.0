import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
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
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          About
        </h3>
        <motion.img 
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
        
        src='./Jonathan2.png'
        className='-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 mt-4 rounded-full object-cover 
        md:rounded-lg md:w-80 md:h-95 ms: xl:h-[700px]'
        alt=''
        />
        <div className='space-y-10 px-10 md-px-10'>
            <h4 className='text-4xl font-semibold'>
                <span className='underline decoration-[#F7AB0A]/50'>Background</span>
            </h4>
            <p className='text-sm'>I consider myself as a hardworking, reliable and enthusiastic 
            towards creating multimedia content in either of its forms.
             I am into 3D modelling and videogames development, besides that, I am deeply interested in graphic design, visual identity and VFX. 
            Furthermore, I am studying Japanese and German in order to expand the lenguages that I already know.
            I have studied Japanese in Espai Daruma and currently I am learning on my own.
             Nowadays is paramount to expand your knowledge towards differents lenguages, also I find lenguages absolutely riveting</p>
        </div>
       
        
    </motion.div>
  )
}