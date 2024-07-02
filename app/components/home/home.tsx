'use client';

import React, { useEffect, useState } from 'react';
import localFont from "next/font/local";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import fond from '../../../public/oks.png'
import { motion } from 'framer-motion';

  const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

const Home = () => {

  const [isScrolled, setIsScrolled] = useState(false);
    
  const anim = {
      hidden:{x:-200, opacity:0},
      visible:{x:0, opacity:1},
  }

  const animX = {
    hidden:{x:200, opacity:0},
    visible:{x:0, opacity:1},
}

  const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

return (
  <>
    <div className="flex w-full font-semibold justify-center text-center sm:text-start content-center items-center">
      <div className='block sm:grid sm:grid-cols-2 p-10 lg:p-20 uppercase 2xl:w-[70%] justify-center items-center content-center h-[calc(100vh)] relative'>
        <motion.div
          variants={anim}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <p className='text-[10px] xl:text-[15px] font-bold text-[#e6d116]'>
            Developpeur Web
          </p>
          <p className='text-[18px] -mt-1 font-bold text-[#6e6e6e]'>
            Qui suis-je ?
          </p>

          <h2 className={`${font.className} text-3xl font-bold text-[#e6d116] sm:text-4xl tracking-wide normal-case`}>Adrien Marques</h2>
          <p className='mt-2 font-normal text-[#e0e0e0] normal-case xl:text-[18px] md:w-[424px] 2xl:text-[22px] 2xl:w-[600px]'>
            Développeur Full-Stack, je suis passionné par l&rsquo;informatique.
            Je créer des applications ou sites internet afin d&rsquo;offrir des expériences rapides et élégantes.
          </p>
          <p className='mt-4'>
            <span className='text-white text-[12px]'>Suivez-moi :</span>
            <div className='flex space-x-2 mt-1 justify-center sm:justify-start'>
              <a href='https://www.linkedin.com/in/adrien-marques-755393181/' target='_blank'>
                <FaLinkedin className='text-white w-8 h-8 hover:text-[#e6d116] cursor-pointer' />
              </a>
              <a href='https://github.com/marcucus' target='_blank'>
                <FaGithubSquare className='text-white w-8 h-8 hover:text-[#e6d116] cursor-pointer' />
              </a>
            </div>
          </p>
        </motion.div>
        
        <div className='md:absolute md:right-0 md:pr-10 md:w-[300px] lg:w-auto'>
          <motion.div
            variants={animX}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <Image src={fond} alt={'image'} height={500} width={500} />
          </motion.div>
        </div>
      </div>
    </div>

  </>
  );
};

export default Home;
