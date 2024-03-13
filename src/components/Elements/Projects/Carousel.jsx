import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// React-icons
import {
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoFlutter, BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

import slide_image_1 from "../../../assets/images/project-1.png";
import slide_image_2 from "../../../assets/images/project-2.png";
import slide_image_3 from "../../../assets/images/project-3.png";
import slide_image_4 from "../../../assets/images/project-4.png";
import slide_image_5 from "../../../assets/images/project-5.png";

const Carousel = () => {
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
  const slideImages = [
    {
      image: slide_image_1,
      title: "Management Landing Page",
      link: "https://imaginative-dragon-3b72d5.netlify.app",
      icon1: {
        icon: <FaReact className="sm:h-6 sm:w-6" />,
        name: "React",
      },
      icon2: {
        icon: <BiLogoTailwindCss className="sm:h-6 sm:w-6" />,
        name: "Tailwind CSS",
      },
    },
    {
      image: slide_image_2,
      title: "XYZ Landing Page",
      link: "https://react-landing-page-bgssty.netlify.app",
      icon1: {
        icon: <FaReact className="sm:h-6 sm:w-6" />,
        name: "React",
      },
      icon2: {
        icon: <BiLogoTailwindCss className="sm:h-6 sm:w-6" />,
        name: "Tailwind CSS",
      },
    },
    {
      image: slide_image_3,
      title: "Spliter Bill App",
      link: "https://tip-calculator-app-sty.netlify.app",
      icon1: {
        icon: <FaVuejs className="sm:h-6 sm:w-6" />,
        name: "Vue",
      },
      icon2: {
        icon: <BiLogoTailwindCss className="sm:h-6 sm:w-6" />,
        name: "Tailwind CSS",
      },
    },
    {
      image: slide_image_4,
      title: "Calculator App",
      link: "https://calculator-app-sty.netlify.app",
      icon1: {
        icon: <FaVuejs className="sm:h-6 sm:w-6" />,
        name: "Vue",
      },
      icon2: {
        icon: <BiLogoTailwindCss className="sm:h-6 sm:w-6" />,
        name: "Tailwind CSS",
      },
    },
    {
      image: slide_image_5,
      title: "Calculator Age App",
      link: "https://dapper-figolla-97b4bb.netlify.app",
      icon1: {
        icon: <FaVuejs className="sm:h-6 sm:w-6" />,
        name: "Vue",
      },
      icon2: {
        icon: <BiLogoTailwindCss className="sm:h-6 sm:w-6" />,
        name: "Tailwind CSS",
      },
    },
  ];
  return (
    <div className="swiper-container sm:w-[80%] w-[90%]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper sm:p-24 h-fit object-cover"
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href={slide.link} target="_blank">
              <div className="relative">
                <img src={slide.image} alt={`slide_${index}`} />
                <div
                  className={`absolute bottom-0 left-0 w-full h-full sm:p-12 p-4 flex items-end ${
                    darkMode
                      ? " bg-black bg-opacity-10"
                      : "bg-black bg-opacity-30"
                  }`}
                >
                  <div className="w-1/2">
                    <h1
                      className={`font-bold sm:text-3xl ${
                        darkMode ? "text-black" : "text-white"
                      }`}
                    >
                      {slide.title}
                    </h1>
                    <p></p>
                  </div>
                  <div
                    className={`w-1/2 flex justify-end items-center gap-4  ${
                      darkMode ? "text-black" : "text-white"
                    }`}
                  >
                    <div className="flex justify-center items-center space-x-6">
                      <div className="flex flex-col items-center">
                        {slide.icon1.icon}
                        <p className="sm:text-md text-xs">{slide.icon1.name}</p>
                      </div>
                      <div className="flex flex-col items-center">
                        {slide.icon2.icon}
                        <p className="sm:text-md text-xs">{slide.icon2.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
