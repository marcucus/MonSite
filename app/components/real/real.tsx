'use client';

import React from 'react';
import Image from "next/image";
import ranking from '../../../public/ranking.png';
import dijoma from '../../../public/dijoma.png';
import bones from '../../../public/bonesmarketplace.png';
import lcf from '../../../public/lcf.png';
import { MdComputer } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

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


const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-2 h-full"> {/* Ajoutez des padding horizontaux */}
          <div className="bg-[#14143A] p-4 rounded shadow flex flex-col gap-2 text-white flex-grow h-[644px]"> {/* Style de chaque élément */}
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : lcf} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#b8b8f8] via-[#6a6a94] to-[#4747ff] animate-shine mb-4'>
                {
                item.title.includes("Dijoma") 
                ? dijomas[0].description 
                : item.title.includes("Foudroyer") 
                  ? rankings[0].description 
                  : item.title.includes("Bones") 
                    ? marketplaces[0].description 
                    : lcfautos[0].description
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
    arrows:false,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-2 h-full"> {/* Ajoutez des padding horizontaux */}
          <div className="bg-[#14143A] p-4 rounded shadow flex flex-col gap-2 text-white flex-grow h-[644px]"> {/* Style de chaque élément */}
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : lcf} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#b8b8f8] via-[#6a6a94] to-[#4747ff] animate-shine mb-4'>
                {
                item.title.includes("Dijoma") 
                ? dijomas[0].description 
                : item.title.includes("Foudroyer") 
                  ? rankings[0].description 
                  : item.title.includes("Bones") 
                    ? marketplaces[0].description 
                    : lcfautos[0].description
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
    arrows:false,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-2 h-full"> {/* Ajoutez des padding horizontaux */}
          <div className="bg-[#14143A] p-4 rounded shadow flex flex-col gap-2 text-white flex-grow h-[644px]"> {/* Style de chaque élément */}
          <Image src={item.title.includes("Dijoma") ? dijoma : item.title.includes("Foudroyer") ? ranking : item.title.includes("Bones") ? bones : lcf} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl"/>
            <div className='py-2 flex-grow'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#b8b8f8] via-[#6a6a94] to-[#4747ff] animate-shine mb-4'>
                {
                item.title.includes("Dijoma") 
                ? dijomas[0].description 
                : item.title.includes("Foudroyer") 
                  ? rankings[0].description 
                  : item.title.includes("Bones") 
                    ? marketplaces[0].description 
                    : lcfautos[0].description
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
  ];

  return (
    <>
      <div className="hidden lg:block">
        <Carousel items={items} />
      </div>
      <div className="hidden md:block lg:hidden">
          <CarouselTab items={items} />
      </div>
      <div className="block md:hidden">
          <CarouselMobile items={items} />
      </div>
    </>
  // <div className="p-10 flex justify-center content-center items-center">
  //   {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
  //   <div className="grid grid-cols-3 justify-center content-center items-center gap-4">

  //     <div className="bg-[#14143A] rounded-2xl gap-0 flex flex-col">
  //       <div aria-hidden="true" className="relative p-10">
  //         <Image src={ranking} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl">
  //         </Image>
  //       </div>

  //       <div className="relative mx-auto -mt-0 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
  //         <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
  //           <h2 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl mt-4">Foudroyer Ranking</h2>
  //           <p className="mt-4 text-gray-500">
  //             Partie du site internet <a href='https://www.foudroyer.com' className='font-bold'>foudroyer.com</a>, Ranking permet 
  //             d&rsquo;enregistrer des mots-clés afin de stocker leurs positionnement sur les moteurs de recherche : Google, Yandex, Bing.
  //           </p>
  //         </div>

  //         <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
  //           {rankings.map((ranking) => (
  //             <div key={ranking.name} className="border-t border-gray-200 pt-4">
  //               <dt className="font-medium text-gray-500">{ranking.name}</dt>
  //               <dd className="mt-2 text-sm text-gray-500">{ranking.description}</dd>
  //             </div>
  //           ))}
  //         </dl>
  //       </div>
  //     </div>

  //     <div className="bg-[#14143A] rounded-2xl gap-10 flex flex-col">
  //       <div aria-hidden="true" className="relative p-10">
  //         <Image src={dijoma} alt={''} width={1314} height={929} className="h-96 w-full object-cover object-center rounded-xl">
  //         </Image>
  //       </div>

  //       <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
  //         <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
  //           <h2 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl mt-12">DIJOMA</h2>
  //           <p className="mt-4 text-gray-500">
  //             Site internet <a href='https://tourmaline-cucurucho-f2dac4.netlify.app/' className='font-bold'>dijoma.be</a>. C&rsquo;est un site vitrine pour l&rsquo;entreprise Dijoma
  //           </p>
  //         </div>

  //         <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
  //           {dijomas.map((dijoma) => (
  //             <div key={dijoma.name} className="border-t border-gray-200 pt-4">
  //               <dt className="font-medium text-gray-500">{dijoma.name}</dt>
  //               <dd className="mt-2 text-sm text-gray-500">{dijoma.description}</dd>
  //             </div>
  //           ))}
  //         </dl>
  //       </div>
  //     </div>

  //   </div>
  // </div>

  );
};

export default Real;
