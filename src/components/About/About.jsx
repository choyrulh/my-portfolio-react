import { Cursor, useTypewriter } from "react-simple-typewriter";
import char from "../../assets/char2.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { FaReact, FaPython, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux, TbBrandTypescript } from "react-icons/tb";

const About = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) control.start("visible");
  }, [control, isInView]);

  const [text] = useTypewriter({
    words: ["About Me"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 + 0.5 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-10 px-5 md:px-8 lg:px-12 bg-white/5 dark:bg-transparent backdrop-blur-lg relative overflow-hidden"
    >
      <div className="mb-12 flex justify-center items-center text-center">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
          {text}
          <Cursor cursorStyle="✨" cursorColor="#3adbff" />
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
        {/* Text Content */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={control}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full lg:w-7/12 space-y-8"
        >
          <motion.p
            variants={staggerVariants}
            custom={0}
            className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
          >
            Hello! I&lsquo;m{" "}
            <span className="text-cyan-500 font-semibold">Choirul Humam</span>,
            a passionate Frontend Developer and Data Science enthusiast from
            Pati, Central Java, Indonesia. Graduated with a Bachelor&lsquo;s in
            Computer Informatics from Amikom University Yogyakarta.
          </motion.p>

          <motion.div
            variants={staggerVariants}
            custom={1}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <FaCode className="text-cyan-500 text-2xl" />
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                less than 1 years of experience in frontend development using
                modern technologies like React, Tailwind CSS, and JavaScript.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <FaPython className="text-emerald-500 text-2xl" />
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Developed multiple machine learning models using Python,
                TensorFlow, and deep learning techniques.
              </p>
            </div>
          </motion.div>

          <motion.div variants={staggerVariants} custom={2} className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaReact className="text-2xl" />, name: "React" },
                {
                  icon: <TbBrandNextjs className="text-2xl" />,
                  name: "NextJs",
                },
                {
                  icon: <TbBrandTypescript className="text-2xl" />,
                  name: "Typescript",
                },
                {
                  icon: <SiJavascript className="text-2xl" />,
                  name: "JavaScript",
                },
                {
                  icon: <SiTailwindcss className="text-2xl" />,
                  name: "Tailwind CSS",
                },
                {
                  icon: <TbBrandRedux className="text-2xl" />,
                  name: "Redux",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {tech.icon}
                  <span className="text-gray-600 dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={control}
          variants={imageVariants}
          className="relative w-full lg:w-4/12 group"
        >
          <div className="relative overflow-hidden rounded-2xl transform perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 blur-xl rounded-2xl" />
            <img
              className="w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300"
              src={char}
              alt="Choirul Humam Profile"
            />
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>
    </section>
  );
};

export default About;
