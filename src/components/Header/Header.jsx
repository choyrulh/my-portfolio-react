import { useState } from "react";
import DarkToggle from "./DarkToggle";
import { motion } from "framer-motion";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState();
  const submenuNav = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Resume", path: "#resume" },
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <motion.header
      className="text-base lg:text-sm flex flex-row justify-center sticky top-0 bg-transparent z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="border-b pb-2">
        <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
          {submenuNav.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ borderBottomWidth: 0 }}
              animate={{
                borderBottomWidth: idx === activeIndex ? 2 : 0,
                borderColor: "#3adbff",
              }}
              className={`py-1`}
            >
              <a
                href={item.path}
                onClick={() => handleItemClick(idx)}
                className="cursor-pointer dark:text-white block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[#222222] duration-150"
              >
                {item.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
      <DarkToggle />
    </motion.header>
  );
};

export default Header;
