import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="justify-center w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#3adbff] tracking-[4px]">2024</p>
          <h2 className="text-gray-600 text-3xl md:text-4xl font-bold">
            Job Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ExperienceCard
            title="Junior Frontend Developer"
            subTitle="PT Summit Global Teknologi (Maret - Mei 2023)"
            result="Tangerang"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
