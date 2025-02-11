import { PropTypes } from "prop-types";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function ResumeCard({ title, subTitle, result, des }){
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: false,
    margin: "-50px"
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="w-full group flex"
    >
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-gray-300 dark:bg-gray-700">
          <motion.span 
            className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400 inline-flex group-hover:bg-cyan-400 dark:group-hover:bg-cyan-500"
            animate={isInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 0.5, repeat: isInView ? Infinity : 0, repeatDelay: 2 }}
          />
        </span>
      </div>
      <div className="w-full md:w-[42vw] bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-30 duration-300 rounded-lg p-4 md:p-6 lg:p-8 flex flex-col justify-center gap-4 lg:gap-6 shadow-lg dark:shadow-gray-900/50 transform hover:-translate-y-1 transition-all">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 duration-300">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg flex justify-center items-center shadow-md text-sm font-medium"
            >
              {result}
            </motion.div>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 duration-300 leading-relaxed">
          {des}
        </p>
      </div>
    </motion.div>
  );
};
export default ResumeCard;

ResumeCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};