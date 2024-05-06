import React from 'react'
import ProjectCard from './helper/ProjectCard'


const Project = () => {
  return (
    <div className="pt-[5rem] pb-p[3rem] bg-gray-900">
        <div className="text-center">
            <p data-aos="fade-right" className="heading__mini">Recent Works</p>
            <h1 data-aos="fade-left" className="heading__primary">My Best <span className="text-yellow-300">Projects</span></h1>
        </div>
        <ProjectCard title="E-Commerce Website" tech1="MongoDB" tech2="Express" tech3="React" tech4="NodeJs" image="/image/ecommerce.jpg" />
        <ProjectCard title="E-Commerce Website" tech1="MongoDB" tech2="Express" tech3="React" tech4="NodeJs" image="/image/ecommerce.jpg" />
        <ProjectCard title="E-Commerce Website" tech1="MongoDB" tech2="Express" tech3="React" tech4="NodeJs" image="/image/ecommerce.jpg" />
        <ProjectCard title="E-Commerce Website" tech1="MongoDB" tech2="Express" tech3="React" tech4="NodeJs" image="/image/ecommerce.jpg" />
        <ProjectCard title="E-Commerce Website" tech1="MongoDB" tech2="Express" tech3="React" tech4="NodeJs" image="/image/ecommerce.jpg" />

    </div>
  )
}

export default Project