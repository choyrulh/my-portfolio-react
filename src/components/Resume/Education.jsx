import { motion } from "framer-motion";
function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <ul className="w-full grid grid-cols-3 gap-3">
        <li className="achievCard">
          <img
            className="object-cover w-full h-72"
            src="https://sman1juwana.sch.id/storage/sman1juwana.sch.id/slide/h42q81599794305.png"
            alt="avatar"
          />
          <div className="py-5 text-center">
            <a href="https://www.smanju.sch.id/" className="block " role="link">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                SMAN 1 Juwana
              </h1>
            </a>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700 dark:text-gray-200">
                MIPA-7
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                2016-2019
              </span>
            </div>
          </div>
        </li>
        <li className="achievCard">
          <img
            className="object-cover w-full h-72"
            src="https://i0.wp.com/english.amikom.ac.id/wp-content/uploads/gedung-amikom.jpg?w=720"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="https://home.amikom.ac.id/"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              role="link"
            >
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Universitas Amikom Yogyakarta
              </h1>
            </a>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700 dark:text-gray-200">
                S1-Informatika
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                2019-2023
              </span>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
}

export default Education;
