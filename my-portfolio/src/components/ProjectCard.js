import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const mainSliderRef = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (mainSliderRef.current) setNav1(mainSliderRef.current);
  }, []);

  const mainSettings = {
    asNavFor: nav2,
    ref: mainSliderRef,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: Math.min(project.images.length, 4),
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: project.images.length > 3,
    centerPadding: "10px",
    arrows: false,
    dots: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 transition-transform duration-300 hover:scale-105"
    >
      {/* Project title */}
      <motion.h3
        className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                   bg-clip-text text-transparent animate-gradient-x"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {project.name}
        </a>
      </motion.h3>

      {/* Tech badges */}
      <div className="flex flex-wrap mb-5">
        {project.techs.map((tech, idx) => (
          <span
            key={idx}
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                       text-white text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2 shadow-md
                       transform transition-all duration-500 hover:scale-110 hover:animate-pulse hover:bg-gradient-to-l"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="mb-6 text-gray-700 dark:text-gray-300">{project.desc}</p>

      {/* Main Slider */}
      <Slider {...mainSettings} className="rounded-xl overflow-hidden">
        {project.images.map((img, idx) => (
          <div key={idx} className="relative">
            <img
              src={img}
              alt={`${project.name} screenshot ${idx + 1}`}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0
                            hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <span className="text-white font-bold text-lg sm:text-xl">{project.name}</span>
            </div>
          </div>
        ))}
      </Slider>

      {/* Thumbnail navigation */}
      {project.images.length > 1 && (
        <div className="mt-4">
          <Slider {...thumbSettings} className="cursor-pointer">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className={`p-1 rounded-lg border-2 transition-all duration-300 ${
                  idx === activeIndex
                    ? "border-purple-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`thumb ${idx + 1}`}
                  className="h-16 sm:h-20 object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
