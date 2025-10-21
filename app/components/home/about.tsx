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
      <div id="apropos" className="flex w-full justify-center content-center text-center sm:text-start bg-dark-900 items-center p-6 sm:p-8 lg:p-12 xl:p-16 pt-16 sm:pt-20 lg:pt-0 relative overflow-hidden">
        {/* Background decoration with liquid blobs */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-15"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary-500/20 liquid-blob blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-500/20 liquid-blob blur-3xl" style={{ animationDelay: '3s' }}></div>
        
        <motion.div 
          className='flex uppercase justify-center items-center content-center relative z-10 max-w-4xl'
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='block space-y-8'>
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="space-y-3 px-2 sm:px-0">
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 liquid-glass rounded-full mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                <span className='text-xs sm:text-sm lg:text-base font-bold text-accent-300 tracking-wider'>À PROPOS</span>
              </div>
              
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-wide normal-case text-white ${font.className} leading-tight mb-4`}>
                Adrien Marques
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 rounded-full mx-auto sm:mx-0"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-5 sm:space-y-6">
              <p className='font-normal text-gray-200 normal-case text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed px-2 sm:px-0'>
                Après un parcours académique rigoureux, incluant un Master en Informatique à 
                l&apos;Université de Franche-Comté, notre équipe chez Ennea a développé la 
                marketplace « Bones », bénéficiant de mon expertise en optimisation pour les 
                moteurs de recherche (SEO) et ma maîtrise en développement logiciel.
              </p>
              
              <p className='font-normal text-gray-300 normal-case text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed px-2 sm:px-0'>
                Passionné par l&apos;innovation et l&apos;amélioration continue, j&apos;ai contribué 
                à la création d&apos;outils de suivi de performance chez Foudroyer, renforçant 
                l&apos;expérience utilisateur et la visibilité en ligne grâce à des solutions 
                technologiques avancées et une approche méthodique et autonome.
              </p>
            </motion.div>

            {/* Key Information Cards with liquid glass */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
              <div className="liquid-glass-hover liquid-glass p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-3 text-primary-400">
                  <FaMapMarkerAlt className="text-xl" />
                  <span className="text-base font-medium text-gray-200">Localisation</span>
                </div>
                <p className="text-white font-semibold text-lg">Mitry-Mory, Île-de-France</p>
              </div>
              
              <div className="liquid-glass-hover liquid-glass p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-3 text-accent-400">
                  <FaCalendarAlt className="text-xl" />
                  <span className="text-base font-medium text-gray-200">Expérience</span>
                </div>
                <p className="text-white font-semibold text-lg">5+ années</p>
              </div>
            </motion.div>

            {/* Specialties */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-300 normal-case">Principales compétences</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Application mobile',
                  'React Native',
                  'Python',
                  'Développement Full-Stack',
                  'Optimisation SEO',
                  'Architecture Web'
                ].map((specialty, index) => (
                  <motion.span
                    key={specialty}
                    variants={fadeInUp}
                    className="px-4 py-2.5 liquid-glass text-primary-200 text-sm sm:text-base rounded-xl border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
                  >
                    {specialty}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="liquid-glass p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-semibold text-white normal-case">Contact Professionnel</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HiMail className="text-primary-400 text-xl" />
                  <span className="text-gray-200 text-base">marquesadrien.pro@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-accent-400 text-xl" />
                  <span className="text-gray-200 text-base">Master en Informatique - Université de Franche-Comté</span>
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
                className='inline-flex items-center gap-4 bg-gradient-to-r from-accent-500 via-accent-400 to-primary-500 text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:shadow-glow-accent-lg transition-all duration-300 group liquid-glass-hover'
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
