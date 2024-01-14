import { useState } from "react";
import { motion } from "framer-motion";
import { subMenuNav } from "./subMenu";
import { Link } from "react-scroll";
const Header = () => {
  const [activeIndex, setActiveIndex] = useState();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const handleItemClickIfDropdown = (item) => {
    // Implement your logic when a dropdown item is clicked
    console.log(`Selected: ${item}`);
    setActiveIndex(item.id);
    setDropdownOpen(false);
  };
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <motion.header
      className="text-base lg:text-sm flex flex-col lg:flex-row backdrop-blur-sm justify-center sticky top-0 bg-transparent z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="lg:border-b lg:pb-2">
        <ul className=" flex-col hidden sml:flex sml:flex-row items-center gap-x-3 max-w-screen-xl mx-auto px-4 lg:px-8 overflow-x-auto">
          {subMenuNav.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ borderBottomWidth: 0 }}
              animate={{
                borderBottomWidth: index === activeIndex ? 2 : 0,
                borderColor: "#3adbff",
              }}
              className={`lg:py-1`}
            >
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`dark:text-white block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[#222222] duration-150 cursor-pointer ${
                  index === activeIndex
                    ? "text-blue-500 dark:text-blue-400"
                    : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </Link>
            </motion.li>
          ))}
        </ul>
        {/* Mobile menu button */}
        {/* Dropdown menu */}
        <div className="sml:hidden p-3">
          <button
            className="focus:outline-none top-3 left-3"
            onClick={handleToggleDropdown}
          >
            <svg
              className="w-6 h-6 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isDropdownOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={dropdownVariants}
            transition={{ duration: 0.2 }}
            className="origin-top-left absolute left-4 w-48 rounded-md shadow-lg bg-gray-200 dark:bg-[#222222] ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {subMenuNav.map((item, index) => (
                <div
                  key={item.id}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`dark:text-white block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[#222222] duration-150 cursor-pointer ${
                      index === activeIndex
                        ? "text-blue-500 dark:text-blue-400"
                        : ""
                    }`}
                    onClick={() => handleItemClickIfDropdown(item)}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
