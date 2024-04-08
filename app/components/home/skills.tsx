'use client';

import React, { useState } from 'react';
import localFont from "next/font/local";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

  const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

const Skills = () => {

    const ski =[
        {
            name: 'React', 
            level : 2, 
            pict:'/React.png'
        },
        {
            name: 'Tailwind CSS', 
            level : 1, 
            pict:'/Tailwind.png'
        },
        {
            name: 'Docker', 
            level : 0, 
            pict:'/Docker.svg'
        },
        {
            name: 'Angular', 
            level : 0, 
            pict:'/Angular.png'
        },
        {
            name: 'Symfony', 
            level : 1, 
            pict:'/Symfony.png'
        },
        {
            name: 'PHP', 
            level : 2, 
            pict:'/Php.png'
        },
        {
            name: 'JavaScript', 
            level : 1, 
            pict:'/Javascript.png'
        },
    ]

    const SkillCard = ({ skill }:any) => {
        let level;
        switch (skill.level) {
            case 1:
                level = (<div className='flex w-full justify-center items-center content-center font-bold text-orange-500'>Intermédiaire</div>)
                break;
            case 2:
                level = (<div className='flex w-full justify-center items-center content-center font-bold text-red-500'>Expérimenté</div>)
                break;
            default:
                level = (<div className='flex w-full justify-center items-center content-center font-bold text-green-500'>Junior</div>)
        }
        return (
            <motion.div
                className="flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#C158F233] border border-[#C158F2] w-[200px] h-[207px] gap-4 justify-center items-center content-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image src={skill.pict} width={100} height={100} alt='image skills' />
                <div>
                    <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">{skill.name}</h3>
                    <p className="text-sm text-gray-200">{level}</p>
                </div>
            </motion.div>
        );
    };
      
      const SkillCarousel = ({ skills }:any) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const nextSkill = () => {
            setCurrentIndex((prevIndex: any) => (prevIndex + 1) % skills.length);
        };
    
        const prevSkill = () => {
            setCurrentIndex((prevIndex: any) => (prevIndex - 1 + skills.length) % skills.length);
        };

        return (
            <>
                <div className="flex md:hidden justify-center items-center overflow-hidden">
                    <button onClick={prevSkill} className="px-4 py-2 mr-8 w-[44px] h-[44px] text-gray-200 rounded bg-[#C158F233] border-2 shadow-sm shadow-[#C158F2] border-[#C158F2] flex justify-center content-center items-center transition-all duration-500 ease-in-out transform hover:scale-105 relative"><SlArrowLeft className='absolute w-6 h-6 flex justify-center content-center items-center' /></button>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            className="flex overflow-hidden"
                            initial={{ opacity: 1, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 1, x: "0" }}
                            transition={{ duration: 0.2 }}
                        >
                            {[currentIndex].map((index: number) => {
                                const skillIndex = (index + skills.length) % skills.length;
                                return <SkillCard key={index} skill={skills[skillIndex]} />;
                            })}
                        </motion.div>
                    </AnimatePresence>
                    <button onClick={nextSkill} className="px-4 py-2 ml-8 w-[44px] h-[44px] text-gray-200 rounded bg-[#C158F233] border-2 shadow-sm shadow-[#C158F2] border-[#C158F2] flex justify-center content-center items-center transition-all duration-500 ease-in-out transform hover:scale-105 relative"><SlArrowRight className='absolute w-6 h-6 flex justify-center content-center items-center' /></button>
                </div>

                <div className="hidden md:flex lg:hidden justify-center items-center overflow-hidden">
                    <button onClick={prevSkill} className="px-4 py-2 mr-8 w-[44px] h-[44px] text-gray-200 rounded bg-[#C158F233] border-2 shadow-sm shadow-[#C158F2] border-[#C158F2] flex justify-center content-center items-center transition-all duration-500 ease-in-out transform hover:scale-105 relative"><SlArrowLeft className='absolute w-6 h-6 flex justify-center content-center items-center' /></button>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            className="flex overflow-hidden"
                            initial={{ opacity: 1, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 1, x: "0" }}
                            transition={{ duration: 0.2 }}
                        >
                            {[currentIndex - 1, currentIndex, currentIndex + 1].map((index: number) => {
                                const skillIndex = (index + skills.length) % skills.length;
                                return <SkillCard key={index} skill={skills[skillIndex]} />;
                            })}
                        </motion.div>
                    </AnimatePresence>
                    <button onClick={nextSkill} className="px-2 py-2 ml-8 w-[44px] h-[44px] text-gray-200 rounded bg-[#C158F233] border-2 shadow-sm shadow-[#C158F2] border-[#C158F2] flex justify-center content-center items-center transition-all duration-500 ease-in-out transform hover:scale-105 relative"><SlArrowRight className='absolute w-6 h-6 flex justify-center content-center items-center' /></button>
                </div>

                <div className="hidden lg:flex justify-center items-center overflow-hidden">
                    <button onClick={prevSkill} className="px-2 py-2 mr-8 w-[44px] h-[44px] text-gray-200 rounded bg-[#C158F233] border-2 shadow-sm shadow-[#C158F2] border-[#C158F2] flex justify-center content-center items-center transition-all duration-500 ease-in-out transform hover:scale-105 relative"><SlArrowLeft className='absolute w-6 h-6 flex justify-center content-center items-center' /></button>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                className="flex overflow-hidden"
                                initial={{ opacity: 1, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 1, x: "0" }}
                                transition={{ duration: 0.2 }}
                            >
                                {[currentIndex - 2, currentIndex - 1, currentIndex, currentIndex + 1, currentIndex + 2].map((index: number) => {
                                    const skillIndex = (index + skills.length) % skills.length;
                                    return <SkillCard key={index} skill={skills[skillIndex]} />;
                                })}
                            </motion.div>
                        </AnimatePresence>
                    <button onClick={nextSkill} className="px-2 py-2 ml-8 w-[44px] h-[44px] text-gray-200 rounded bg-[#C158F233] border-2 shadow-sm shadow-[#C158F2] border-[#C158F2] flex justify-center content-center items-center transition-all duration-500 ease-in-out transform hover:scale-105 relative"><SlArrowRight className='absolute w-6 h-6 flex justify-center content-center items-center' /></button>
                </div>
                
                </>
          );
        };

return (
  <>
    <div className="bg-[#010120] select-none pt-[20px] pb-[40px]">
        <div className='flex justify-center content-center items-center text-[18px] text-[#e6d116] font-bold'>MES COMPETENCES</div>
        <div className='flex justify-center content-center items-center text-[18px] text-[#e2e2e2] mb-4'>Evoluent</div>
        <SkillCarousel skills={ski} />
    </div>
  </>
  );
};

export default Skills;
