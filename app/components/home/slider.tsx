import React, { useRef } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="absolute top-[40%] -right-12 w-[44px] h-[44px] text-gray-200 rounded-full bg-[#C158F233] border-2 shadow-sm shadow-[#C158F2] border-[#C158F2] flex justify-center content-center items-center transition-all duration-500 ease-in-out transform hover:scale-105"><SlArrowRight className='absolute w-6 h-6 flex justify-center content-center items-center ml-1' /></div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="absolute top-[40%] -left-11 w-[44px] h-[44px] text-gray-200 rounded-full bg-[#C158F233] border-2 shadow-sm shadow-[#C158F2] border-[#C158F2] flex justify-center content-center items-center transition-all duration-500 ease-in-out transform hover:scale-105"><SlArrowLeft className='absolute w-6 h-6 flex justify-center content-center items-center mr-1' /></div>
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
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container relative">
      <Slider ref={slider => { sliderRef.current = slider }} {...settings}>
        <div>
            <div className='flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#C158F233] border border-[#C158F2] w-[200px] h-[207px] gap-4 justify-center items-center content-center'>
                <Image src={"/React.png"} width={100} height={100} alt='image skills' />
                <div>
                    <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">React</h3>
                    <p className="text-sm text-gray-200">
                        <div className='flex w-full justify-center items-center content-center font-bold text-red-500'>
                            Expérimenté
                        </div>
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#C158F233] border border-[#C158F2] w-[200px] h-[207px] gap-4 justify-center items-center content-center'>
                <Image src={"/Tailwind.png"} width={100} height={100} alt='image skills' />
                <div>
                    <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">Tailwind CSS</h3>
                    <p className="text-sm text-gray-200">
                        <div className='flex w-full justify-center items-center content-center font-bold text-orange-500'>
                            Intermédiaire
                        </div>
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#C158F233] border border-[#C158F2] w-[200px] h-[207px] gap-4 justify-center items-center content-center'>
                <Image src={"/Docker.svg"} width={100} height={100} alt='image skills' />
                <div>
                    <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">Docker</h3>
                    <p className="text-sm text-gray-200">
                        <div className='flex w-full justify-center items-center content-center font-bold text-green-500'>
                            Junior
                        </div>
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#C158F233] border border-[#C158F2] w-[200px] h-[207px] gap-4 justify-center items-center content-center'>
                <Image src={"/Angular.png"} width={100} height={100} alt='image skills' />
                <div>
                    <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">Angular</h3>
                    <p className="text-sm text-gray-200">
                        <div className='flex w-full justify-center items-center content-center font-bold text-green-500'>
                            Junior
                        </div>
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#C158F233] border border-[#C158F2] w-[200px] h-[207px] gap-4 justify-center items-center content-center'>
                <Image src={"/Symfony.png"} width={100} height={100} alt='image skills' />
                <div>
                    <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">Symfony</h3>
                    <p className="text-sm text-gray-200">
                        <div className='flex w-full justify-center items-center content-center font-bold text-orange-500'>
                            Intermédiaire
                        </div>
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#C158F233] border border-[#C158F2] w-[200px] h-[207px] gap-4 justify-center items-center content-center'>
                <Image src={"/Php.png"} width={100} height={100} alt='image skills' />
                <div>
                    <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">PHP</h3>
                    <p className="text-sm text-gray-200">
                        <div className='flex w-full justify-center items-center content-center font-bold text-red-500'>
                            Expérimenté
                        </div>
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-col p-4 shadow-lg rounded-lg m-2 bg-[#C158F233] border border-[#C158F2] w-[200px] h-[207px] gap-4 justify-center items-center content-center'>
                <Image src={"/Javascript.png"} width={100} height={100} alt='image skills' />
                <div>
                    <h3 className="md:text-lg font-semibold text-gray-200 flex justify-center items-center content-center">JavaScript</h3>
                    <p className="text-sm text-gray-200">
                        <div className='flex w-full justify-center items-center content-center font-bold text-orange-500'>
                            Intermédiaire
                        </div>
                    </p>
                </div>
            </div>
        </div>
      </Slider>
    </div>
  );
}

export default CustomArrows;
