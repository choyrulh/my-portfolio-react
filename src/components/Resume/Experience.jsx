import ResumeCard from "./ExperienceCard";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    margin: "-100px" 
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.5
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="w-full"
      >
        <motion.div 
          variants={titleVariants}
          className="mb-12 md:mb-16"
        >
          <motion.p 
            className="text-sm text-cyan-500 dark:text-cyan-400 tracking-[4px] mb-2"
            whileHover={{ x: 10 }}
          >
            2024
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100">
            Job Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-[6px] bg-gray-200 dark:bg-gray-700/30 rounded-full" />
          
          {/* Experience cards */}
          <div className="space-y-8 md:space-y-12">
            <ResumeCard
              title="Junior Frontend Developer"
              subTitle="PT Summit Global Teknologi (Maret 2024 - Maret 2025)"
              result="Tangerang"
              des="Lead frontend development initiatives using React and Next.js, collaborating with cross-functional teams to deliver responsive and performant web applications. Implemented modern UI/UX practices and optimized application performance."
            />
            {/* Add more ResumeCard components as needed */}
          </div>
        </div>
        <motion.div 
          variants={titleVariants}
          className="mb-12 md:mb-16"
        >
          <motion.p 
            className="text-sm text-cyan-500 dark:text-cyan-400 tracking-[4px] mb-2"
            whileHover={{ x: 10 }}
          >
            2025
          </motion.p>
        </motion.div>

        {/*<div className="relative">
          <div className="absolute left-4 top-0 h-full w-[6px] bg-gray-200 dark:bg-gray-700/30 rounded-full" />
          
          <div className="space-y-8 md:space-y-12">
            <ResumeCard
              title="Fullstack Web Developer"
              subTitle="Pintu Digital Teknologi (Mei 2025 - Now)"
              result="Pati"
              des="Lead frontend development initiatives using React 
              , Next.js, Express.js, collaborating with cross-functional teams to deliver responsive and performant web applications. Implemented modern UI/UX practices and optimized application performance."
            />
          </div>
        </div>*/}
      </motion.div>
    </section>
  );
};

export default Experience;
