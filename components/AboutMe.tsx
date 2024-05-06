import { CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const AboutMe = () => {
  return (
    <div className="mt-[-3rem] pb-[3rem] bg-black">
        <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] grid mx-auto items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
            <div>
                <p data-aos="fade-down" className="heading__mini">About Me</p>
                <h1 data-aos="fade-right" className=" heading__primary">Professional<span className="text-yellow-400"> Website</span> for your bussiness</h1>
                <p data-aos="fade-up" className="mt-[1.3rem] text-white text-[15px] opacity-75">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique iusto temporibus ea. Praesentium porro perferendis expedita pariatur eos aperiam sit, illum nemo rem consequatur voluptatum consectetur. Iure nisi, corporis rem officiis officia dicta quod nam sed voluptatem voluptas natus dolorem.</p>
                <div data-aos="fade-right" className="mt-[2rem] space-y-3">
                    <div className="flex items-center space-x-4">
                        <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                        <p className="text-[18px] text-white">Front-End Development</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                        <p className="text-[18px] text-white">Back-End Development</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                        <p className="text-[18px] text-white">Full-Stack Development</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                        <p className="text-[18px] text-white">Laravel Development</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                        <p className="text-[18px] text-white">MERN Stack Development</p>
                    </div>
                </div>
            </div>
            <div className="lg:md-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
                    <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center" className="p-6 text-center bg-yellow-500">
                        <p className="text-[50px] text-black font-bold">2</p>
                        <p className="text-[20px] text-black font-600">Years experience</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-anchor-placement="top-center" className="p-6 text-center bg-yellow-500">
                        <p className="text-[50px] text-black font-bold">50 +</p>
                        <p className="text-[20px] text-black font-600">Happy Clients</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="400" data-aos-anchor-placement="top-center" className="p-6 text-center bg-yellow-500">
                        <p className="text-[50px] text-black font-bold">80 +</p>
                        <p className="text-[20px] text-black font-600">Projects Done</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-anchor-placement="top-center" className="p-6 text-center bg-yellow-500">
                        <p className="text-[50px] text-black font-bold">3 +</p>
                        <p className="text-[20px] text-black font-600">Award Win</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center" className="p-6 text-center bg-yellow-500">
                        <p className="text-[50px] text-black font-bold">2</p>
                        <p className="text-[20px] text-black font-600">Years experience</p>
                    </div>
                    <div data-aos="zoom-in"  data-aos-anchor-placement="top-center" className="p-6 text-center bg-yellow-500">
                        <p className="text-[50px] text-black font-bold">2</p>
                        <p className="text-[20px] text-black font-600">Years experience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe