import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MenuList = (props) => {
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
  // eslint-disable-next-line react/prop-types
  const { children, path } = props;
  return (
    <Link
      className={`mx-4 text-lg hover:text-gray-500 active:text-gray-500 ${
        darkMode
          ? "hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text"
          : ""
      } `}
      isActive="true"
      to={path}
    >
      {children}
    </Link>
  );
};

export default MenuList;
