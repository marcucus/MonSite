'use client';

import React from 'react';
import Notification from "../notifs/notifications";
import localFont from "next/font/local";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

  const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

const Home = () => {

  return (
    <div className="block w-full">      
        <div className='p-20 uppercase bg-gray-900 w-full h-full'>
          <p className='text-[10px] font-bold text-[#e6d116]'>
            Developpeur Web
          </p>
          <p className='text-[18px] -mt-1 font-bold text-[#6e6e6e]'>
            Qui suis-je ?
          </p>

          <h2 className={`${font.className} text-3xl font-bold text-[#e6d116] sm:text-4xl tracking-wide normal-case`}>Adrien Marques</h2>
          <p className='mt-2 font-normal text-[#e0e0e0] normal-case w-[224px] md:w-[424px]'>
            Développeur Full-Stack, je suis passionné par l'informatique.
            Je créer des applications ou sites internet afin d'offrir des expériences rapides et élégantes
          </p>
          <p className='mt-4'>
            <span className='text-white text-[12px]'>Suivez-moi :</span>
            <div className='flex space-x-2 mt-1'>
              <a href='https://www.linkedin.com/in/adrien-marques-755393181/' target='_blank'>
                <FaLinkedin className='text-white w-8 h-8 hover:text-[#e6d116] cursor-pointer'/>
              </a>
              <a href='https://github.com/marcucus' target='_blank'>
                <FaGithubSquare className='text-white w-8 h-8 hover:text-[#e6d116] cursor-pointer'/>
              </a>
            </div>
          </p>
        </div>

        <div className='p-20 uppercase bg-[#000814] w-full h-full'>
          
        </div>
    </div> 
  );
};

export default Home;
