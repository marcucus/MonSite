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
    <div className="bg-dark-800 py-20 px-10 lg:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-accent-900/5"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <FaCogs className="text-primary-400" />
            <span className='text-sm font-bold text-primary-400 uppercase tracking-wider'>Compétences Techniques</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-2'>
            Technologies et outils que je maîtrise pour créer des applications performantes
          </p>
          <div className="flex justify-center items-center">
            <span className="text-accent-400 text-sm font-medium bg-accent-900/30 px-3 py-1 rounded-full">
              En constante évolution
            </span>
          </div>
        </motion.div>

        {/* Skills Carousel */}
        <motion.div variants={fadeInUp} className="flex justify-center items-center">
          <div className="w-full max-w-4xl">
            {/* Desktop carousel */}
            <div className='hidden lg:block'>
              <CustomArrows/>
            </div> 
            {/* Mobile carousel */}
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
