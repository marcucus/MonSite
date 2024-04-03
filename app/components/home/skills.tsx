'use client';

import React, { useState } from 'react';
import localFont from "next/font/local";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image from 'next/image';


  const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

const Skills = () => {

    const ski =[
        {
            name: 'React', 
            level : 3, 
            pict:'/React.png'
        },
        {
            name: 'Tailwind CSS', 
            level : 3, 
            pict:'/Tailwind.png'
        },
        {
            name: 'Docker', 
            level : 1, 
            pict:'/Docker.svg'
        },
        {
            name: 'Angular', 
            level : 0, 
            pict:'/Angular.png'
        },
        {
            name: 'Symfony', 
            level : 3, 
            pict:'/Symfony.png'
        },
        {
            name: 'JavaScript', 
            level : 2, 
            pict:'/Javascript.png'
        },
        {
            name: 'PHP', 
            level : 2, 
            pict:'/Php.png'
        },
    ]

    const SkillCard = ({ skill }:any) => {
        let level;
        switch(skill.level){
            case 1 :
                level = (<div className='flex w-full justify-center items-center content-center font-bold text-orange-500'>Intermédiaire</div>)
                break;
            case 2 :
                level = (<div className='flex w-full justify-center items-center content-center font-bold text-red-500'>Expérimenté</div>)
                break;
            default :
                level = (<div className='flex w-full justify-center items-center content-center font-bold text-green-500'>Junior</div>)
        }
    return(
        <div className="flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#000061] w-[200px] h-[207px] gap-4 justify-center items-center content-center">
            <Image src={skill.pict} width={100} height={100} alt='image skills'/> 
            <div>
                <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">{skill.name}</h3>
                <p className="text-sm text-gray-200">{level}</p>  
            </div>
        </div>
      )};
      
      const SkillCarousel = ({ skills }:any) => {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const nextSkill = () => {
          setCurrentIndex((prevIndex:any) => (prevIndex + 1) % skills.length);
        };
      
        const prevSkill = () => {
          setCurrentIndex((prevIndex:any) => (prevIndex - 1 + skills.length) % skills.length);
        };

        return (
            <div className="flex justify-center items-center">
              <button onClick={prevSkill} className="px-4 py-2 mr-8 text-gray-200 rounded"><SlArrowLeft className='w-6 h-6'/></button>
                <SkillCard skill={skills[currentIndex]} />
              <button onClick={nextSkill} className="px-4 py-2 ml-8 text-gray-200 rounded"><SlArrowRight className='w-6 h-6'/></button>
            </div>
          );
        };

return (
  <>

    <div className="bg-[#010120]">
        <SkillCarousel skills={ski} />
    </div>

    {/* <div className="flex w-full justify-center content-center text-center sm:text-start bg-[#010120] items-center">
        <div className='block w-full text-white'>
            <div className='flex justify-center items-center content-center gap-4 w-full overflow-hidden'>
            {skills.map((skill,index) =>{
                let level;
                switch(skill.level){
                    case 1 :
                        level = (<div className='flex w-full justify-center items-center content-center'>Intermédiaire</div>)
                        break;
                    case 2 :
                        level = (<div className='flex w-full justify-center items-center content-center'>Expérimenté</div>)
                        break;
                    default :
                        level = (<div className='flex w-full justify-center items-center content-center'>Junior</div>)
                }
                    return(
                        <div
                            key={index}
                            className=''
                        >
                            <div className='flex w-full  justify-center items-center content-center'>
                                {skill.pict}
                            </div>

                            <div className='flex w-full  justify-center items-center content-center'>
                                {skill.name}
                            </div>

                            {level}

                        </div>
                    )
            })}
            </div>
        </div>
    </div> */}
  </>
  );
};

export default Skills;
