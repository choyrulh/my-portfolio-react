import { Cursor, useTypewriter } from "react-simple-typewriter";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import bannerImg from "../../assets/foto1.png";
import DownloadCV from "../DownloadCV";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Fresh Graduate.", "Frontend Developer.", "Data Science. "],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });

  return (
    <section
      id="home"
      className="dark:text-white w-full pt-5 pb-7 flex flex-col gap-10 xl:gap-0 lg:flex-row items-center font-titleFont"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
          <h1 className="text-6xl font-bold ">
            Hi, I am{" "}
            <span className="text-[#3adbff] capitalize">Choirul Humam</span>
          </h1>
          <h2 className="text-4xl font-bold ">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I am not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <DownloadCV />
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <span className="heroIcon hover:text-[#1877f2]">
                <FaFacebookF />
              </span>
              <span className="heroIcon hover:text-[#bc2a8d]">
                <FaInstagram />
              </span>
              <span className="heroIcon hover:text-[#0077b5]">
                <FaLinkedinIn />
              </span>
              <span className="heroIcon dark:hover:text-white hover:text-black">
                <FaGithub />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              <span className="heroIcon hover:text-[#61dafb]">
                <FaReact />
              </span>
              <span className="heroIcon hover:text-[#B97CFD]">
                <SiRedux />
              </span>
              <span className="heroIcon hover:text-[#38b2ac]">
                <SiTailwindcss />
              </span>
              <span className="heroIcon hover:text-[#FB0092]">
                <TbBrandFramerMotion />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full lgl:w-1/2 h-full flex justify-center bottom-10 items-center relative"> */}
      <img
        className="w-[300px] ml-auto h-fit bottom-16 lgl:w-[500px] lgl:h-[680px] z-10 object-cover relative"
        src={bannerImg}
        alt="bannerImg"
        // style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] shadow-xl dark:shadow-xl flex justify-center items-center"></div> */}
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
