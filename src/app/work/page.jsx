"use client";

import React, {useState} from "react";
import { motion } from "framer-motion";

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight} from 'react-icons/bs';
import { FaFigma } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { TooltipTrigger, Tooltip, TooltipProvider, TooltipContent } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'UI/UX Design',
        title: 'E-commerce Website',
        description: 'A simple e-commerce website design for a fashion brand. The design is clean and modern with a focus on usability and user experience.',
        stack: [{name: 'Figma'}, {name: 'Adobe Illustrator'}],
        image: '/assets/work/thumb1.jpg',
        live: '',
        figma: '',
    },
    {
        num: '02',
        category: 'UI/UX Design',
        title: 'E-commerce Website',
        description: 'A simple e-commerce website design for a fashion brand. The design is clean and modern with a focus on usability and user experience.',
        stack: [{name: 'Figma'}],
        image: '/assets/work/thumb1.jpg',
        live: '',
        figma: '',
    },
    {
        num: '03',
        category: 'UI/UX Design',
        title: 'E-commerce Website',
        description: 'A simple e-commerce website design for a fashion brand. The design is clean and modern with a focus on usability and user experience.',
        stack: [{name: 'Figma'}],
        image: '/assets/work/thumb1.jpg',
        live: '',
        figma: '',
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleslideChange = (swiper) => {
        //curent slide index
        const currentIndex = swiper.activeIndex;
        //project state update based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section 
            initial = {{opacity: 0}} 
            animate= {{opacity: 1, transition: {delay:2.4, duration: 0/4, ease: 'easeIn'}}} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* for project num*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* for project category*/}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* for project desc*/}
                            <p className="text-white/60">
                                {project.description}
                            </p>
                            {/* for project stack*/}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index)=> {
                                    return(
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove coma for last item */}
                                            {index !== project.stack.length - 1 && <span className="text-white/60">,</span>}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* for project border*/}
                            <div className="border border-white/20"></div>
                            {/* for project buttons*/}
                            <div className="flex items-center gap-4">
                                {/* for live project*/}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View in Medium</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* for live figma*/}
                                <Link href={project.figma}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <FaFigma className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View in Figma</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleslideChange}
                        >
                            {projects.map((project, index) => {
                                return(
                                    <SwiperSlide 
                                        key={index} 
                                        className="w-full"
                                    >
                                        <div className="h-[350px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* for project overlay*/}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* for project image*/}
                                            <div className="relative w-full h-full flex">
                                                <Image 
                                                    src={project.image} 
                                                    fill className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* for project pagination*/}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles= "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;