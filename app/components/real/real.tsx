'use client';

import React from 'react';
import Image from "next/image";
import ranking from '../../../public/ranking.png';
import dijoma from '../../../public/dijoma.png';
import bones from '../../../public/bonesmarketplace.png';
import lcf from '../../../public/lcf.png';
import forest from '../../../public/forestria.png'
import { MdComputer } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Notification from '../notifs/notifications';
import Slider from 'react-slick';

interface CarouselItem {
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const rankings = [
  { name: 'Technologies Front', description: 'React, Gatsby, Tailwind CSS, NestJS, PostgreSQL' },
]

const dijomas = [
  { name: 'Technologies Front', description: 'React, Tailwind CSS, Netlify' },
]

const lcfautos = [
  { name: 'Technologies Front', description: 'React, Tailwind CSS, NextJS, Firebase' },
]

const marketplaces = [
  { name: 'Technologies Front', description: 'React, Tailwind CSS, NextJS, Firebase' },
]

const forestria = [
  { name: 'Technologies Front', description: 'Symfony, Twig, MySQL' },
]

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div 
      onClick={onClick} 
      className="absolute top-[40%] -right-8 w-[30px] h-[30px] text-gray-200 rounded-full bg-[#14143A] 
      border-2 shadow-sm shadow-[#14143A] border-[#47478d] flex justify-center content-center items-center 
      transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
        <SlArrowRight className='ml-0.5' />
      </div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div 
      onClick={onClick} 
      className="absolute top-[40%] -left-8 w-[30px] h-[30px] text-gray-200 rounded-full bg-[#14143A] 
      border-2 shadow-sm shadow-[#14143A] border-[#47478d] flex justify-center content-center items-center 
      transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
        <SlArrowLeft className='mr-0.5' />
      </div>
  );
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-2 h-full"> {/* Ajoutez des padding horizontaux */}
          <div className="bg-[#14143A] p-4 rounded-xl shadow flex flex-col gap-2 text-white flex-grow h-[644px]"> {/* Style de chaque élément */}
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : item.title.includes("LCF") ? lcf : forest} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#b8b8f8] via-[#6a6a94] to-[#4747ff] animate-shine mb-4'>
                {
                item.title.includes("Dijoma") 
                ? dijomas[0].description 
                : item.title.includes("Foudroyer") 
                  ? rankings[0].description 
                  : item.title.includes("Bones") 
                    ? marketplaces[0].description 
                    : item.title.includes("LCF") 
                      ? lcfautos[0].description
                      : forestria[0].description
                }
              </p>
              <h3 className="2xl:text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-[13px] 2xl:text-base">{item.description}</p>
            </div>

              <div className='flex justify-between mt-auto'>
                {item.title.includes("Dijoma") && (
                  <>
                    <a href="https://tourmaline-cucurucho-f2dac4.netlify.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/dijotest" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Foudroyer") && (
                  <>
                    <a href="https://www.foudroyer.com/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("Bones") && (
                  <>
                    <a href="https://playbones.xyz/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("LCF") && (
                  <>
                    <a href="https://lcfauto-performance.vercel.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/carproject" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Forestria") && (
                  <>
                    <div className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116] cursor-not-allowed">
                      <MdComputer/> UNAIVALABLE
                    </div>
                    <a href="https://github.com/marcucus/forestria" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}
              </div>

          </div>
        </div>
      ))}
    </Slider>
  );
};


