import { useTypewriter } from "react-simple-typewriter";
import char from "../../assets/char2.jpg";
const About = () => {
  const [text] = useTypewriter({
    words: ["About Me "],
    loop: true,
    typeSpeed: 1000,
    deleteSpeed: 10,
  });
  return (
    <section
      id="about"
      className="2xl:container 2xl:mx-auto lg:py-8 lg:px-5 md:px-3 py-5 px-1"
    >
      <div className="mb-5 flex justify-center items-center text-center">
        <h1 className="text-[#3adbff] text-3xl lg:text-4xl font-bold leading-9 pb-4 place-items-center">
          {text}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <p className="font-normal text-base leading-6 text-black dark:text-white">
            Hello, Introducing my name Choirul Humam, I was born and reside in
            Pati, Central Java Indonesia. I am a frontend web developer and data
            science, from the Bachelor of Computer Informatics graduate, Amikom
            University Yogyakarta on October 28, 2023 yesterday. I was born and
            reside in Pati, Central Java Indonesia. I have experience in the
            field of frontend web developers such as using HTML, CSS, Javascript
            and Reactjs framework with TailwindCSS in making my personal
            projects. While in the field of data science, I have experience in
            the field of Machine Learning and Deep Learning using the Python
            programming language. And lately I am deepening my knowledge in
            frontend and little by little learning about backend. Fun fact from
            myself, I can spend more than 8 hours in front of my laptop to
            create projects and learn a little about the backend.
          </p>
        </div>
        <div className="h-72 w-full lg:w-3/12 ml-auto">
          <img
            className="w-full h-full object-cover rounded-lg transform lg:scale-x-[-1] scale-x-[1] "
            src={char}
            alt="Character"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
