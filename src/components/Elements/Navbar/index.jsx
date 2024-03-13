import Toggle from "./toggle";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark" || theme === "light") {
        setDarkMode(theme === "dark");
      }
    }, 50); // Check localStorage every second

    return () => clearInterval(intervalId);
  }, []);

  const listmenus = [
    {
      path: "home",
      name: "Home",
    },
    {
      path: "about",
      name: "About",
    },
    {
      path: "projects",
      name: "Projects",
    },
    {
      path: "contact",
      name: "Contact",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center bg-transparent sm:backdrop-blur w-screen sm:px-24 sm:py-8 p-8 gap-12 fixed"
    >
      <h1
        className={`sm:flex hidden text-4xl font-bold font-the-nautigal ${
          darkMode && "text-light-gray"
        }`}
      >
        {" "}
        Bagus Setyo Nurcahyo{" "}
      </h1>
      <div className="sm:flex hidden">
        {listmenus.map((menu) => (
          <Link
            activeClass="active"
            key={menu.name}
            spy={true}
            smooth={true}
            offset={-100}
            to={menu.path}
            className={`mx-4 text-lg hover:text-gray-500 active:text-gray-500 cursor-pointer ${
              darkMode
                ? "hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text"
                : ""
            } `}
          >
            {menu.name}
          </Link>
        ))}
      </div>
      <Toggle />
    </motion.div>
  );
};

export default Navbar;
