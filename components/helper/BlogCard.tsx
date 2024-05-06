
import { CalendarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react'

interface Props {
    title: string;
    comment: string;
    date: string;
    image: string;
}

const BlogCard = ({title, comment, date, image}:Props) => {

  return (
    <div className="bg-gray-900">
          <div>
            <Image src={`${image}`} alt="blog" width={300} height={300} className="object-cover w-[100%] h-[100%]" />
          </div>
          <div className="p-4">
              <div className="flex rounded-lg mt-[1rem] mb-[1rem] px-1 py-3 space-x-2 w-fit items-center bg-gray-800">
                  <CalendarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
                  <p className="text-white text-[14px] opacity-85">{date}</p>
              </div>
              <h1 className="text-[20px] text-white hover:text-yellow-400 transition-all duration-200 cursor-pointer opacity-85 font-semibold underline">{title}</h1>
              <div className="flex items-center justify-between mt-[2rem]">
                <div className="flex items-center space-x-3">
                    <ChatBubbleLeftIcon className="text-yellow-400 w-[1.2rem] h-[1.2rem]" />
                    <p className="text-[15px] text-white opacity-85">{comment} comments</p>
                </div>
                <button className="text-[15px] text-white hover:text-yellow-400 transition-all duration-150 font-semibold underline">Read more</button>
              </div>
          </div>
      </div>
      
  )
}

export default BlogCard