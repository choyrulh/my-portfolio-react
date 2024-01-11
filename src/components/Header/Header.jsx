import DarkToggle from "./DarkToggle";

const Header = () => {
  const submenuNav = [
    { title: "Home" },
    { title: "Profile" },
    { title: "About" },
    { title: "Skills" },
    { title: "Projects" },
    { title: "Contact" },
  ];

  return (
    <header className="text-base lg:text-sm flex flex-row justify-center sticky">
      <nav className="border-b pb-2">
        <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
          {submenuNav.map((item, idx) => {
            return (
              // Replace [idx == 0] with [window.location.pathname == item.path]
              <li
                key={idx}
                className={`py-1 ${
                  idx == 0 ? " border-b-2 border-[#3adbff]" : ""
                }`}
              >
                <a
                  href={item.path}
                  className="cursor-pointer dark:text-white block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[#222222] duration-150"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <DarkToggle />
    </header>
  );
};

export default Header;
