/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import AnimationHelper from './helper/AnimationHelper';
// import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-[100vw] h-[85vh] md:h-[100vh] pt-[4vh] md:pt-[12vh] custom-bg">
        <div className="flex flex-col mx-auto justify-center h-[100%] w-[80%] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
                <div>
                    <h1 data-aos="fade-right" className="text-[#c4cfde] md-[5rem]">WELCOME TO MY WORLD</h1>
                    <div data-aos="fade-left" data-aos-delay="400">
                        <h1 className="text-white text-[25px] sm:text-[35px] lg:text-[40px] xl:text-[50px] font-semibold leading-[2.6rem]">
                            Hi,I'm <span className="text-yellow-300">Mainuddin Khan</span>
                        </h1>
                        <AnimationHelper />
                    </div>
                    <p data-aos="fade-up" data-aos-delay="800" className="text-[15px] mt-[1.2rem] md:text-[17px] text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate sint et autem recusandae error quidem expedita excepturi dolores ex.</p>
                    <div className="flex mt-[2rem] items-center space-x-6">
                        <button data-aos="zoom-in" data-aos-delay="1200" className="flex relative h-[50px] w-40 justify-center items-center font-semibold overflow-hidden bg-red-400
                        text-white transition-all shadow-2xl before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500
                        before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"><span className="relative z-10">Hire Me !</span>
                        </button>
                        <button data-aos="zoom-out" data-aos-delay="1600" className="relative before:ease h-12 w-40 text-white bg-red-500 overflow-hidden font-semibold 
                        shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right 
                        before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-400 before:transition-all 
                        before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"><span className="relative z-10">Download CV</span></button>
                    </div>
                </div>
                {/* <div data-aos="fade-left" data-aos-delay="2000" className="hidden md:block">
                    <Image src="/image/cv.png" alt="hero" height={600} width={600} className="object-contain" />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Hero;