/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SkillCard from './helper/SkillCard';

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
        <div className="w-[80%] grid grid-cols-1 lg:grid-cols-7 mx-auto gap-[2rem] items-center">
            <div className="col-span-3">
                <p data-aos="fade-down-right" className="heading__mini">My Skills</p>
                <h1 data-aos="fade-up-left" className="heading__primary">Let's Explore Populer <span className="text-yellow-300">Skills</span>{" "}
                & Experience
                </h1>
                <p data-aos="fade-right" className="text-white text-[15px] mt-[1.5rem] mb-[1.5rem] opacity-70">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non tempora doloribus, quos odit, laboriosam assumenda nam saepe corporis id sapiente sequi deserunt iste deleniti totam sunt, ullam consequuntur nesciunt illo!</p>
                <button data-aos="zoom-in-up" className="flex relative h-[50px] w-40 justify-center items-center font-semibold overflow-hidden bg-purple-300
                        text-white transition-all shadow-2xl before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500
                        before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"><span className="relative z-10">Lern More</span>
                </button>
            </div>
            <div className="col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
                    <div data-aos="zoom-in-down" data-aos-delay="200">
                        <SkillCard  title="React" percent="90%" image="/image/react.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="400">
                        <SkillCard  title="JavaScript" percent="90%" image="/image/javascript.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="600">
                        <SkillCard  title="Laravel" percent="80%" image="/image/laravel1.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="800">
                        <SkillCard  title="Node.js" percent="90%" image="/image/node-js.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="1000">
                        <SkillCard  title="TypeScript" percent="90%" image="/image/typescript.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="1200">
                        <SkillCard  title="Tailwind" percent="90%" image="/image/tailwind.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="1400">
                        <SkillCard  title="MongoDB" percent="80%" image="/image/mongodb.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="1600">
                        <SkillCard  title="MySql" percent="80%" image="/image/mysql.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="1800">
                        <SkillCard  title="Angular.js" percent="70%" image="/image/angularjs.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="2000">
                        <SkillCard  title="Vue.js" percent="80%" image="/image/vue.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="2200">
                        <SkillCard  title="Redux" percent="75%" image="/image/redux.svg" />
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="2400">
                        <SkillCard  title="Next.js" percent="95%" image="/image/next.svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;