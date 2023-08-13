import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import Skill2 from './Skill2'
import Skill3 from './Skill3'
import Skill4 from './Skill4'
import Skill6 from './Skill6'
import Skill7 from './Skill7'
import Skill8 from './Skill8'
import Skill9 from './Skill9'
import Skill10 from './Skill10'
import Skill5 from './Skill5'
import Skill11 from './Skill11'
import Skill12 from './Skill12'
import Skill13 from './Skill13'
type Props = {}

export default function Skills({}: Props) {
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
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[800px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>  
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for currency proficiency
        </h3>
        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill2 />
            <Skill3 />
            <Skill4 />
            <Skill5 />
            <Skill6 />
            <Skill7/>
            <Skill8/>
            <Skill9 />
            <Skill10 />
            <Skill11 />
            <Skill12 />
            <Skill13/>
            
        </div>
    </motion.div>
  )
}