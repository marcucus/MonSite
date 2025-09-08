'use client';

import React, { useEffect, useState } from 'react';
import localFont from "next/font/local";
import Image from 'next/image';
import { FaLinkedin, FaGithubSquare, FaArrowDown, FaCode, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import fond from '../../../public/oks.png'
import { motion } from 'framer-motion';

const font = localFont({
  src: "../../../fonts/Starjedi.ttf",
});

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
  const anim = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  const animX = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div 
        className="relative flex w-full font-semibold justify-center text-center sm:text-start content-center items-center min-h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 opacity-50"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-20 text-primary-400 opacity-20"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <HiSparkles size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute top-40 right-32 text-accent-400 opacity-20"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <FaCode size={32} />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-32 left-32 text-primary-300 opacity-20"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0] 
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <FaRocket size={36} />
          </motion.div>
        </div>

        <div className='relative block lg:grid lg:grid-cols-2 p-4 sm:p-6 md:p-8 lg:p-16 xl:p-20 2xl:w-[80%] justify-center items-center content-center min-h-screen z-10 gap-8 lg:gap-12'>
          <motion.div
            variants={anim}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass rounded-full text-primary-300 font-medium text-xs sm:text-sm"
            >
              <HiSparkles className="text-accent-400" />
              <span className="uppercase tracking-wider">Développeur Full-Stack</span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className='text-sm sm:text-lg font-medium text-gray-400 uppercase tracking-wider mb-2'>
                Qui suis-je ?
              </p>
              <h1 className={`${font.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent leading-tight normal-case`}>
                Adrien Marques
              </h1>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
              className='text-base sm:text-lg md:text-xl font-normal text-gray-300 normal-case leading-relaxed max-w-2xl'
            >
              Développeur Full-Stack passionné par l&apos;innovation technologique.
              Je conçois et développe des applications web modernes qui offrent des 
              <span className="text-accent-400 font-semibold"> expériences exceptionnelles</span> et 
              <span className="text-primary-400 font-semibold"> performantes</span>.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <span className='text-gray-400 text-xs sm:text-sm font-medium'>Suivez-moi :</span>
                <div className='flex gap-2 sm:gap-3'>
                  <motion.a 
                    href='https://www.linkedin.com/in/adrien-marques-755393181/' 
                    target='_blank'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 sm:p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300 group"
                  >
                    <FaLinkedin className='text-gray-300 w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary-400 transition-colors' />
                  </motion.a>
                  <motion.a 
                    href='https://github.com/marcucus' 
                    target='_blank'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 sm:p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300 group"
                  >
                    <FaGithubSquare className='text-gray-300 w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary-400 transition-colors' />
                  </motion.a>
                </div>
              </div>

              <motion.a
                href="#apropos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-sm sm:text-base rounded-full hover:shadow-glow transition-all duration-300 mt-4 sm:mt-0"
              >
                <span>Découvrir mon profil</span>
                <FaArrowDown className="text-sm" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-8 pt-6"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-400">5+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projets</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent-400">3+</div>
                <div className="text-xs sm:text-sm text-gray-400">Années d&apos;expérience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-300">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className='relative flex justify-center items-center mt-8 sm:mt-10 lg:mt-0'>
            <motion.div
              variants={animX}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-full blur-3xl"></div>
              
              {/* Image container with hover effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <Image 
                  src={fond} 
                  alt='Adrien Marques - Développeur Full-Stack' 
                  height={496} 
                  width={700}
                  className="relative z-10 drop-shadow-2xl animate-float w-[300px] h-[212px] sm:w-[400px] sm:h-[283px] lg:w-[450px] lg:h-[318px] xl:w-[500px] xl:h-[354px] object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <FaArrowDown className="text-sm" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
