import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative text-center py-24 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 overflow-hidden"
    >
      {/* Background animated gradient circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-400 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-blue-500 rounded-full opacity-20 animate-pulse-slow"></div>

      {/* Header Content */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg">
        👋 Hi, I'm <span className="text-white">Hà Thanh Tiến</span>
      </h1>

      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white drop-shadow-md">
        💻 Software Developer | 🚀 Web, Mobile & Cloud Applications
      </p>

      <p className="mt-2 text-sm sm:text-base text-white/90">
        🌱 Fullstack, Android, Software Testing, Project Management
      </p>

      {/* Call to Action Button */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-8 px-8 py-3 bg-white/20 text-white font-semibold rounded-full backdrop-blur-md shadow-lg hover:bg-white/30 transition-colors duration-300"
      >
        🚀 View My Projects
      </motion.a>
    </motion.header>
  );
};

export default Header;
