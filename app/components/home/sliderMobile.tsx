import React, { useRef } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div 
      onClick={onClick} 
      className="absolute top-[40%] -right-4 sm:-right-6 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] text-gray-200 rounded-lg glass border-2 
        border-primary-500/50 flex justify-center content-center items-center transition-all 
        duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-500/20 hover:shadow-glow cursor-pointer z-10"
    >
      <SlArrowRight className='w-3 h-3 sm:w-4 sm:h-4' />
    </div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div 
      onClick={onClick} 
      className="absolute top-[40%] -left-4 sm:-left-6 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] text-gray-200 rounded-lg glass border-2 
        border-primary-500/50 flex justify-center content-center items-center transition-all 
        duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-500/20 hover:shadow-glow cursor-pointer z-10"
    >
      <SlArrowLeft className='w-3 h-3 sm:w-4 sm:h-4' />
    </div>
  );
}

const skillLevelColors = {
  "Expérimenté": "text-accent-400",
  "Intermédiaire": "text-primary-400", 
  "Junior": "text-green-400"
};

const skillLevelBg = {
  "Expérimenté": "bg-accent-900/30",
  "Intermédiaire": "bg-primary-900/30",
  "Junior": "bg-green-900/30"
};

function SkillCardMobile({ src, alt, title, level }: {
  src: string, alt: string, title: string, level: string
}) {
  // Create a mapping for abbreviated level text that fits better on mobile
  const levelAbbreviations = {
    "Expérimenté": "Expert",
    "Intermédiaire": "Inter.",
    "Junior": "Junior"
  };

  const displayLevel = levelAbbreviations[level as keyof typeof levelAbbreviations] || level;

  return (
    <div className="px-1">
      <div className='card-modern p-3 sm:p-4 md:p-5 w-[140px] sm:w-[160px] md:w-[180px] h-[160px] sm:h-[180px] md:h-[200px] gap-2 sm:gap-3 flex flex-col justify-center items-center group hover:shadow-glow transition-all duration-300'>
        <div className="relative">
          <Image 
            src={src} 
            width={60} 
            height={60} 
            alt={alt}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="text-center space-y-1 sm:space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-primary-300 transition-colors leading-tight">{title}</h3>
          <div className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${skillLevelColors[level as keyof typeof skillLevelColors]} ${skillLevelBg[level as keyof typeof skillLevelBg]}`}>
            {displayLevel}
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomArrowsMobile() {
    let sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots !bottom-[-50px]",
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-600 hover:bg-primary-400 transition-colors duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div className="slider-container relative px-1 sm:px-3 md:px-6">
      <Slider ref={slider => { sliderRef.current = slider }} {...settings}>
        <SkillCardMobile src="/React.png" alt="React" title="React" level="Expérimenté" />
        <SkillCardMobile src="/Tailwind.png" alt="Tailwind CSS" title="Tailwind CSS" level="Expérimenté" />
        <SkillCardMobile src="/Docker.svg" alt="Docker" title="Docker" level="Junior" />
        <SkillCardMobile src="/Angular.png" alt="Angular" title="Angular" level="Junior" />
        <SkillCardMobile src="/Symfony.png" alt="Symfony" title="Symfony" level="Intermédiaire" />
        <SkillCardMobile src="/Php.png" alt="PHP" title="PHP" level="Expérimenté" />
        <SkillCardMobile src="/Javascript.png" alt="JavaScript" title="JavaScript" level="Intermédiaire" />
      </Slider>
    </div>
  );
}

export default CustomArrowsMobile;
