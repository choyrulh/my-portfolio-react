import { useTypewriter } from "react-simple-typewriter";

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
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <p className="font-normal text-base leading-6 text-black dark:text-white ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="h-72 lg:w-3/12 ml-auto">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
