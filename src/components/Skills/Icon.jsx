import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const SkillCard = ({ logo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="p-4 rounded-xl bg-white dark:bg-transparent/20 backdrop-blur-lg shadow-md dark:shadow-emerald-400/50 hover:shadow-xl dark:hover:shadow-emerald-400 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <img
        className="w-20 h-20 mx-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
        src={logo.src}
        alt={logo.name}
      />
      <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-cyan-500 transition-colors duration-300">
        {logo.name}
      </p>
    </motion.div>
  );
};

SkillCard.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const SkillsGrid = ({ logos }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-4"
    >
      {logos.map((logo, index) => (
        <SkillCard key={index} logo={logo} index={index} />
      ))}
    </motion.div>
  );
};

SkillsGrid.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillsGrid;
