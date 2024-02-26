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
import { motion } from "framer-motion";

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

const Icon = () => {
  const filterHover = {
    rest: { filter: "brightness(0.5)" },
    hover: { filter: "brightness(1)", y: -10 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.ul
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
      >
        {logos.map((logo, index) => (
          <motion.li
            key={index}
            whileHover="hover"
            initial="rest"
            animate="rest"
            whileTap="hover"
            variants={filterHover}
            className="p-2 rounded-md shadow-md dark:shadow-black transition-transform duration-250 ease-in-out transform hover:shadow-lg"
          >
            <img className="w-20 h-20 mx-auto" src={logo.src} alt={logo.name} />
            <p className="mt-2 text-sm text-gray-700">{logo.name}</p>
          </motion.li>
        ))}
        {logos1.map((logo, index) => (
          <motion.li
            key={index}
            whileHover="hover"
            initial="rest"
            animate="rest"
            whileTap="hover"
            variants={filterHover}
            className="p-2 rounded-md shadow-md dark:shadow-black transition-transform duration-250 ease-in-out transform hover:shadow-lg"
          >
            <img className="w-20 h-20 mx-auto" src={logo.src} alt={logo.name} />
            <p className="mt-2 text-sm text-gray-700">{logo.name}</p>
          </motion.li>
        ))}
        {logos2.map((logo, index) => (
          <motion.li
            key={index}
            whileHover="hover"
            initial="rest"
            animate="rest"
            whileTap="hover"
            variants={filterHover}
            className="p-2 rounded-md shadow-md dark:shadow-black transition-transform duration-250 ease-in-out transform hover:shadow-lg"
          >
            <img className="w-20 h-20 mx-auto" src={logo.src} alt={logo.name} />
            <p className="mt-2 text-sm text-gray-700">{logo.name}</p>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Icon;
