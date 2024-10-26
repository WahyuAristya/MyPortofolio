"use client";

import React from "react";
import { FaFigma, FaHtml5, FaCss3, FaJs, FaReact, FaGithub, FaLaravel, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiAdobeillustrator, SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro, SiGitlab, SiNextdotjs, SiCanva } from "react-icons/si";


//personal info
export const about = {
    title: "My Profile",
    description: "I am a UI/UX Designer, Graphic Designer and Frontend Developer based in Bali, Indonesia. I have developed a deep passion for UI/UX Design, Graphic Design, and Frontend development, focusing not only on mastering the technical skills needed to create intuitive user interfaces and visually appealing designs, but also on critically understanding user experience and usability. My approach ensures that each design is functional, user-centric, and enhances the overall user interaction.",
    info: [
        {
            fieldName: "Full Name",
            fieldValue: "I Kadek Wahyu Nanda Aristya"
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
    title: "Experience",
    description: "I gained valuable experience in UI/UX Design, Graphic Design, and Frontend development during my studies, where I worked on various projects related to designing user interfaces and developing websites. In addition, I completed an internship as a UI/UX Designer, further honing my skills in creating intuitive designs. I also participated in an independent study program focused on digital marketing, which broadened my knowledge in areas such as web marketing, SEO, and user engagement strategies.",
    items: [
        {
            company: "Expat. Rosasters",
            position: "Graphic Designer Internship",
            duration: "October 2024 - Now",
        },
        {
            company: "Ganeshcom Studio",
            position: "UI/UX Designer Internship",
            duration: "July - September 2024",
        },
        {
            company: "NF Computer",
            position: "Digital Marketing (Independent Study)",
            duration: "August - December 2022",
        }
    ]
};


//Education
export const education = {
    icon: '/assets/graduation.svg',
    title: "Education",
    description: "I hold a Bachelor's degree in Information Technology from Udayana University, where I gained a strong foundation in software development, web design, and digital economiy. This academic background, combined with hands-on experience, has equipped me with the knowledge and expertise to design user-friendly digital products and develop efficient, responsive websites.",
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
    title: "Skills",
    description: "I have strong proficiency in using various tools that effectively support my work in UI/UX Design, Graphic Design, and Frontend development, enabling me to create seamless and visually appealing digital experiences while ensuring functional and responsive implementation.",
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
            icon : <FaGithub/>,
            name: "Github",
        },
        {
            icon : <SiGitlab/>,
            name: "Gitlab",
        },
        {
            icon : <SiNextdotjs/>,
            name: "NextJS",
        },
        {
            icon : <FaLaravel/>,
            name: "Laravel",
        },
        {
            icon : <FaPhp/>,
            name: "PHP",
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
        {
            icon : <SiCanva/>,
            name: "Canva",
        },
    ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area';
import { delay, easeInOut, motion } from "framer-motion";
import { icon } from "@fortawesome/fontawesome-svg-core";


const Aboutme = () => {
    return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
        opacity:1, 
        transition: 
        {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}

    className="min-h-80vh flex items-center justify-center py-12 xl:py-0 mb-14 mt-14"
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