const CarouselMobile: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-2 h-full"> {/* Ajoutez des padding horizontaux */}
          <div className="bg-[#14143A] p-4 rounded-xl shadow flex flex-col gap-2 text-white flex-grow h-[644px]"> {/* Style de chaque élément */}
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : item.title.includes("LCF") ? lcf : forest} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#b8b8f8] via-[#6a6a94] to-[#4747ff] animate-shine mb-4'>
                {
                item.title.includes("Dijoma") 
                ? dijomas[0].description 
                : item.title.includes("Foudroyer") 
                  ? rankings[0].description 
                  : item.title.includes("Bones") 
                    ? marketplaces[0].description 
                    : item.title.includes("LCF") 
                      ? lcfautos[0].description
                      : forestria[0].description
                }
              </p>
              <h3 className="2xl:text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-[13px] 2xl:text-base">{item.description}</p>
            </div>

              <div className='flex justify-between mt-auto'>
                {item.title.includes("Dijoma") && (
                  <>
                    <a href="https://tourmaline-cucurucho-f2dac4.netlify.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/dijotest" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Foudroyer") && (
                  <>
                    <a href="https://www.foudroyer.com/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("Bones") && (
                  <>
                    <a href="https://playbones.xyz/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("LCF") && (
                  <>
                    <a href="https://lcfauto-performance.vercel.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/carproject" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Forestria") && (
                  <>
                    <div className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116] cursor-not-allowed">
                      <MdComputer/> UNAIVALABLE
                    </div>
                    <a href="https://github.com/marcucus/forestria" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}
              </div>

          </div>
        </div>
      ))}
    </Slider>
  );
};

const CarouselTab: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-2 h-full"> {/* Ajoutez des padding horizontaux */}
          <div className="bg-[#14143A] p-4 rounded-xl shadow flex flex-col gap-2 text-white flex-grow h-[644px]"> {/* Style de chaque élément */}
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : item.title.includes("LCF") ? lcf : forest} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#b8b8f8] via-[#6a6a94] to-[#4747ff] animate-shine mb-4'>
                {
                item.title.includes("Dijoma") 
                ? dijomas[0].description 
                : item.title.includes("Foudroyer") 
                  ? rankings[0].description 
                  : item.title.includes("Bones") 
                    ? marketplaces[0].description 
                    : item.title.includes("LCF") 
                      ? lcfautos[0].description
                      : forestria[0].description
                }
              </p>
              <h3 className="2xl:text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-[13px] 2xl:text-base">{item.description}</p>
            </div>

              <div className='flex justify-between mt-auto'>
                {item.title.includes("Dijoma") && (
                  <>
                    <a href="https://tourmaline-cucurucho-f2dac4.netlify.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/dijotest" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Foudroyer") && (
                  <>
                    <a href="https://www.foudroyer.com/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("Bones") && (
                  <>
                    <a href="https://playbones.xyz/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("LCF") && (
                  <>
                    <a href="https://lcfauto-performance.vercel.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/carproject" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Forestria") && (
                  <>
                    <div className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116] cursor-not-allowed">
                      <MdComputer/> UNAIVALABLE
                    </div>
                    <a href="https://github.com/marcucus/forestria" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-[#e6d116]">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}
              </div>

          </div>
        </div>
      ))}
    </Slider>
  );
};

const Real = () => {
  
  const items = [
    { 
      title: "Bones - Marketplace", 
      description: "Application web reliée au jeu Bones, permettant la récupération, l'utilisation des objets liés au jeu."
    },
    { 
      title: "Foudroyer Ranking", 
      description: "Partie du site internet Fouydroyer.com, Ranking permet d'enregistrer des mots-clés afin de stocker leurs positionnement sur les moteurs de recherche." 
    },
    { 
      title: "LCF AUTO PERFORMANCE", 
      description: "Site vitrine présentant toutes les activités de l'entreprise LCF Auto performance."
    },
    { 
      title: "Dijoma", 
      description: "Site vitrine présentant toutes les activités de l'entreprise Dijoma." 
    },
    { 
      title: "Forestria", 
      description: "Site représentant tout les parcours de randonnées dans la ville de Limoges sous forme de carte interactive." 
    },
  ];

  return (
    <>
      <div className="pt-10 pb-2">
        <div className='flex justify-center content-center items-center text-3xl text-[#e6d116] font-bold'>MES PROJETS</div>
        <div className='flex justify-center content-center items-center text-[13px] md:text-[18px] text-[#e2e2e2] mb-4'>Mes réalisations et les projets où je suis intervenu</div>
      </div>

      <div className="hidden lg:block cursor-pointer">
        <Carousel items={items} />
      </div>

      <div className="hidden md:block lg:hidden cursor-pointer">
          <CarouselTab items={items} />
      </div>
      
      <div className="block md:hidden cursor-pointer">
          <CarouselMobile items={items} />
      </div>
    </>
  );
};

export default Real;
