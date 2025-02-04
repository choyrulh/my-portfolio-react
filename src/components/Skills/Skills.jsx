import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import html from "../../assets/logo/html5.svg";
import css from "../../assets/logo/css3.svg";
import js from "../../assets/logo/javascript.svg";
import bootstrap from "../../assets/logo/bootstrap.svg";
import tailwindcss from "../../assets/logo/tailwind.svg";
import react from "../../assets/logo/react.svg";
import framer from "../../assets/logo/framer.svg";
import axios from "../../assets/logo/axios.svg";
import nodejs from "../../assets/logo/nodejs.svg";
import redux from "../../assets/logo/redux.svg";
import tanstack from "../../assets/logo/tanstack.svg";
import nextjs from "../../assets/logo/nextjs.svg";
import ts from "../../assets/logo/ts.svg";
import express from "../../assets/logo/expressJS.svg";
import jupyter from "../../assets/logo/jupyter.svg";
import mongo from "../../assets/logo/mongoDB.svg";
import git from "../../assets/logo/git.svg";
import router from "../../assets/logo/react-router.svg";
import SkillsGrid from "./Icon";

const logos = [
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: js },
  { name: "Node.js", src: nodejs },
  { name: "Bootstrap", src: bootstrap },
  { name: "Tailwind CSS", src: tailwindcss },
];
const logos1 = [
  { name: "React", src: react },
  { name: "Redux", src: redux },
  { name: "Tanstack", src: tanstack },
  { name: "React Router", src: router },
  { name: "TypeScript", src: ts },
  { name: "Framer", src: framer },
];
const logos2 = [
  { name: "Axios", src: axios },
  { name: "Next.js", src: nextjs },
  { name: "ExpressJS", src: express },
  { name: "Jupyter", src: jupyter },
  { name: "MongoDB", src: mongo },
  { name: "Git", src: git },
];

const Skills = () => {
  const [text] = useTypewriter({
    words: [
      "Technical Skills",
      "Core Expertise",
      "Key Technologies",
      "Professional Tools",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
  });

  return (
    <section
      id="skills"
      className="relative py-20  dark:from-gray-900/50 dark:to-gray-800/50 overflow-hidden"
    >
      <div className="2xl:container 2xl:mx-auto lg:px-20 px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent inline-block"
          >
            {text}
            <Cursor cursorColor="#3adbff" />
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I&apos;ve mastered and tools I use daily to create
            amazing digital experiences
          </p>
        </div>

        <SkillsGrid logos={[...logos, ...logos1, ...logos2]} />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};
export default Skills;
