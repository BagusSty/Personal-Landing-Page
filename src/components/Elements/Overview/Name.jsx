import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Name = () => {
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

  const text = "Bagus Setyo Nurcahyo".split(" ");
  return (
    <div>
      {text.map((el, i) => (
        <motion.span
          className={`text-8xl font-bold ${
            darkMode
              ? "bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text"
              : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default Name;
