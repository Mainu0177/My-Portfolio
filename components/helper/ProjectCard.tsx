import Image from 'next/image';
import React from 'react'

interface Props {
    image: string;
    title: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
}

const ProjectCard = ({image, title, tech1, tech2, tech3, tech4}:Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-10 pt-[5rem] items-center">
        <div className="p-4 relative transition-all transform duration-200 cursor-pointer hover:-rotate-6 rounded-xl shadow-md bg-gray-800">
            <Image src={`${image}`} alt={title} width={500} height={500} className="object-contain rounded-xl mx-auto shadow-md" />
        </div>
        <div>
            <h1 className="text-[25px] text-white">{title}</h1>
            <p className="text-[15px] text-white mt-[1rem] opacity-65">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit numquam obcaecati dignissimos provident, mollitia ratione autem accusantium culpa aperiam modi maxime totam dolorum, ducimus iusto voluptatum nam ipsum harum iste sed ex incidunt rem. Odio voluptates et voluptas quos.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 mt-[1.3rem] gap-[2rem]">
                <h1 className="px-6 py-3 text-center rounded-lg text-white bg-blue-500">{tech1}</h1>
                <h1 className="px-6 py-3 text-center rounded-lg text-white bg-blue-500">{tech2}</h1>
                <h1 className="px-6 py-3 text-center rounded-lg text-white bg-blue-500">{tech3}</h1>
                <h1 className="px-6 py-3 text-center rounded-lg text-white bg-blue-500">{tech4}</h1>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard