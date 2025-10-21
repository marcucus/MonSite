'use client';

import React from 'react';
import "swiper/css";
import 'swiper/css/scrollbar';
import CustomArrows from './slider';
import CustomArrowsMobile from './sliderMobile';
import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa';

const Skills = () => {
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div id="competences" className="bg-dark-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative overflow-hidden">
      {/* Background decoration with liquid glass */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-15"></div>
      <div className="absolute top-32 right-10 w-72 h-72 bg-primary-500/20 liquid-blob blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/20 liquid-blob blur-3xl" style={{ animationDelay: '4s' }}></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 liquid-glass rounded-full mb-4 sm:mb-6 md:mb-8">
            <FaCogs className="text-primary-400 text-lg" />
            <span className='text-xs sm:text-sm lg:text-base font-bold text-primary-300 uppercase tracking-wider'>Compétences Techniques</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8'>
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <p className='text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0'>
            Technologies et outils que je maîtrise pour créer des applications performantes
          </p>
          <div className="flex justify-center items-center">
            <span className="text-accent-300 text-xs sm:text-sm lg:text-base font-medium glass px-4 sm:px-5 py-2 sm:py-2.5 rounded-full">
              En constante évolution
            </span>
          </div>
        </motion.div>

        {/* Skills Carousel */}
        <motion.div variants={fadeInUp} className="flex justify-center items-center">
          <div className="w-full max-w-6xl">
            {/* Desktop carousel */}
            <div className='hidden lg:block'>
              <CustomArrows/>
            </div> 
            {/* Mobile/Tablet carousel */}
            <div className='block lg:hidden'>
              <CustomArrowsMobile/>
            </div> 
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
