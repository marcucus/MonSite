import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white p-4 text-center">
      <p>Copyright 2024 - MARQUES ADRIEN - Tous droits réservés</p>
      <div className="flex space-x-2 justify-center">
        <a href='https://www.linkedin.com/in/adrien-marques-755393181/' target='_blank'>
          <FaLinkedin className='text-white w-6 h-6 hover:text-[#e6d116] cursor-pointer' />
        </a>
        <a href='https://github.com/marcucus' target='_blank'>
          <FaGithubSquare className='text-white w-6 h-6 hover:text-[#e6d116] cursor-pointer' />
        </a>
      </div>
    </div>
  );
};

export default Footer;

