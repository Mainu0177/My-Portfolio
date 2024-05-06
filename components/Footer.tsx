import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[2rem] pb-5 border-b-[1.4px] border-gray-600 border-opacity-40">
            <div>
                <div className="font-logo text-white text-[18px]">
                    <span className="text-[30px] md:text-[40px] text-yellow-400">MD</span>
                    Mainuddin Khan
                </div>
                <h1 className="text-[14px] text-white mt-[0.5rem] opacity-70">Lorem ipsum dolor sit,
                 amet consectetur adipisicing elit.
                 Vel, repellendus! Eos repellendus animi deleniti beatae facilis,
                  voluptate recusandae necessitatibus quisquam ea nostrum accusamus,
                 ducimus explicabo nesciunt deserunt veniam suscipit laborum.
                 </h1>
                 <p className="text-[1.4rem] text-yellow-300 font-semibold underline">mainuddinhassan658@gmail.com</p>
            </div>
            <div className="md:mx-auto">
                <h1 className="text-[17px] text-white font-semibold mb-[1.4rem]">Quike Link</h1>
                <p className="text-[15px] text-white opacity-80 cursor-pointer mb-[1rem] hover:text-yellow-300">About</p>
                <p className="text-[15px] text-white opacity-80 cursor-pointer mb-[1rem] hover:text-yellow-300">Service</p>
                <p className="text-[15px] text-white opacity-80 cursor-pointer mb-[1rem] hover:text-yellow-300">Projects</p>
                <p className="text-[15px] text-white opacity-80 cursor-pointer mb-[1rem] hover:text-yellow-300">Blog</p>
                <p className="text-[15px] text-white opacity-80 cursor-pointer mb-[1rem] hover:text-yellow-300">Contact</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[17px] text-white font-semibold mb-[1.4rem]'>Address</h1>
                <div className="flex items-center mb-[1rem] space-x-2">
                    <MapIcon className="h-[1rem] w-[1rem] text-yellow-300" />
                    <p className='text-[17px] text-white font-normal opacity-75'>Narayanganj , Dhaka Bangladesh</p>
                </div>
                <div className="flex items-center mb-[1rem] space-x-2">
                    <EnvelopeIcon className="h-[1rem] w-[1rem] text-yellow-300" />
                    <p className='text-[17px] text-white font-normal opacity-75'>mainuddinhassan658@gmail.com</p>
                </div>
                <div className="flex items-center mb-[1rem] space-x-2">
                    <PhoneIcon className="h-[1rem] w-[1rem] text-yellow-300" />
                    <p className='text-[17px] text-white font-normal opacity-75'>+88 01771-211148</p>
                </div>
            </div>
        </div>
        <div className="mt-[1.4rem] text-white mx-auto w-[80%] opacity-70">&#169; copyright Mainuddin Khan 2024</div>
    </div>
  )
}

export default Footer