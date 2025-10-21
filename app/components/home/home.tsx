'use client';

import React, { useEffect, useState } from 'react';
import localFont from "next/font/local";
import Image from 'next/image';
import { FaLinkedin, FaGithubSquare, FaArrowDown } from "react-icons/fa";
import { HiSparkles, HiCode, HiLightningBolt } from "react-icons/hi";
import fond from '../../../public/oks.png'
import { motion } from 'framer-motion';

const font = localFont({
  src: "../../../fonts/Starjedi.ttf",
});

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.01;
    const moveY = (clientY - window.innerHeight / 2) * 0.01;
    setMousePosition({ x: moveX, y: moveY });
  };

  return (
    <>
      <div 
        className="relative flex w-full min-h-screen overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"
        onMouseMove={handleMouseMove}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large liquid blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 liquid-blob blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/20 liquid-blob blur-3xl opacity-50" style={{ animationDelay: '5s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-400/10 liquid-blob blur-3xl opacity-40" style={{ animationDelay: '3s' }}></div>
          
          {/* Floating particles */}
          <motion.div 
            className="absolute top-20 left-[15%] text-primary-300 opacity-30"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <HiSparkles size={32} />
          </motion.div>
          
          <motion.div 
            className="absolute top-40 right-[20%] text-accent-300 opacity-30"
            animate={{ 
              y: [0, 40, 0],
              x: [0, -30, 0],
              rotate: [0, -180, -360] 
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <HiCode size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-32 left-[25%] text-primary-400 opacity-25"
            animate={{ 
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <HiLightningBolt size={36} />
          </motion.div>
        </div>

        {/* Main content */}
        <motion.div 
          className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-0 flex items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left: Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex">
                <div className="glass-interactive px-5 py-2.5 rounded-full inline-flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-primary-400 rounded-full animate-ping absolute"></div>
                    <div className="w-2.5 h-2.5 bg-primary-400 rounded-full"></div>
                  </div>
                  <span className="text-primary-300 font-medium text-sm tracking-wide uppercase">
                    Développeur Full-Stack
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants} className="space-y-3">
                <p className="text-primary-300 text-sm sm:text-base font-medium uppercase tracking-widest">
                  Bienvenue, je suis
                </p>
                <h1 className={`${font.className} text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight`}>
                  <span className="text-gradient-animated inline-block">
                    ADRIEN
                  </span>
                  <br />
                  <span className="text-white">MARQUES</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Passionné par l&apos;innovation, je crée des{' '}
                <span className="text-primary-400 font-semibold">applications web et mobiles</span>{' '}
                performantes qui transforment les idées en{' '}
                <span className="text-accent-400 font-semibold">expériences exceptionnelles</span>.
              </motion.p>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-400 text-glow">5+</div>
                  <div className="text-gray-400 text-sm mt-1">Projets</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-accent-400 text-glow-accent">5+</div>
                  <div className="text-gray-400 text-sm mt-1">Années d&apos;expérience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-300">10+</div>
                  <div className="text-gray-400 text-sm mt-1">Technologies</div>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <motion.a
                  href="#apropos"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-interactive px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 border-2 border-primary-400/30 inline-flex items-center gap-3 shadow-glow"
                >
                  <span>Découvrir mon profil</span>
                  <FaArrowDown className="text-sm" />
                </motion.a>

                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm">Me suivre:</span>
                  <motion.a 
                    href='https://www.linkedin.com/in/adrien-marques-755393181/' 
                    target='_blank'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-interactive p-3 rounded-full transition-all duration-300"
                  >
                    <FaLinkedin className='text-primary-300 w-6 h-6' />
                  </motion.a>
                  <motion.a 
                    href='https://github.com/marcucus' 
                    target='_blank'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-interactive p-3 rounded-full transition-all duration-300"
                  >
                    <FaGithubSquare className='text-primary-300 w-6 h-6' />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div 
              variants={imageVariants}
              className="relative flex justify-center lg:justify-end items-center"
            >
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-3xl rounded-full scale-150"></div>
                
                {/* Image container */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  }}
                  className="relative z-10"
                >
                  <Image 
                    src={fond} 
                    alt='Adrien Marques - Développeur Full-Stack' 
                    width={600}
                    height={450}
                    className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 glass-interactive px-4 py-3 rounded-full"
          >
            <span className="text-primary-300 text-xs font-medium uppercase tracking-wider">Scroll</span>
            <FaArrowDown className="text-primary-400 text-sm" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
