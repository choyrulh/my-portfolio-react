import { useTypewriter } from "react-simple-typewriter";
import { Portfolio } from "./myProject";

const Projects = () => {
  const [text] = useTypewriter({
    words: ["Projects "],
    loop: true,
    typeSpeed: 1000,
    deleteSpeed: 10,
  });

  return (
    <section
      id="projects"
      className="2xl:container 2xl:mx-auto lg:py-8 lg:px-5 md:px-3 py-5 px-1"
    >
      <div className=" mb-5 flex justify-center items-center text-center">
        <h1 className="text-[#3adbff] text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent inline-block leading-9 pb-4 place-items-center">
          {text}
        </h1>
      </div>
      <div className="container px-1 sml:px-2 lg:px-6 mx-auto">
        {/* <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2"> */}
        <Portfolio />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Projects;
