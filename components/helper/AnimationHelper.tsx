import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const AnimationHelper = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A Software developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A FullStack developer',
        1000,
        'A MERN developer',
        1000,
        'A Laravel developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className="text-white font-bold text-[25px] sm:text-[35px] lg:text-[40px] xl:text-[50px]"
      repeat={Infinity}
    />
  )
}

export default AnimationHelper