"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faBehance, faMediumM, faFigma } from '@fortawesome/free-brands-svg-icons';
import Photo from '@/components/ui/photo';
import { FiExternalLink  } from 'react-icons/fi';
import Socials from '@/components/Socials';
import { about, experience, education, skills } from './aboutme/page'; // Import the Aboutme component


const Home = () => {
  return (
    <div className='h-full'>
      <section className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* for text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>UI/UX Designer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br /> <span className='text-accent'>Wahyu Aristya</span>
            </h1>
            <p className='max-w-[550px] mb-9 text-white/80'>
              I developed a deep interest in UI/UX design, learning not only 
              the technical skills necessary for designing user interfaces but also how to think critically about 
              user experience and usability.
            </p>
            {/* for button CTA & Social media*/}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Resume & Portofolio</span>
                <FiExternalLink className='text-xl'/>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6" iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:scale-[1.3] hover:-translate-y-1 hover:shadow-[0_0_25px_#00ff99] transition-all duration-500 hover:bg-accent hover:text-primary" />
              </div>
            </div>
          </div>
          {/* for Photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </section>

      {/* for Aboutme */}
      <section className='container mx-auto py-24'>        
        <div className="flex flex-col gap-[30px]">
          <h2 className="text-4xl font-bold">{about.title}</h2>
            <p className="max-w-auto text-white/60">{about.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {about.info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-white/60">{item.fieldName}:</span>
                  <span className="text-xl">{item.fieldValue}</span>
                </li>
              ))}
            </ul>
          </div>
      </section>

      {/* for Experience */}
      <section className='container mx-auto py-24'>
      <div className="flex flex-col gap-[30px]">
          <h2 className="text-4xl font-bold">{experience.title}</h2>
            <p className="max-w-auto text-white/60">{experience.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
              {experience.items.map((item, index) => (
                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      {/* for dot (.) */}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                    </div>
                </li>
              ))}
            </ul>
          </div>
      </section>

      {/* for Education */}
      <section className='container mx-auto py-24'>
      <div className="flex flex-col gap-[30px]">
          <h2 className="text-4xl font-bold">{education.title}</h2>
            <p className="max-w-auto text-white/60">{education.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
              {education.items.map((item, index) => (
                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[320px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      {/* for dot (.) */}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.Institution}</p>
                    </div>
                </li>
              ))}
            </ul>
          </div>
      </section>

    </div>
  );
};


export default Home;