import { motion } from "framer-motion";
import journal from "../../assets/jurnal.jpg";

const Article = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-5 lgl:gap-10"
    >
      <div>
        <div className="py-3 lgl:py-5 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#3adbff] tracking-[4px]">2023</p>
        </div>
        <div className="mt-3 w-full h-auto flex flex-col ">
          <ul className="grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <li className="w-full mx-auto group sm:max-w-sm p-4 bg-[#EEEEEE] shadow-md shadow-[#AAAAAA] dark:bg-[#111111] dark:shadow-[#555555] rounded-md">
              <a href="https://doi.org/10.30591/jpit.v8i2.5051">
                <img
                  src={journal}
                  loading="lazy"
                  className="w-full h-96 rounded-lg shadow-md"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    30 Mei 2023
                  </span>
                  <h3 className="text-lg text-gray-800 dark:text-[#EEEEEE] duration-150 group-hover:text-indigo-600 font-semibold">
                    Implementasi Aplikasi Sentimen Pada Data twitter Jelang
                    Pemilu 2024
                  </h3>
                  <p className="text-gray-600 dark:text-[#CCCCCC] text-sm duration-150 group-hover:text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Totam sed, maiores fugiat molestias ad numquam ratione sequi
                    ipsum quia aut?
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
