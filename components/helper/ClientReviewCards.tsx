import { SparklesIcon, StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

interface Props {
    image: string;
    user: string;
    role: string;
}

const ClientReviewCards = ({image, user, role}: Props) => {
  return (
    <div className="m-2 rounded-lg transition-all duration-300 hover:bg-gray-700">
        <div className="p-4 border-2 rounded-xl border-gray-700">
            <Image src={`${image}`} alt={user} width={70} height={70} className="rounded-full mx-auto mt-[2rem]" />
            <div>
                <SparklesIcon className="w-[6rem] h-[6rem] text-white opacity-15 fiexd" />
            </div>
            <p className="text-[15px] text-white text-center opacity-65 mt-[3rem]">Lorem ipsum dolor 
                sit amet consectetur adipisicing elit.
                 Et sunt porro fugit error dolorum maxime consectetur accusantium. Dolore, enim cumque?
                </p>
           
            <div className="flex items-center justify-center space-x-1 mt-[0.4rem]">
                <StarIcon className='h-[1.4rem] w-[1.4rem] text-yellow-400' />
                <StarIcon className='h-[1.4rem] w-[1.4rem] text-yellow-400' />
                <StarIcon className='h-[1.4rem] w-[1.4rem] text-yellow-400' />
                <StarIcon className='h-[1.4rem] w-[1.4rem] text-yellow-400' />
                <StarIcon className='h-[1.4rem] w-[1.4rem] text-yellow-400' />
            </div>
            {/* <div>
                <SparklesIcon className="w-[6rem] right-0 h-[6rem] text-white opacity-15 fiexd" />
            </div> */}
            <h1 className="text-[20px] text-white text-center mt-[2rem] font-medium">{user}</h1>
            <p className="text-yellow-400 text-center mb-[3rem]">{role}</p>
        </div>
    </div>
  )
}

export default ClientReviewCards;