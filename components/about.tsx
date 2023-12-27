"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';


export default function About() {

    const { ref } = useSectionInView("About", 0.75);


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to further pursue my
        passion for programming. I enrolled in multiplie courses online and did internships to learn about{" "}
        <span className="font-medium">front end development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Angular, React, Ionic, React Native and SQL.
        </span>
        I am familiar with TypeScript and JavaScript. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and going out to play sports. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and pschology</span>. I am also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}
