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
        category: 'UI/UX Design : Calcio',
        title: 'Mobile App Design',
        description: 'Calcio is a booking application for soccer, futsal, and mini soccer fields that is practical and easy to use. By developing this application, it will make the booking process faster, safer, and certainly more efficient.',
        stack: [{name: 'Figma'}, {name: 'Adobe Illustrator'}],
        image: '/assets/work/thumb1.jpg',
        live: 'https://www.behance.net/gallery/207642591/UIUX-Design-Calcio',
        figma: 'https://www.figma.com/proto/cqHcsvMyqXqJHCx4N7bqlK/Calcio-App-Portofolio?page-id=130%3A473&node-id=130-474&node-type=canvas&viewport=343%2C226%2C0.2&t=J47Gy7wCBGIvAgqC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=130%3A474',
    },
    {
        num: '02',
        category: 'UI/UX Design : Yournightmare.id',
        title: 'E-commerce Website Design',
        description: 'in this project I created a sales web design for the yournightmare.id brand that is attractive and in accordance with the branding persona of the brand.',
        stack: [{name: 'Figma'}, {name: 'Adobe Illustrator'}],
        image: '/assets/work/thumb2.jpg',
        live: 'https://medium.com/@wahyuaristya08/ui-ux-design-project-website-yournightmare-id-8c8bf0c84f1f',
        figma: 'https://www.figma.com/proto/QHYpR9r8ULPObg348heWh8/Yournightmare.id?page-id=0%3A1&node-id=2-2&viewport=235%2C-950%2C0.15&t=PRO7oQikFxUw9eJ7-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2%3A2',
    },
    {
        num: '03',
        category: 'UI/UX Design : Natures Villa',
        title: 'Villa Website Design',
        description: 'this project is my internship project at ganeshcom studio, where I created an elegant and clean look villa web design. this web design highlights the beauty of the property, facilities, and visitor experience when staying.',
        stack: [{name: 'Figma'}],
        image: '/assets/work/thumb3.jpg',
        live: 'https://medium.com/@wahyuaristya08/ui-ux-internship-project-villa-website-0ec76dbd7c4b',
        figma: 'https://www.figma.com/proto/BCnmtmsHIyFoLZhQbVFcpE/Ganeshcom-Villa-Portofolio?page-id=0%3A1&node-id=55-873&node-type=CANVAS&viewport=471%2C-2178%2C0.08&t=Qwsp6F2Umnx8Finq-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=12%3A39&show-proto-sidebar=1',
    },
    {
        num: '04',
        category: 'UI/UX Design : Company Web Sales',
        title: 'Web Sales Design',
        description: 'This project is my internship project at Ganeshcom Studio. In this project, I designed a responsive and attractive sales company web. The company web sales made should emphasize the services offered and the portfolio.',
        stack: [{name: 'Figma'}],
        image: '/assets/work/thumb4.jpg',
        live: 'https://medium.com/@wahyuaristya08/ui-ux-internship-project-ganeshcom-sales-web-v2-440ad646266f',
        figma: 'https://www.figma.com/proto/NIqoiMIUQvRRutJwKE55fx/Ganeshcom-Sales-Web-V2-(Copy)?page-id=0%3A1&node-id=1-2&viewport=1130%2C521%2C0.12&t=3gboiqtlIEhsEZHl-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1',
    },
    {
        num: '05',
        category: 'UI/UX Design : Personal Branding Website',
        title: 'Presonal Branding',
        description: 'This project is also my internship project at ganeshcom studio, where I created a personal branding web design from a prospective client of Ganeshcom Studio. this web design emphasizes personal information, vision and mission, and activity agenda.',
        stack: [{name: 'Figma'}],
        image: '/assets/work/thumb5.png',
        live: 'https://medium.com/@wahyuaristya08/ui-ux-internship-project-personal-branding-website-b1fe8f983f72',
        figma: 'https://www.figma.com/proto/JT0Fg2xeNCtDiHJmA0nmFe/Personal-Branding-Sugianto---Syahrul?page-id=0%3A1&node-id=1-2&node-type=CANVAS&viewport=-72%2C158%2C0.15&t=Wm1Q6RfdIDfnVfoU-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A2',
    },
    {
        num: '06',
        category: 'UI/UX Design : Redesign Kitabisa.com Web',
        title: 'Web Redesign',
        description: 'This project is my first project to redesign the desktop version of the kitabisa.com web. This project aims to create a desktop version of the kitabisa.com website which previously did not have a desktop version.',
        stack: [{name: 'Figma'}],
        image: '/assets/work/thumb6.jpg',
        live: 'https://medium.com/@wahyuaristya08/ui-ux-design-project-redesign-website-kitabisa-com-b41c33f05dd5',
        figma: 'https://www.figma.com/proto/XM5VcgPl8IYYFwFUauNqeQ/Redesign-Web-Kitabisa.com?page-id=108%3A8864&node-id=108-8865&node-type=FRAME&viewport=794%2C636%2C0.13&t=BowCwIQs4dth8dQW-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=108%3A8865https://www.figma.com/proto/XM5VcgPl8IYYFwFUauNqeQ/Redesign-Web-Kitabisa.com?page-id=108%3A8864&node-id=108-8865&node-type=FRAME&viewport=794%2C636%2C0.13&t=BowCwIQs4dth8dQW-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=108%3A8865',
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
        <div className="h-screen">
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
                            <h2 className="text-[42px] font-bold leading-[1.5] text-white group-hover:text-accent transition-all duration-500 capitalize ">
                                {project.category}
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
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View in Medium or Behance</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* for live figma*/}
                                <Link href={project.figma} target="_blank" rel="noopener noreferrer">
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
        </div>
    );
};

export default Work;