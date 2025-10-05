import React from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Programming Languages",
    badges: [
      { name: "Python", url: "https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=white" },
      { name: "Java", url: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
      { name: "JavaScript", url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
      { name: "C#", url: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" },
      { name: "C++", url: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" },
    ],
  },
  {
    title: "Web & Mobile Development",
    badges: [
      { name: "ReactJS", url: "https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
      { name: "React Native", url: "https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
      { name: "Spring Boot", url: "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" },
      { name: "Flask", url: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
      { name: "Django", url: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
      { name: "Android", url: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 
                     bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-lg">
        🧠 Tech Stack
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {techCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">
              {cat.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {cat.badges.map((b, i) => (
                <motion.img
                  key={i}
                  src={b.url}
                  alt={b.name}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-lg shadow-lg transition-transform duration-300"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
