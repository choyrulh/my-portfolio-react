import { motion, useAnimation, useInView } from "framer-motion";
import reactjs from "../../assets/react.svg";
import tailwindcss from "../../assets/tailwind.svg";
import framerMotion from "../../assets/framer.svg";
import redux from "../../assets/redux.svg";
import axiosLogo from "../../assets/axios.svg";
import tanstack from "../../assets/tanstack.svg";
import ecommercess from "../../assets/ecommerce.png";
import gamess from "../../assets/games.png";
import moviess from "../../assets/movie.png";
import quizss from "../../assets/quiz.png";
import { useEffect, useRef } from "react";

const boxVariants = {
  hidden: { opacity: 0, scale: 0, x: -200 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, delay: 0.1 },
  },
};
const boxVariants2 = {
  hidden: { opacity: 0, scale: 0, x: 200 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, delay: 0.1 },
  },
};

export const Portfolio = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    if (isInView || isInView2) {
      control.start("visible");
    }
  }, [control, isInView]);

  return (
    <>
      <motion.a
        ref={ref}
        variants={boxVariants}
        animate={control}
        initial="hidden"
        href="https://choirul-toko-kita-apps.vercel.app/"
      >
        <div
          style={{
            backgroundImage: `url(${ecommercess})`,
            backgroundPosition: "center",
          }}
          className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
        >
          <motion.div
            whileHover={{ height: "40%" }}
            initial={{ height: "27.5%" }}
            transition={{ duration: 0.5 }}
            className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"
          >
            <h2 className="mt-3 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Ecommerce App
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Website
            </p>
            <span className="mt-4 inline-flex gap-4 ">
              <img className="w-9 h-9" src={reactjs} />
              <img className="w-9 h-9" src={tailwindcss} />
              <img className="w-9 h-9" src={redux} />
              <img className="w-9 h-9" src={framerMotion} />
              <img className="w-9 h-9" src={tanstack} />
            </span>
          </motion.div>
        </div>
      </motion.a>
      <motion.a
        ref={ref}
        variants={boxVariants2}
        animate={control}
        initial="hidden"
        href="https://choirul-movie-apps.vercel.app/"
      >
        <div
          style={{
            backgroundImage: `url(${moviess})`,
            backgroundPosition: "center",
          }}
          className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
        >
          <motion.div
            whileHover={{ height: "40%" }}
            initial={{ height: "27.5%" }}
            transition={{ duration: 0.5 }}
            className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"
          >
            <h2 className="mt-3 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Movie App
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Website
            </p>
            <span className="mt-4 inline-flex gap-4 ">
              <img className="w-9 h-9" src={reactjs} />
              <img className="w-9 h-9" src={tailwindcss} />
              <img className="w-9 h-9" src={axiosLogo} />
              <img className="w-9 h-9" src={framerMotion} />
            </span>
          </motion.div>
        </div>
      </motion.a>
      <motion.a
        ref={ref2}
        variants={boxVariants}
        animate={control}
        initial="hidden"
        href="https://humam-games.vercel.app/"
      >
        <div
          style={{
            backgroundImage: `url(${gamess})`,
            backgroundPosition: "center",
          }}
          className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
        >
          <motion.div
            whileHover={{ height: "40%" }}
            initial={{ height: "27.5%" }}
            transition={{ duration: 0.5 }}
            className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"
          >
            <h2 className="mt-3 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Games
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Website
            </p>
            <span className="mt-4 inline-flex gap-4 ">
              <img className="w-9 h-9" src={reactjs} />
              <img className="w-9 h-9" src={tailwindcss} />
              <img className="w-9 h-9" src={axiosLogo} />
              <img className="w-9 h-9" src={framerMotion} />
            </span>
          </motion.div>
        </div>
      </motion.a>
      <motion.a
        ref={ref2}
        variants={boxVariants2}
        animate={control}
        initial="hidden"
        href="https://choirul-quiz.vercel.app/"
      >
        <div
          style={{
            backgroundImage: `url(${quizss})`,
            backgroundPosition: "center",
          }}
          className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
        >
          <motion.div
            whileHover={{ height: "40%" }}
            initial={{ height: "27.5%" }}
            transition={{ duration: 0.5 }}
            className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"
          >
            <h2 className="mt-3 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Quiz
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Website
            </p>
            <span className="mt-4 inline-flex gap-4 ">
              <img className="w-9 h-9" src={reactjs} />
              <img className="w-9 h-9" src={tailwindcss} />

              <img className="w-9 h-9" src={framerMotion} />
            </span>
          </motion.div>
        </div>
      </motion.a>
    </>
  );
};
