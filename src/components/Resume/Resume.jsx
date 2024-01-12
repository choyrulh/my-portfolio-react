import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Achievements from "./Achievements";
import Article from "./Article";
function Resume() {
  const [activeTab, setActiveTab] = useState("Education");

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
        <h1 className="text-[#3adbff] text-3xl lg:text-4xl font-bold leading-9 pb-4 place-items-center">
          {text}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-col justify-between gap-8">
        <ul className="gap-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => handleClick("Education")}
            className={`${
              activeTab === "Education"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => handleClick("Professional Skills")}
            className={`${
              activeTab === "Professional Skills"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => handleClick("Article")}
            className={`${
              activeTab === "Article"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Article
          </li>
          <li
            onClick={() => handleClick("Achievements")}
            className={`${
              activeTab === "Achievements"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
        {activeTab === "Education" && <div>Education Content</div>}
        {activeTab === "Professional Skills" && (
          <div>Professional Skills Content</div>
        )}
        {activeTab === "Article" && <Article />}
        {activeTab === "Achievements" && <Achievements />}
      </div>
    </section>
  );
}

export default Resume;