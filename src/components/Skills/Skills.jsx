import { useTypewriter } from "react-simple-typewriter";
import Icon from "./Icon";

const Skills = () => {
  const [text] = useTypewriter({
    words: ["Skills "],
    loop: true,
    typeSpeed: 1000,
    deleteSpeed: 10,
  });
  return (
    <section
      id="skills"
      className="2xl:container 2xl:mx-auto lg:py-8 lg:px-5 md:px-3 py-5 px-1"
    >
      <div className=" mb-5 flex justify-center items-center text-center">
        <h1 className="text-[#3adbff] text-3xl lg:text-4xl font-bold leading-9 pb-4 place-items-center">
          {text}
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto text-center">
        <Icon />
      </div>
    </section>
  );
};

export default Skills;
