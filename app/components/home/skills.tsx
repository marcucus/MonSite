'use client';

import React from 'react';
import localFont from "next/font/local";
import { FaDownload } from "react-icons/fa6";
import Image from 'next/image';

  const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

const Skills = () => {

    const skills =[
        {
            name: 'React', 
            level : 3, 
            pict:''
        },
        {
            name: 'Tailwind CSS', 
            level : 3, 
            pict:''
        },
        {
            name: 'Docker', 
            level : 1, 
            pict:''
        },
        {
            name: 'Angular', 
            level : 0, 
            pict:''
        },
        {
            name: 'Symfony', 
            level : 3, 
            pict:''
        },
        {
            name: 'JavaScript', 
            level : 2, 
            pict:''
        },
        {
            name: 'PHP', 
            level : 2, 
            pict:''
        },
    ]

return (
  <>
    <div className="flex w-full justify-center content-center text-center sm:text-start bg-[#010120] items-center">
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
    </div>
  </>
  );
};

export default Skills;
