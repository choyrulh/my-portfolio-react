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

// const boxVariant = {
//   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   hidden: { opacity: 0, y: -200, transition: { duration: 1 } },
// };
// const imgVariant = {
//   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   hidden: { opacity: 0, y: 200, transition: { duration: 1 } },
// };

const HeroSection = () => {
  const textControl = useAnimation();
  const imageControl = useAnimation();
  
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  const isTextInView = useInView(textRef, { once: false, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isTextInView) {
      textControl.start("visible");
    } else {
      textControl.start("hidden");
    }
  }, [textControl, isTextInView]);

  useEffect(() => {
    if (isImageInView) {
      imageControl.start("visible");
    } else {
      imageControl.start("hidden");
    }
  }, [imageControl, isImageInView]);


  const [text] = useTypewriter({
    words: ["Frontend Engineer.", "Data Scientist."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });

  const staggerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      },
    }),
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 100, 
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  return (
    <section
      id="home"
      className="relative dark:text-white w-full py-unset lg:py-32 flex flex-col lg:flex-row items-center justify-between font-titleFont overflow-hidden"
    >
      <motion.div
        className="w-full lg:w-1/2 space-y-8 lg:space-y-12 relative z-10"
        initial="hidden"
        animate={textControl}
        variants={{ 
          visible: { 
            transition: { 
              staggerChildren: 0.1,
              delayChildren: 0.2
            } 
          },
          hidden: {
            transition: { 
              staggerChildren: 0.05,
              staggerDirection: -1
            }
          }
        }}
        ref={textRef}
      >
        {/* Animated Elements */}
        <motion.div variants={staggerVariants} custom={0}>
          <p className="text-lg font-mono text-emerald-400 dark:text-cyan-300">
            Hi, my name is
          </p>
        </motion.div>

        <motion.h1
          variants={staggerVariants}
          custom={1}
          className="text-5xl lg:text-7xl font-bold"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500">
            Choirul Humam.
          </span>
          <span className="block mt-4 text-3xl lg:text-5xl text-gray-600 dark:text-gray-300">
            I&apos;m a {text}
            <Cursor cursorStyle="🖱️" cursorColor="#3adbff" />
          </span>
        </motion.h1>

        <motion.p
          variants={staggerVariants}
          custom={2}
          className="text-lg lg:text-xl max-w-2xl text-gray-500 dark:text-gray-400 leading-relaxed"
        >
          Passionate frontend developer specializing in modern web technologies.
          Graduate from Amikom University with hands-on experience in building
          responsive and interactive web applications.
        </motion.p>

        <motion.div
          variants={staggerVariants}
          custom={3}
          className="flex gap-6"
        >
          <DownloadCV />
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social & Skills */}
        <motion.div
          variants={staggerVariants}
          custom={4}
          className="flex flex-wrap gap-8 mt-12"
        >
          <div className="space-y-4">
            <h3 className="uppercase tracking-wider text-sm text-gray-500">
              Connect
            </h3>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/choyrulh",
                  color: "hover:text-purple-400",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "#",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <FaInstagram />,
                  link: "#",
                  color: "hover:text-pink-400",
                },
                {
                  icon: <FaFacebookF />,
                  link: "#",
                  color: "hover:text-blue-600",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className={`text-2xl p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ${item.color}`}
                  aria-label={`Social link ${i}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="uppercase tracking-wider text-sm text-gray-500">
              Expertise
            </h3>
            <div className="flex gap-4">
              {[
                { icon: <FaReact />, color: "text-cyan-400" },
                { icon: <SiRedux />, color: "text-purple-400" },
                { icon: <SiTailwindcss />, color: "text-blue-400" },
                { icon: <TbBrandFramerMotion />, color: "text-pink-400" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`text-2xl p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg ${item.color}`}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-16 lg:mt-0 pr-8"
        initial="hidden"
        animate={imageControl}
        variants={imageVariants}
        ref={imageRef}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 group">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-2xl" /> */}
          </motion.div>

          {/* Main image with hover effects */}
          <motion.img
            src={bannerImg}
            alt="Choirul Humam Profile"
            className="relative z-10 w-full h-full object-contain rounded-full border-8 border-emerald-400/30 shadow-2xl hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0],
              transition: { type: "spring", stiffness: 300 },
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
          />

          {/* Floating elements animation */}
          <motion.div
            className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            {["React", "Tailwind", "Framer"].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-white dark:bg-gray-800 rounded-full shadow-lg text-cyan-500"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>
    </section>
  );
};

export default HeroSection;
