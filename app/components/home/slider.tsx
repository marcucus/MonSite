import React, { useRef } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div 
        onClick={onClick} 
        className="absolute top-[40%] -right-12 w-[44px] h-[44px] text-gray-200 rounded-lg glass border-2 
            border-primary-500/50 flex justify-center content-center items-center transition-all 
            duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-500/20 hover:shadow-glow cursor-pointer z-10">
            <SlArrowRight className='w-5 h-5' />
        </div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div 
        onClick={onClick} 
        className="absolute top-[40%] -left-12 w-[44px] h-[44px] text-gray-200 rounded-lg glass border-2 
            border-primary-500/50 flex justify-center content-center items-center transition-all 
            duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-500/20 hover:shadow-glow cursor-pointer z-10">
            <SlArrowLeft className='w-5 h-5' />
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

function SkillCard({ src, alt, title, level, width = 100, height = 100 }: {
  src: string, alt: string, title: string, level: string, width?: number, height?: number
}) {
  return (
    <div className="px-2 py-4">
      <div className='card-modern p-6 w-[200px] h-[240px] gap-4 flex flex-col justify-center items-center group hover:shadow-glow transition-all duration-300 relative z-10'>
        <div className="relative">
          <Image 
            src={src} 
            width={width} 
            height={height} 
            alt={alt}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors">{title}</h3>
          <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${skillLevelColors[level as keyof typeof skillLevelColors]} ${skillLevelBg[level as keyof typeof skillLevelBg]}`}>
            {level}
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomArrows() {
    let sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
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
    <div className="slider-container relative px-4 sm:px-8 md:px-12 overflow-visible">
      <Slider ref={slider => { sliderRef.current = slider }} {...settings}>
        <SkillCard src="/React.png" alt="React" title="React" level="Expérimenté" />
        <SkillCard src="/Tailwind.png" alt="Tailwind CSS" title="Tailwind CSS" level="Expérimenté" />
        <SkillCard src="/Docker.svg" alt="Docker" title="Docker" level="Junior" />
        <SkillCard src="/Angular.png" alt="Angular" title="Angular" level="Junior" />
        <SkillCard src="/Symfony.png" alt="Symfony" title="Symfony" level="Intermédiaire" />
        <SkillCard src="/Php.png" alt="PHP" title="PHP" level="Expérimenté" width={150} height={150} />
        <SkillCard src="/Javascript.png" alt="JavaScript" title="JavaScript" level="Intermédiaire" />
      </Slider>
    </div>
  );
}

export default CustomArrows;
