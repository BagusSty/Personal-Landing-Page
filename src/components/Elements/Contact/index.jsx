/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useState, useEffect } from "react";
import Sosmed from "./Sosmed";

const Contact = () => {
  const SocialMedias = [
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      link: "https://wa.me/+6281459115072",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      link: "https://www.instagram.com/bagus.sty_/",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      link: "https://github.com/BagusSty",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/bagus-setyo-nurcahyo-ab7727234/",
    },
    {
      icon: <BiLogoGmail className="w-6 h-6" />,
      link: "mailto:bagussetyo442@gmail.com",
    },
  ];
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
      id="contact"
      className="w-full h-screen flex flex-col justify-center items-center px-24 py-8 gap-8"
    >
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Kontak Saya</h1>
        <hr
          className={`w-full border-2 ${
            (darkMode && "border-gradient") || "border-black"
          }`}
        />
      </div>
      <div className="flex justify-center items-center space-x-4">
        {SocialMedias.map((socialMedia, index) => (
          <Sosmed path={socialMedia.link} key={index}>
            {socialMedia.icon}
          </Sosmed>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
