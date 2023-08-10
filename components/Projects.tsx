import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <motion.div 
    initial={{ opacity: 0,}}
    transition={{duration: 1.5,}}
    whileInView={{ opacity: 1,}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
        z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
           
           <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/personaje.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Modeled in Zbrush, after
that exported to Substance
painter to create the base
color, secular and roughness map.
Then imported into Maya
to do the hair with Xgen.

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center 
                flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img  className='xl:w-[700px] xl:h-[700px] sm:w-[600px] sm:h-[600px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/item.jpg'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 1 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                      aaa

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Lighted and modeled in
Maya.
Made with Arnolds lights

                    </p>
                    
                   </div>
                   
                </div>

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura1.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Made in 3DsMax (model not mine)

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura2.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Character modeled in
Zbrush. The character is
Cloud from Final Fantasy
VII game

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura3.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Made in 3DS Max and using VRay

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura4.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    The base was modeled in Maya and
then the leafs has been implemented in Substance Designer.

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura6.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Modeled in Maya and painted in
Substance Painter, then it was im
-
plemented in a game

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                <Link href='https://vimeo.com/403338365'>
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura7.png'
                    alt=''
                  />
                  </Link>
                  
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Animation of BB8 made in 3Ds Max
for a collage work. Moivement of
the character plus lights.

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura6.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    It has been
created in Houdini and also
have been added some
stars to create a better environment

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/juego.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                      aaa

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura8.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Filters web made in React Js

                    </p>
                    
                   </div>
                   
                </div>
                
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[900px] xl:h-[900px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura10.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study 2 of 5:
                      </span> UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Add proposal for Nike made in Photoshop

                    </p>
                    
                   </div>
                   
                </div>
           
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
    </motion.div>
  )
}