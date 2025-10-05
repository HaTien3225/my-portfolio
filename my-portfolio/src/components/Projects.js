import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from './ProjectCard';


const projects = [
  {
    name: 'Online Health Checkup Appointment System',
    techs: ['ReactJS', 'Spring Boot', 'MySQL'],
    desc: 'Authentication & Authorization, online payment (VNPay/MoMo), video consultation (WebRTC), statistics dashboard.',
    images: ['/images/demo1.png','/images/demo2.png'],
    link: 'https://github.com/hatien3225/HealthyCare'
  },
  {
    name: 'Cloud-Based Chat SaaS',
    techs: ['Flask', 'SocketIO', 'AWS'],
    desc: 'Real-time messaging, file upload, multi-instance scaling, secure sessions.',
    images: ['/images/demo1.png','/images/demo2.png'],
    link: 'https://github.com/hatien3225/ChatWeb'
  },
  {
    name: 'ApplyGo',
    techs: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Bootstrap'],
    desc: 'Job posting, application management, and job filtering.',
    images: ['/images/demo1.png','/images/demo2.png'],
    link: 'https://github.com/hatien3225/ApplyGo'
  },
  {
    name: 'ev_station',
    techs: ['JavaScript', 'CSS', 'HTML', 'Bootstrap', 'Django', 'ReactJS', 'Django Channels'],
    desc: 'Map integration, route suggestions, and location search for EV stations.',
    images: ['/images/demo1.png','/images/demo2.png'],
    link: 'https://github.com/hatien3225/ev_station'
  },
  {
    name: 'HomeFinder',
    techs: ['JavaScript', 'CSS', 'HTML', 'Bootstrap', 'Django', 'React Native'],
    desc: 'Search, filter, and comment features for real-estate listings.',
   images: ['/images/demo1.png','/images/demo2.png'],
    link: 'https://github.com/hatien3225/HomeFinder'
  },
  {
    name: 'StayEase',
    techs: ['Python', 'Flask', 'JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    desc: 'Room management, booking system, and staff dashboard for hotels.',
    images: ['/images/demo1.png','/images/demo2.png'],
    link: 'https://github.com/hatien3225/StayEase'
  },
  {
    name: 'LTDiDong',
    techs: ['HTML', 'CSS', 'JavaScript', 'Java'],
    desc: 'Cart, order, and product display for collaborative e-commerce project.',
     images: ['/images/demo1.png','/images/demo2.png'],
    link: 'https://github.com/hatien3225/LTDiDong'
  },
];

const Projects = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      {/* Section title with gradient animation */}
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="space-y-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
};



export default Projects;
