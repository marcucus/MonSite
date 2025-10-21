'use client';

import React from 'react';
import { FaLinkedin, FaGithubSquare, FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative liquid-glass border-t border-primary-400/30">
      {/* Background decoration with liquid blobs */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="absolute top-0 left-10 w-64 h-64 bg-primary-500/10 liquid-blob blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-accent-500/10 liquid-blob blur-3xl" style={{ animationDelay: '7s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Copyright section */}
          <div className="text-center md:text-left">
            <p className="text-gray-200 text-sm sm:text-base">
              Copyright 2025 - <span className="text-gradient font-semibold">MARQUES ADRIEN</span>
            </p>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 flex items-center justify-center md:justify-start gap-1">
              Fait avec <FaHeart className="text-red-400 text-xs animate-pulse" /> et beaucoup de café
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-gray-300 text-xs sm:text-sm hidden md:block">Suivez-moi :</span>
            <div className="flex gap-3">
              <motion.a 
                href='https://www.linkedin.com/in/adrien-marques-755393181/' 
                target='_blank' 
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 liquid-glass-hover liquid-glass rounded-xl transition-all duration-300 group"
              >
                <FaLinkedin className='text-gray-200 w-5 h-5 group-hover:text-primary-400 transition-colors' />
              </motion.a>
              <motion.a 
                href='https://github.com/marcucus' 
                target='_blank' 
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 liquid-glass-hover liquid-glass rounded-xl transition-all duration-300 group"
              >
                <FaGithubSquare className='text-gray-200 w-5 h-5 group-hover:text-primary-400 transition-colors' />
              </motion.a>
            </div>
          </div>
          
        </div>

        {/* Separator line with gradient */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary-500/20 text-center">
          <p className="text-gray-300 text-xs sm:text-sm">
            Tous droits réservés • Développé avec <span className="text-primary-400">Next.js</span> & <span className="text-primary-400">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

