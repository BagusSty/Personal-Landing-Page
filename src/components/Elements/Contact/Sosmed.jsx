import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Sosmed = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, path } = props;
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
  return (
    <>
      <a href={path} target="_blank">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center cursor-pointer ${
            darkMode ? "hover:bg-white hover:border-black hover:text-black" : "border-black"
          }`}
        >
          {children}
        </motion.div>
      </a>
    </>
  );
};

export default Sosmed;
