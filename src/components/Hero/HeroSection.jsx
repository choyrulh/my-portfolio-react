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
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -200, transition: { duration: 1 } },
};
const imgVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200, transition: { duration: 1 } },
};

const HeroSection = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);

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
      <motion.div
        variants={boxVariant}
        animate={control}
        initial="hidden"
        ref={ref}
        className="w-full lgl:w-1/2 flex flex-col gap-20"
      >
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
            Hello, introduce me Choirul Humam, a fresh graduate from Amikom
            University Yogyakarta with a Bachelor of Computer Science degree in
            informatics. Thank you for visiting my profile website, please enjoy
          </p>
          <DownloadCV />
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/choyrul7">
                <span className="heroIcon hover:text-[#1877f2]">
                  <FaFacebookF />
                </span>
              </a>
              <a href="https://www.instagram.com/choyrulh">
                <span className="heroIcon hover:text-[#bc2a8d]">
                  <FaInstagram />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/choirul-humam-439055180/">
                <span className="heroIcon hover:text-[#0077b5]">
                  <FaLinkedinIn />
                </span>
              </a>
              <a href="https://github.com/choyrulh">
                <span className="heroIcon dark:hover:text-white hover:text-black">
                  <FaGithub />
                </span>
              </a>
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
      </motion.div>
      {/* <div className="w-full lgl:w-1/2 h-full flex justify-center bottom-10 items-center relative"> */}
      <motion.img
        variants={imgVariant}
        ref={ref}
        animate={control}
        initial="hidden"
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
