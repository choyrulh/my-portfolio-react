import { motion } from "framer-motion";
import journal from "../../assets/certif-journal.jpg";
import udemy from "../../assets/course-udemy.jpg";
import fcc from "../../assets/freecodecamp.png";
import toefl from "../../assets/toefl.jpg";
const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <ul className="w-full grid grid-cols-3 gap-3">
        <li className="achievCard">
          <img className="object-cover w-full h-72" src={udemy} alt="avatar" />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              role="link"
            >
              Course Udemy
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              React The Complete Guide 2023
            </span>
          </div>
        </li>
        <li className="achievCard">
          <img className="object-cover w-full h-72" src={fcc} alt="avatar" />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              role="link"
            >
              Certificate
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Front End Development Libraries
            </span>
          </div>
        </li>
        <li className="achievCard">
          <img
            className="object-cover w-full h-72"
            src={journal}
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              role="link"
            >
              LOA
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Implementasi Aplikasi Sentimen Pada Data twitter Jelang Pemilu
              2024
            </span>
          </div>
        </li>
        <li className="achievCard">
          <img className="object-cover w-full h-72" src={toefl} alt="avatar" />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              role="link"
            >
              Test
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Toefl Like Test English
            </span>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default Achievements;
