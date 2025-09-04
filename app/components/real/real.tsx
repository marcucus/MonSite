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
      className="absolute top-[40%] -right-8 w-[40px] h-[40px] text-gray-200 rounded-xl glass
      border border-primary-500/30 flex justify-center content-center items-center 
      transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:border-primary-400 hover:bg-primary-600/20">
        <SlArrowRight className='ml-0.5' />
      </div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div 
      onClick={onClick} 
      className="absolute top-[40%] -left-8 w-[40px] h-[40px] text-gray-200 rounded-xl glass
      border border-primary-500/30 flex justify-center content-center items-center 
      transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:border-primary-400 hover:bg-primary-600/20">
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
        <div key={index} className="px-2 py-4 h-full overflow-visible">
          <div className="card-modern p-6 flex flex-col gap-4 text-white h-[644px] group hover:scale-[1.02] transition-all duration-300 relative z-10"> 
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : item.title.includes("LCF") ? lcf : forest} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 animate-shine mb-4'>
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
              <h3 className="2xl:text-lg font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-[13px] 2xl:text-base text-gray-300">{item.description}</p>
            </div>

              <div className='flex justify-between mt-auto'>
                {item.title.includes("Dijoma") && (
                  <>
                    <a href="https://tourmaline-cucurucho-f2dac4.netlify.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/dijotest" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Foudroyer") && (
                  <>
                    <a href="https://www.foudroyer.com/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed text-gray-500"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("Bones") && (
                  <>
                    <a href="https://playbones.xyz/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed text-gray-500"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("LCF") && (
                  <>
                    <a href="https://lcfauto-performance.vercel.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/carproject" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Forestria") && (
                  <>
                    <div className="flex justify-center items-center content-center gap-1 font-semibold text-gray-500 cursor-not-allowed">
                      <MdComputer/> UNAVAILABLE
                    </div>
                    <a href="https://github.com/marcucus/forestria" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
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
        <div key={index} className="px-2 py-4 h-full overflow-visible">
          <div className="card-modern p-6 flex flex-col gap-4 text-white h-[644px] group hover:scale-[1.02] transition-all duration-300 relative z-10"> 
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : item.title.includes("LCF") ? lcf : forest} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 animate-shine mb-4'>
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
              <h3 className="2xl:text-lg font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-[13px] 2xl:text-base text-gray-300">{item.description}</p>
            </div>

              <div className='flex justify-between mt-auto'>
                {item.title.includes("Dijoma") && (
                  <>
                    <a href="https://tourmaline-cucurucho-f2dac4.netlify.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/dijotest" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Foudroyer") && (
                  <>
                    <a href="https://www.foudroyer.com/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed text-gray-500"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("Bones") && (
                  <>
                    <a href="https://playbones.xyz/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed text-gray-500"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("LCF") && (
                  <>
                    <a href="https://lcfauto-performance.vercel.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/carproject" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Forestria") && (
                  <>
                    <div className="flex justify-center items-center content-center gap-1 font-semibold text-gray-500 cursor-not-allowed">
                      <MdComputer/> UNAVAILABLE
                    </div>
                    <a href="https://github.com/marcucus/forestria" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
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
        <div key={index} className="px-2 py-4 h-full overflow-visible">
          <div className="card-modern p-6 flex flex-col gap-4 text-white h-[644px] group hover:scale-[1.02] transition-all duration-300 relative z-10"> 
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : item.title.includes("LCF") ? lcf : forest} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 animate-shine mb-4'>
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
              <h3 className="2xl:text-lg font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-[13px] 2xl:text-base text-gray-300">{item.description}</p>
            </div>

              <div className='flex justify-between mt-auto'>
                {item.title.includes("Dijoma") && (
                  <>
                    <a href="https://tourmaline-cucurucho-f2dac4.netlify.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/dijotest" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Foudroyer") && (
                  <>
                    <a href="https://www.foudroyer.com/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed text-gray-500"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("Bones") && (
                  <>
                    <a href="https://playbones.xyz/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> SITE
                    </a>
                    <div className="flex justify-center items-center content-center gap-1 cursor-not-allowed text-gray-500"> 
                      <IoLogoGithub/> UNAVAILABLE
                    </div>
                  </>
                )}

                {item.title.includes("LCF") && (
                  <>
                    <a href="https://lcfauto-performance.vercel.app/" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <MdComputer/> LIVE DEMO
                    </a>
                    <a href="https://github.com/marcucus/carproject" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
                      <IoLogoGithub/> CODE
                    </a>
                  </>
                )}

                {item.title.includes("Forestria") && (
                  <>
                    <div className="flex justify-center items-center content-center gap-1 font-semibold text-gray-500 cursor-not-allowed">
                      <MdComputer/> UNAVAILABLE
                    </div>
                    <a href="https://github.com/marcucus/forestria" target="_blank" className="flex justify-center items-center content-center gap-1 font-semibold text-gray-300 hover:text-accent-400 transition-colors duration-300">
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
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 relative overflow-hidden bg-dark-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-accent-900/5"></div>
      
      <div className='flex justify-center content-center items-center relative z-10 max-w-6xl mx-auto'>
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass rounded-full mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
            <span className='text-xs sm:text-sm font-bold text-accent-400 uppercase tracking-wider'>Portfolio</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0'>
            Mes réalisations et les projets où je suis intervenu
          </p>
        </div>
      </div>

      <div className="hidden lg:block cursor-pointer relative z-10">
        <Carousel items={items} />
      </div>

      <div className="hidden md:block lg:hidden cursor-pointer relative z-10">
          <CarouselTab items={items} />
      </div>
      
      <div className="block md:hidden cursor-pointer relative z-10">
          <CarouselMobile items={items} />
      </div>
    </div>
  );
};

export default Real;
