import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdevImg.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mobile Developer",
    location: "Edinburhg, UK",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PathMaker (Dissertation Project)",
    description: "Guides users to discover historical sites and go on witch hunts in foreign countries they are travelling to, connecting with like minded people through it.",
    tags: ["React Native", "Google Maps APIs", "Tailwind", "Firebase", "Expo"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Earth Defenders Game",
    description:
      "Inspired from Space Invaders, this game gives players intriguing enemy levels along with arcade vibes.",
    tags: ["Unity", "C#", "AI state machine", "Performance and Memory Use", "3D Math"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Labyrinth",
    description:
      "2D game developed as a group project based on the classic board game Labyrinth.",
    tags: ["Java", "JavaFX", "Pair Programming", "Game Design", "Concurrency"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Ionic",
  "React Native",
  "Git",
  "Tailwind",
  "Redux",
  "RxJS",
  "SQL",
  "Java",
  "Unity",
  "Spring",
  "Jest",
  "Agile",
  "Jenkins"
] as const;