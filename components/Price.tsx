import React from 'react'
import PriceCard from './helper/PriceCard'

const Price = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-950">
        <div className="text-center">
            <p className="heading__mini">Popular Services</p>
            <h1 className="heading__primary">Best <span className="text-yellow-300">Pricing</span> For your Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto items-center gap-10 w-[80%] pt-[4rem] md:pt-[7rem]">
            <PriceCard plane="Basic" price="10$" save="25%" bg="bg-lime-900" />
            <PriceCard plane="Populer" price="100$" save="35%" bg="bg-blue-900" />
            <PriceCard plane="Primium" price="1000$" save="45%" bg="bg-yellow-900" />

        </div>
    </div>
  )
}

export default Price