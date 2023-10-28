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
           <Link href='https://www.youtube.com/watch?v=y4l3YFxsnUw'>
                  <motion.img className='xl:w-[1440px] xl:h-[810px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Portfolio_animation_10014.jpg'
                    alt=''
                  />
                  </Link>
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Project 1 out of 16:
                      </span> Animation
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Modeled in Zbrush, rogged in Maya and haired using Xgen.
                    </p>
                    
                   </div>
                   
                </div>
           <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
           <Link href='https://www.youtube.com/watch?v=j75oEUyze6M'>
                  <motion.img className='xl:w-[1440px] xl:h-[810px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Portfolio_animation_10037.jpg'
                    alt=''
                  />
                  </Link>
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                          Project 2 out of 16:
                      </span> Lip Syc
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Modeled in Zbrush, after
that exported textured in Substance Painter and imported into maya in order to rigged it
                    </p>
                    
                   </div>
                   
                </div>

           <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[684px] xl:h-[782px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/personaje.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl  font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 3 out of 16:
                      </span> Zbrush Model
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
                
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[803px] xl:h-[446px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 4 out of 16:
                      </span> 3D models and lightning
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Lighted and modeled in
Maya.
Made with Arnolds lights

                    </p>
                    
                   </div>
                   
                </div>

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[829px] xl:h-[550px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura1.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 5 out of 16:
                      </span> Inserting 3D model inot an image
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Made in 3DsMax (model not mine)

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[556px] xl:h-[506px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura2.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 6 out of 16:
                      </span> Character modelling
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
                  <motion.img className='xl:w-[435px] xl:h-[565px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura3.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 7 out of 16:
                      </span> Cokes 3D model
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Made in 3DS Max and using VRay

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[400px] xl:h-[256px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura4.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 8 out of 16:
                      </span> Bushs model
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    The base was modeled in Maya and
then the leafs has been implemented in Substance Designer.

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[1160px] xl:h-[641px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura6.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 9 out of 16:
                      </span> Nebula VFX model
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Modeled in Maya and painted in
Substance Painter, then it was implemented in a game

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                <Link href='https://vimeo.com/403338365'>
                  <motion.img className='xl:w-[300px] xl:h-[332px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura7.png'
                    alt=''
                  />
                  </Link>
                  
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 10 out of 16:
                      </span> BB8 animation
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Animation of BB8 made in 3Ds Max
for a collage work. Moivement of
the character plus lights.

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                <Link href='https://www.youtube.com/watch?v=OAHvTRsYtuo'>
                  <motion.img className='xl:w-[592px] xl:h-[338px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/juego.png'
                    alt=''
                  />
                  </Link>
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 11 out of 16:
                      </span> Game made in unity
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                      Videogame made for collage final project. Models from Maya and developed in Unity

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[1016px] xl:h-[427px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura9.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 12 out of 16:
                      </span> React js filter
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Filters web made in React Js

                    </p>
                    
                   </div>
                   
                </div>
                
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                <Link href='https://jonathandr2000.github.io/TimBurton/'>
                  <motion.img className='xl:w-[1280px] xl:h-[585px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/disney.png'
                    alt='disney clone'
                  />
                  </Link>
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 13 out of 16:
                      </span> Tim Burtons Website
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Tim Burton shop made in HTML.

                    </p>
                    
                   </div>
                   
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                <Link href='https://disney-clone3.vercel.app/'>
                  <motion.img className='xl:w-[1280px] xl:h-[585px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/tb.png'
                    alt='disney clone'
                  />
                  </Link>
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 14 out of 16:
                      </span> Disney + clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Disney + website made in React Js

                    </p>
                    
                   </div>
                   
                </div>
                
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                  <motion.img className='xl:w-[890px] xl:h-[510px]'
                   initial={{ y: -300, opacity: 0,}}
                   transition={{duration: 1.2,}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once:true}}
                    src='/Captura10.png'
                    alt=''
                  />
                  <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 15 out of 16:
                      </span> Ad proposal design
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    Add proposal for Nike made in Photoshop

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
                    <h4 className='sm:text-4xl text-2xl font-semibold text-center'>
                      <span className='underline decoration-[#F7AB0A]/50'>
                      Project 16 out of 16:
                      </span> Tim Burtons website design
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                      Design made in Photoshop.

                    </p>
                    
                   </div>
                   
                </div>
           
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
    </motion.div>
  )
}