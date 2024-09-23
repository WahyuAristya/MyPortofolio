"use client";

import { icon } from "@fortawesome/fontawesome-svg-core";
import { Description } from "@radix-ui/react-dialog";
import React from "react";
import { FaFigma, FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAdobeillustrator, SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro } from "react-icons/si";


//personal info
export const about = {
    title: "My Profile",
    description: "I am a UI/UX Designer and Frontend Developer based in Bali,Indonesia. I developed a deep interest in UI/UX design, learning not only the technical skills necessary for designing user interfaces but also how to think critically about user experience and usability.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Wahyu Aristya"
        },
        {
            fieldName: "Email",
            fieldValue: "wahyuaristya08@gmail.com"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+62) 813-3944-2244"
        },
        {
            fieldName: "Languages",
            fieldValue: "Indonesia, English"
        },
    ]
};


//experience
export const experience = {
    icon: '/assets/badge.svg',
    title: "My Experience",
    description: "I have been working as a UI/UX Designer and Frontend Developer for 2 years. I have worked with various clients and companies to develop their websites and mobile applications. I have experience in designing user interfaces, creating wireframes, and developing websites using HTML, CSS, and JavaScript.",
    items: [
        {
            company: "Ganeshcom Studio",
            position: "UI/UX Designer Internship",
            duration: "July - September 2024",
        },
        {
            company: "NF Computer",
            position: "Digital Marketing (Independent Study)",
            duration: "July - September 2024",
        },
        {
            company: "NF Computer",
            position: "Digital Marketing (Independent Study)",
            duration: "July - September 2024",
        },
        {
            company: "NF Computer",
            position: "Digital Marketing (Independent Study)",
            duration: "July - September 2024",
        },
        {
            company: "NF Computer",
            position: "Digital Marketing (Independent Study)",
            duration: "July - September 2024",
        },        {
            company: "NF Computer",
            position: "Digital Marketing (Independent Study)",
            duration: "July - September 2024",
        }
    ]
};


//Education
export const education = {
    icon: '/assets/graduation.svg',
    title: "My Education",
    description: "I have a Bachelor's degree in Information Technology from the Udayana University.",
    items: [
        {
            Institution: "Udayana University",
            degree: "Bachelor of Information Technology",
            duration: "2020 - 2024",
        }
    ]
};

//Skills
export const skills = {
    title: "My Skills",
    description: "I have experience in designing user interfaces, creating wireframes, and developing websites using HTML, CSS, and JavaScript. I am proficient in using design tools such as Figma, Adobe Illustrator, and Adobe Photoshop.",
    skilllist: [
        {
            icon : <FaFigma/>,
            name: "Figma",
        },
        {
            icon : <FaHtml5/>,
            name: "HTML",
        },
        {
            icon : <FaCss3/>,
            name: "CSS",
        },
        {
            icon : <FaJs/>,
            name: "JavaScript",
        },
        {
            icon : <FaReact/>,
            name: "React",
        },
        {
            icon : <SiTailwindcss/>,
            name: "Tailwind CSS",
        },
        {
            icon : <SiAdobeillustrator/>,
            name: "Adobe Illustrator",
        },
        {
            icon : <SiAdobephotoshop/>,
            name: "Adobe Photoshop",
        },
        {
            icon : <SiAdobelightroom/>,
            name: "Adobe Lightroom",
        },
        {
            icon : <SiAdobepremierepro/>,
            name: "Adobe Premiere Pro",
        },
    ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area';
import { delay, easeInOut, motion } from "framer-motion";


const Aboutme = () => {
    return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
        opacity:1, 
        transition: 
        {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}

    className="min-h-80vh flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs 
            defaultValue="about" 
            className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value= "about">Profile</TabsTrigger>
                    <TabsTrigger value= "experience">Experience</TabsTrigger>
                    <TabsTrigger value= "education">Education</TabsTrigger>
                    <TabsTrigger value= "skills">Skills</TabsTrigger>
                </TabsList>

                {/* for content */}
                <div className="min-h-[78vh] w-full">
                    {/* for about me */}
                    <TabsContent value= "about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {about.description}
                            </p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-2-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    {/* for experience */}
                    <TabsContent value= "experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                {/* for dot (.) */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* for education*/}
                    <TabsContent value= "education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[320px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                {/* for dot (.) */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.Institution}</p>
                                            </div>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* for skills */}
                    <TabsContent value= "skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-2-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skilllist.map((skill, index) => {
                                    return (
                                        <li key= {index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hoover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
    );
};

export default Aboutme;