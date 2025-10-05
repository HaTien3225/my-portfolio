import React from 'react';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  return (
    <motion.section
      id="github-stats"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 max-w-6xl mx-auto text-center px-4"
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-clip-text text-transparent 
                     bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-lg">
        📊 GitHub Stats
      </h2>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
        {/* GitHub Stats */}
        <motion.img
          src="https://github-readme-stats.vercel.app/api?username=hatien3225&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
          className="rounded-xl shadow-lg w-full sm:w-[90%] hover:scale-105 transition-transform duration-300"
        />

        {/* Top Languages */}
        <motion.img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=hatien3225&layout=compact&theme=tokyonight"
          alt="Top Languages"
          className="rounded-xl shadow-lg w-full sm:w-[90%] hover:scale-105 transition-transform duration-300"
        />

        {/* Streak Stats */}
        <motion.img
          src="https://github-readme-streak-stats.herokuapp.com?user=hatien3225&theme=tokyonight&date_format=M%20j%5B%2C%20Y%5D"
          alt="GitHub Streak Stats"
          className="rounded-xl shadow-lg w-full sm:w-[90%] hover:scale-105 transition-transform duration-300"
        />

        {/* Contribution Graph */}
        <motion.img
          src="https://github-readme-activity-graph.vercel.app/graph?username=hatien3225&theme=tokyo-night"
          alt="Contribution Graph"
          className="rounded-xl shadow-lg w-full sm:w-[90%] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Visitors Badge */}
      <motion.div className="mt-8">
        <img
          src="https://visitor-badge.laobi.icu/badge?page_id=hatien3225"
          alt="Visitors"
          className="mx-auto w-32 rounded-lg shadow-md"
        />
      </motion.div>
    </motion.section>
  );
};

export default GitHubStats;
