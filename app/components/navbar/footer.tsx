'use client';

import React from 'react';
import { FaLinkedin, FaGithubSquare, FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-dark-900/95 backdrop-blur-lg border-t border-primary-500/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-accent-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Copyright section */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm">
              Copyright 2025 - <span className="text-primary-400 font-semibold">MARQUES ADRIEN</span>
            </p>
            <p className="text-gray-400 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              Fait avec <FaHeart className="text-red-400 text-xs" /> et beaucoup de café
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-gray-400 text-xs sm:text-sm hidden md:block">Suivez-moi :</span>
            <div className="flex gap-2 sm:gap-3">
              <motion.a 
                href='https://www.linkedin.com/in/adrien-marques-755393181/' 
                target='_blank' 
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300 group"
              >
                <FaLinkedin className='text-gray-300 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-400 transition-colors' />
              </motion.a>
              <motion.a 
                href='https://github.com/marcucus' 
                target='_blank' 
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300 group"
              >
                <FaGithubSquare className='text-gray-300 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-400 transition-colors' />
              </motion.a>
            </div>
          </div>
          
        </div>

        {/* Separator line */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700/50 text-center">
          <p className="text-gray-500 text-xs">
            Tous droits réservés • Développé avec Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

