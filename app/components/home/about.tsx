'use client';

import React from 'react';
import localFont from "next/font/local";
import { FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { motion } from 'framer-motion';

const font = localFont({
  src: "../../../fonts/Starjedi.ttf",
});

const About = () => {
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div id="apropos" className="flex w-full justify-center content-center text-center sm:text-start bg-dark-900 items-center p-8 sm:p-12 lg:p-16 xl:p-20 pt-20 sm:pt-24 lg:pt-0 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-accent-900/10"></div>
        
        <motion.div 
          className='flex uppercase justify-center items-center content-center relative z-10 max-w-3xl'
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='block space-y-8'>
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                <span className='text-sm sm:text-base font-bold text-accent-400 tracking-wider'>À PROPOS</span>
              </div>
              
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-wide normal-case text-white ${font.className} leading-tight`}>
                Adrien Marques
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto sm:mx-0"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <p className='font-normal text-gray-300 normal-case text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Développeur Full-Stack basé en région Parisienne, spécialisé dans la création 
                d&apos;applications web modernes et performantes. Ma passion pour l&apos;innovation 
                technologique me pousse à explorer constamment de nouvelles solutions.
              </p>
              
              <p className='font-normal text-gray-400 normal-case text-base sm:text-lg lg:text-xl leading-relaxed'>
                J&apos;accompagne mes clients dans la digitalisation de leurs projets, de la conception 
                à la mise en production, en optimisant les performances et le SEO pour garantir 
                une expérience utilisateur exceptionnelle.
              </p>
            </motion.div>

            {/* Key Information Cards */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
              <div className="glass p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-3 text-primary-400">
                  <FaMapMarkerAlt />
                  <span className="text-base font-medium text-gray-300">Localisation</span>
                </div>
                <p className="text-white font-semibold text-lg">Région Parisienne</p>
              </div>
              
              <div className="glass p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-3 text-accent-400">
                  <FaCalendarAlt />
                  <span className="text-base font-medium text-gray-300">Expérience</span>
                </div>
                <p className="text-white font-semibold text-lg">3+ années</p>
              </div>
            </motion.div>

            {/* Specialties */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-400 normal-case">Spécialités</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Développement Full-Stack',
                  'Optimisation SEO',
                  'Architecture Web',
                  'Tests & Débogage',
                  'Responsive Design',
                  'Performance Web'
                ].map((specialty, index) => (
                  <motion.span
                    key={specialty}
                    variants={fadeInUp}
                    className="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 text-primary-300 text-sm sm:text-base rounded-full border border-primary-500/30"
                  >
                    {specialty}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="glass p-8 rounded-xl space-y-6">
              <h3 className="text-xl font-semibold text-white normal-case">Contact Professionnel</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HiMail className="text-primary-400 text-xl" />
                  <span className="text-gray-300 text-base">Disponible via formulaire de contact</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-accent-400 text-xl" />
                  <span className="text-gray-300 text-base">Formation continue en technologies web</span>
                </div>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={fadeInUp} className="pt-6 flex justify-center sm:justify-start">
              <motion.a 
                href='../../CVMarquesAdrien.pdf' 
                download 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-4 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-xl hover:shadow-glow-accent transition-all duration-300 group'
              >
                <FaDownload className="group-hover:animate-bounce text-lg" />
                <span className="text-base sm:text-lg">Télécharger mon CV</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
