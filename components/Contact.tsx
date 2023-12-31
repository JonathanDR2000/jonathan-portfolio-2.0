import React from 'react'
import { motion } from 'framer-motion'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};
type Props = {}

export default function Contact({}: Props) {
  const {register, 
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jonathandr2000@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message}
    (${formData.email})`;
  };
  return (
    <motion.div 
    initial={{ opacity: 0,}}
    transition={{duration: 1.5,}}
    whileInView={{ opacity: 1,}}
    className='h-screen relative flex flex-col text-center md:flex-row md:text-left
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10 '>
          <h4 className='pb-20'></h4>
            <h4 className='text-xl sm:text-4xl font-semibold text-center sm:pt-0 padding-top: 15px; '>
                If you are interested. {''}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
             {/*<div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] sm:h-7 sm:w-7 h-5 w-5 animate-pulse'/>
                <p className='text-xl sm:text-2xl'>+ 666 666 666</p>
             </div>
             */}
             <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse'/>
                <p className='text-xl sm:text-2xl'>jonathandr2000@gmail.com</p>
             </div>
             <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] sm:h-7 sm:w-7 h-5 w-5 animate-pulse'/>
                <p className='text-xl sm:text-2xl'>Barcelona, Spain</p>
             </div>
           </div>
           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 
           w-[375px] sm:w-fit mx-auto'>
             <div className='flex space-x-2'>
                <input {...register('name')}
                placeholder='Name' className='contactInput w-[183px] sm:w-fit' type='text'/> 
                <input {...register('email')}
                placeholder='Email' className='contactInput  w-[183px] sm:w-fit' type='email'/>
             </div>

             <input {...register('subject')} placeholder='Subject' 
             className='contactInput' type='text'/>

             <textarea  {...register('message')} placeholder='Message' 
             className='contactInput'></textarea>
             <button 
             type='submit'
             className='bg-[#F7AB0A] py-5 px-10 
             rounded-md text-black font-bold text-lg '>Submit
             </button>
           </form>
        </div>
    </motion.div>
  )
}