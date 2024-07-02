'use client';

import React from 'react';
import "swiper/css";
import 'swiper/css/scrollbar';
import CustomArrows from './slider';
import CustomArrowsMobile from './sliderMobile';

const Skills = () => {

return (
  <>
    <div className="bg-[#010120] select-none flex flex-col justify-center items-center content-center p-10">
        <div className='flex justify-center content-center items-center text-[18px] text-[#e6d116] font-bold'>MES COMPETENCES</div>
        <div className='flex justify-center content-center items-center text-[18px] text-[#e2e2e2] mb-4'>Evoluent</div>
        <div className='flex justify-center items-center content-center'>
            <div className='hidden lg:block justify-center items-center content-center max-w-[630px]'>
                <CustomArrows/>
            </div> 
            <div className='block lg:hidden justify-center items-center content-center max-w-[220px]'>
                <CustomArrowsMobile/>
            </div> 
        </div> 
    </div>
  </>
  );
};

export default Skills;
