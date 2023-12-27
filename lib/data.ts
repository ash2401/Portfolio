import React from "react";
import { CgLaptop, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
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
    location: "Edinburgh, UK",
    description:
      "Working full time as a Mobile Developer developing hybrid mobile finance related app for Computershare.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Web Development Intern",
    location: "Bangalore, India",
    description:
      "As a full-stack development intern, I integrated React JS, SQL, and RESTful APIs to craft dynamic web applications at Tekenlight Solutions Pvt.",
    icon: React.createElement(FaReact),
    date: "Aug 2021 - Nov 2021",
  },
  {
    title: "Trainee",
    location: "Lucknow, India",
    description:
      "Worked in the team responsible for delivering the Home Guards mobile app for government officials at National Informatics Centre.",
    icon: React.createElement(CgLaptop),
    date: "Jun 2021 — Aug 2021 ",
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