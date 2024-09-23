import React from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faBehance, faMediumM, faFigma } from '@fortawesome/free-brands-svg-icons';
import Photo from '@/components/ui/photo';
import { FiExternalLink  } from 'react-icons/fi';
import Socials from '@/components/Socials';


const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
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
      </div>
    </section>
  );
};

export default Home;