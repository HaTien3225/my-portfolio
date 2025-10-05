import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['Java', 'Python', 'JavaScript', 'React', 'Android', 'Flask', 'HTML', 'CSS'];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-gray-50 dark:bg-gray-900 text-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-clip-text text-transparent 
                     bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-lg">
        🛠️ Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                       text-white font-semibold px-4 py-2 rounded-full shadow-md 
                       transition-transform duration-300 cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
