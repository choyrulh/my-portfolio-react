import { useContext, useEffect } from "react";
import { ThemeContext } from "../../Hooks/themeContext.jsx";
import { HiOutlineMoon } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";

const DarkToggle = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  }, [theme]);

  return (
    <div
      className="flex flex-row items-center gap-2 shadow-inner shadow-[#CCCCCC] dark:shadow-[#444444] hover:outline-green-500 p-1 cursor-pointer transition duration-300 ease-in-out rounded-md"
      onClick={() => handleChangeTheme(theme === "light" ? "dark" : "light")}
    >
      <span>
        {theme === "light" ? (
          <HiOutlineMoon
            size={28}
            className="text-[#222222] text-xl dark:text-gray-300"
          />
        ) : (
          <HiOutlineSun size={28} className="text-yellow-500 text-xl" />
        )}
      </span>
    </div>
  );
};

export default DarkToggle;
