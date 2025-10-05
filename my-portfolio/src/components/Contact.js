import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGlobe } from 'react-icons/fi';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-gray-50 dark:bg-gray-900 text-center px-4"
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-clip-text text-transparent 
                     bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-lg">
        📫 Contact Me
      </h2>

      {/* Contact Cards */}
      <div className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-3">
        {/* Email */}
        <motion.a
          href="mailto:hatien3225@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center 
                     transition-transform duration-300 hover:shadow-2xl"
        >
          <FiMail className="text-3xl text-purple-500 mb-2" />
          <p className="text-gray-700 dark:text-gray-200 font-medium hover:text-purple-500 transition-colors">
            hatien3225@gmail.com
          </p>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/ti%E1%BA%BFn-h%C3%A0-thanh-150314381/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center 
                     transition-transform duration-300 hover:shadow-2xl"
        >
          <FiLinkedin className="text-3xl text-blue-500 mb-2" />
          <p className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 transition-colors">
            linkedin.com/in/tiến-hà-thanh
          </p>
        </motion.a>

        {/* Portfolio */}
        <motion.a
          href="https://hatien3225.dev"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center 
                     transition-transform duration-300 hover:shadow-2xl"
        >
          <FiGlobe className="text-3xl text-green-500 mb-2" />
          <p className="text-gray-700 dark:text-gray-200 font-medium hover:text-green-500 transition-colors">
            hatien3225.dev
          </p>
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;
