import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#00001f] text-white p-4 border-t-[2px] border-[#47478d] w-full flex items-center justify-between">
      <div className="flex-grow flex justify-center">
        <p className="mx-auto text-[8px] md:text-[12px]">Copyright 2024 - MARQUES ADRIEN - Tous droits réservés</p>
      </div>
      <div className="flex space-x-4">
        <a href='https://www.linkedin.com/in/adrien-marques-755393181/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='text-white w-6 h-6 hover:text-[#e6d116] cursor-pointer' />
        </a>
        <a href='https://github.com/marcucus' target='_blank' rel='noopener noreferrer'>
          <FaGithubSquare className='text-white w-6 h-6 hover:text-[#e6d116] cursor-pointer' />
        </a>
      </div>
    </div>
  );
};

export default Footer;

