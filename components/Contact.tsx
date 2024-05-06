/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[2rem] mx-auto w-[80%]">
            <div>
            <p className="heading__mini">Get in Touch</p>
            <h1 className="heading__primary">Let's make your<span className="text-yellow-400"> Brand</span>{" "} brilliant</h1>
            <p className="text-[15px] text-white opacity-75 mt-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Magni non facilis sequi. Dolorum delectus veniam
              quibusdam, ullam quidem consequatur vitae?
            </p>
            <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 font-bold underline">+88 01771-211148</h1>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[1rem]">
                    <input data-aos="fade-right" type="text" placeholder="Name" className="py-[0.7rem] px-4 outline-none rounded-md bg-gray-800 text-white" />
                    <input data-aos="fade-left" type="email" placeholder="Email" className="py-[0.7rem] px-4 outline-none rounded-md bg-gray-800 text-white" />
                </div>
                <input data-aos="fade-down" type="text" placeholder="Subject" className="py-[0.7rem] mb-[1.5rem] mt-[1.5rem] bg-gray-800 text-white rounded-md w-full outline-none px-4" />
                <textarea placeholder="Message" className="text-white py-[0.7rem] px-4 mb-[1.5rem] bg-gray-800 outline-none w-full rounded-md" rows={4}></textarea>
                <button className="py-[0.7rem] px-4  mb-[1.5rem] text-white rounded-md outline-none w-full bg-blue-600 hover:bg-blue-800 ">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact