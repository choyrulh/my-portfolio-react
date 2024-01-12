import { motion } from "framer-motion";
const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px]  flex flex-col gap-10"></div>
      </div>
    </motion.div>
  );
};

export default Achievements;
