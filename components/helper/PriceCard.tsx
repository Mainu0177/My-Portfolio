import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react'

interface Props {
    plane: string;
    price: string;
    save: string;
    bg: string;
}

const PriceCard = ({plane, price, save, bg}: Props) => {
  return (
    <div className="text-center rounded-lg bg-gray-900">
        <div className={`p-6 rounded-t-lg ${bg}`}>
            <h1 className="text-white text-[30px]">{plane}</h1>
            <p className="text-[16px] text-[#d7d7d7]">Try out {plane} plane save{" "} <span className="text-yellow-400"> {save} </span></p>
            <div className="flex justify-center mt-[1rem] items-end space-x-1">
                <h1 className="text-[40px] fond-bold text-yellow-400">{price}</h1>
                <p className="text-white">/Hour</p>
            </div>
        </div>
        <div className="p-6">
            <div className="flex items-center space-x-3">
                <CheckIcon className="w-[1.4rem h-[1.4rem] text-yellow-400" />
                <p className="text-white text-[17px] opacity-80">Next JS Website</p>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem] mb-[1rem]">
                <CheckIcon className="w-[1.4rem h-[1.4rem] text-yellow-400" />
                <p className="text-white text-[17px] opacity-80">Next JS Website</p>
            </div>
            <div className="flex items-center space-x-3">
                <CheckIcon className="w-[1.4rem h-[1.4rem] text-yellow-400" />
                <p className="text-white text-[17px] opacity-80">Next JS Website</p>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem] mb-[1rem]">
                <CheckIcon className="w-[1.4rem h-[1.4rem] text-yellow-400" />
                <p className="text-white text-[17px] opacity-80">Next JS Website</p>
            </div>
            <div className="flex items-center space-x-3">
                <CheckIcon className="w-[1.4rem h-[1.4rem] text-yellow-400" />
                <p className="text-white text-[17px] opacity-80">Next JS Website</p>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem]">
                <CheckIcon className="w-[1.4rem h-[1.4rem] text-yellow-400" />
                <p className="text-white text-[17px] opacity-80">Next JS Website</p>
            </div>
        </div>
        <button className="px-8 py-4 text-white transition-all duration-300 mt-[1.5rem] w-[100%] bg-blue-600 hover:bg-blue-800">
            Get Started
        </button>
    </div>
  )
}

export default PriceCard