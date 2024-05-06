import Image from 'next/image';
import React from 'react'

interface Props {
    image: string;
    title: string;
    percent: string;
}

const SkillCard = ({image, title, percent}:Props) => {


  return (
    <div className="p-6 hover:bg-gray-600 text-center cursor-pointer duration-3000 transition-all rounded-lg bg-gray-900">
        <Image className="object-cover mx-auto" src={`${image}`} alt={title} width={80} height={80} />
        <h1 className="text-white text-[18px] mt-[1rem] font-[600]">{title}</h1>
        <p className="bg-black text-white p-2 rounded-lg opacity-40 mt-[1rem]">{percent}</p>
    </div>
  )
}

export default SkillCard