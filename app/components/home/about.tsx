'use client';

import React from 'react';
import localFont from "next/font/local";
import { FaDownload } from "react-icons/fa6";
import Image from 'next/image';

  const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

const About = () => {

return (
  <>
    <div className="flex w-full justify-center content-center text-center sm:text-start bg-[#010120] items-center">
      <div className='flex sm:grid sm:grid-cols-2 p-10 lg:p-20 uppercase xl:w-[70%] justify-center items-center content-center relative'>
        <div>
            ss<Image src={''} alt={''} />
        </div>
        
        <div className='block'>
            <p className='text-[10px] font-bold text-[#e6d116]'>
                A propos
            </p>

            <p className={`text-[18px] -mt-1 tracking-wide normal-case text-[#ffffff] ${font.className}`}>
                Adrien Marques
            </p>

            <p className='mt-2 font-normal text-[#e0e0e0] normal-case'>
            Développeur basé en région Parisienne, je suis développeur FullStack spécialisé des deux côtés Back et Front.
            Je teste et optimise niveau SEO les applications que je développe. 
            </p>
            <span className='flex justify-center items-center content-center md:justify-normal mt-4'>
                <a href='../../MarquesAdrienCV.pdf' download className='flex text-[15px] font-semibold lg:text-[15px] w-[170px] justify-center items-center content-center bg-[#e6d116] rounded-md px-4 py-2 gap-3'>
                    <FaDownload /> Mon CV
                </a>
            </span>
        </div>
      </div>
    </div>
  </>
  );
};

export default About;
