import React from 'react'
import ServiceCard from './helper/ServiceCard'

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
        <div className="text-center">
            <p data-aos="fade-down" className="heading__mini"> Popular Services</p>
            <h1 data-aos="fade-up" className="heading__primary"> My Special<span className="text-yellow-300"> Services</span> For You</h1>
        </div>
        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
            <div data-aos="fade-up-right" data-aos-delay="200" data-aos-anchor-placement="top-center">
                <ServiceCard title="React Website" num="01" />
            </div>
            <div data-aos="fade-up-right" data-aos-delay="400" data-aos-anchor-placement="top-center">
                <ServiceCard title="NEXT JS Wesite" num="02" />
            </div>
            <div data-aos="fade-up-right" data-aos-delay="600" data-aos-anchor-placement="top-center">
                <ServiceCard title="Full-Stack Website" num="03" />
            </div>
            <div data-aos="fade-up-right" data-aos-delay="800" data-aos-anchor-placement="top-center">
                <ServiceCard title="Node js API" num="04" />
            </div>
            <div data-aos="fade-up-right" data-aos-delay="1000" data-aos-anchor-placement="top-center">
                <ServiceCard title="MERN Web App" num="05" />
            </div>
            <div data-aos="fade-up-right" data-aos-delay="1200" data-aos-anchor-placement="top-center">
                <ServiceCard title="Bug Fixing" num="06" />
            </div>
        </div>
    </div>
  )
}

export default Services;