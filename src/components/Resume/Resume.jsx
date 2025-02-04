import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Achievements from "./Achievements";
import Article from "./Article";
import Education from "./Education";
import { motion } from "framer-motion";
import Experience from "./Experience";
function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const [text] = useTypewriter({
    words: ["My Resume "],
    loop: true,
    typeSpeed: 1000,
    deleteSpeed: 10,
  });

  return (
    <section
      id="resume"
      className="2xl:container 2xl:mx-auto lg:py-8 lg:px-5 md:px-3 py-5 px-1"
    >
      <div className=" mb-5 flex justify-center items-center text-center">
        <h1 className="text-[#3adbff] text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent inline-block leading-9 pb-4 place-items-center">
          {text}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-col justify-between gap-8">
        <ul className="gap-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          <li onClick={() => handleClick("Experience")} className="resumeLi">
            Experience
            {activeTab === "Experience" && (
              <motion.span
                layoutId="underline"
                className="absolute border-[1px] w-full h-20 rounded-md border-[#3adbff] "
              />
            )}
          </li>
          <li onClick={() => handleClick("Education")} className="resumeLi">
            Education
            {activeTab === "Education" && (
              <motion.span
                layoutId="underline"
                className="absolute border-[1px] w-full h-20 rounded-md border-[#3adbff] "
              />
            )}
          </li>

          <li onClick={() => handleClick("Article")} className="resumeLi">
            Article
            {activeTab === "Article" && (
              <motion.span
                layoutId="underline"
                className="absolute border-[1px] w-full h-20 rounded-md border-[#3adbff] "
              />
            )}
          </li>
          <li onClick={() => handleClick("Achievements")} className="resumeLi">
            Achievements
            {activeTab === "Achievements" && (
              <motion.span
                layoutId="underline"
                className="absolute border-[1px] w-full h-20 rounded-md border-[#3adbff] "
              />
            )}
          </li>
        </ul>
        {activeTab === "Education" && <Education />}

        {activeTab === "Article" && <Article />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Achievements" && <Achievements />}
      </div>
    </section>
  );
}

export default Resume;
