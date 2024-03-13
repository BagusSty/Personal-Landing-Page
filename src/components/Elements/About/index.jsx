import Description from "./Description";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoFlutter } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import Expert from "./Expert";

const About = () => {
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
  const experts = [
    {
      icon: (
        <FaHtml5 className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `} />
      ),
      text: "HTML",
    },
    {
      icon: <FaCss3 className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `} />,
      text: "CSS",
    },
    {
      icon: <FaPhp className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `} />,
      text: "PHP",
    },
    {
      icon: (
        <FaLaravel className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `} />
      ),
      text: "Laravel",
    },
    {
      icon: (
        <IoLogoJavascript
          className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `}
        />
      ),
      text: "Javascript",
    },
    {
      icon: (
        <SiMysql className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `} />
      ),
      text: "MySQL",
    },
    {
      icon: (
        <FaVuejs className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `} />
      ),
      text: "Vue",
    },
    {
      icon: (
        <FaReact className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `} />
      ),
      text: "React",
    },
    {
      icon: (
        <BiLogoFlutter
          className={`w-10 h-10 ${darkMode ? "icon-hover" : ""} `}
        />
      ),
      text: "Flutter",
    },
  ];
  return (
    <div
      id="about"
      className="w-full h-screen flex sm:flex-row flex-col justify-center items-center sm:px-24 sm:py-8 gap-8"
    >
      <motion.div
        initial={{ y: -40, opacity: 0 }}
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
        className="sm:w-1/2 h-full flex flex-col justify-center sm:items-start items-center space-y-8 p-4"
      >
        <div>
          <h1 className="text-lg font-bold">About Me</h1>
          <hr
            className={`w-full border-2 ${
              (darkMode && "border-gradient") || "border-black"
            }`}
          />
        </div>
        <Description />
      </motion.div>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
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
        className="w-1/2 h-full flex flex-col justify-center items-center space-y-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold"
        >
          Keahlian
        </motion.h1>
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#ffd700" offset="0%" />
            <stop stopColor="#ff1493" offset="100%" />
          </linearGradient>
        </svg>
        <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-8 gap-12">
          {experts.map((expert, index) => (
            <Expert key={index} icon={expert.icon} text={expert.text} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
