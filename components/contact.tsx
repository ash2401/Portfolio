"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';


export default function Contact() {
    const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:akshatsrivastav7@gmail.com@gmail.com">
          akshatsrivastav7@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className='mt-10 flex flex-col'
        action={sendEmail}

            // if (error) {
            //     toast.error(error);
            //     return;
            // }

            // toast.success("Email sent seuccessfully");
        // }}
        >
        <input required 
        maxLength={500} className='h-14 px-4 rounded-lg borderBlack' type='email'
        placeholder='email'
        name='senderEmail' />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4'
        placeholder='Your message'
        required
        name='message'
        maxLength={500} />
        <button type="submit" className='group flex items-center justify-center h-[3rem] w-[8rem] gap-2 bg-gray-900 text-white rounded-full outline-none transition-all
        focus:scale-110 hover:scale-110
        hover:bg-gray-950
        active:scale-105'>Submit 
        <FaPaperPlane className='text-xs opacity-70 transition-all 
        group-hover:translate-x-1
        group-hover:translate-y-1'/>{" "}</button>
      </form>
         </motion.section>
  )
}
