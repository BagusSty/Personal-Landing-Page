import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Expert = (props) => {
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
  const { icon, text } = props;
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.4, transition: { duration: 0.3 } }}
        initial={{ scale: 0.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className={`flex flex-col items-center space-y-2 ${
          darkMode
            ? "hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text hover:icon-hover"
            : "text-black"
        }`}
      >
        {icon}
        <p>{text}</p>
      </motion.div>
    </>
  );
};

export default Expert;
