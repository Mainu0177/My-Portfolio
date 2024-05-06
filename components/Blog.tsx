import React from 'react'
import BlogCard from './helper/BlogCard'


const Blog = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
        <div className="text-center">
            <p className="heading__mini">My Blog</p>
            <h1 className="heading__primary">My Latest <span className="text-yellow-300"> Blog </span> and news</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] pt-[3rem] md:pt-[5rem] gap-[2rem] items-center mx-auto">
            <div>
                <BlogCard title="Full-Stack Developer roadmap"
                          comment="4"
                          date="5 April 2024"
                          image="/image/road.jpg" />
            </div>
            <div>
                <BlogCard title="E-Commerce App"
                          comment="6"
                          date="1 April 2024"
                          image="/image/road1.png" />
            </div>
            <div>
                <BlogCard title="Real State Web App"
                          comment="10"
                          date="24 March 2024"
                          image="/image/road3.png" />
            </div>
        </div>
    </div>
  )
}

export default Blog