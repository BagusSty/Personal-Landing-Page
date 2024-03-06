import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const Projects = () => {
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
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "flip",
          duration: 1.2,
          delay: 0.1,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      }}
      viewport={{ once: true }}
      className="w-screen h-screen flex flex-col justify-center items-center p-24 gap-4"
      id="projects"
    >
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Projek Saya</h1>
        <hr
          className={`w-full border-2 ${
            (darkMode && "border-gradient") || "border-black"
          }`}
        />
      </div>
      <Carousel />
    </motion.div>
  );
};

export default Projects;
