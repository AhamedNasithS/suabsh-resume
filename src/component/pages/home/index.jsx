import React, { useEffect, useRef, useState } from 'react'
import Header from './header'
import Banner from './banner'
import Protfolio from './protfolio'
import About from './about'
import { PiStarFourFill } from "react-icons/pi";
import Form from './form'
import Footer from './footer'
import Service from './service'

export default function Home() {
  const [headerTab, setHeaderTab] = useState("Home");
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const serviceRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id === 'home') setHeaderTab('Home');
            else if (id === 'work') setHeaderTab('Work');
            else if (id === 'about') setHeaderTab('About');
            else if (id === 'service') setHeaderTab('Service');
            else if (id === 'contact') setHeaderTab('Contact');
          }
        });
      },
      { threshold: 0.5 }
    );
  
    [homeRef, workRef, aboutRef, serviceRef, contactRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden px-0'>
      <Header headerTab={headerTab} setHeaderTab={setHeaderTab} />
      <div id='home' ref={homeRef} className='w-full'>
        <Banner />
      </div>
      <div id='work' ref={workRef} className='w-full'>
        <Protfolio />
      </div>
      <div id='about' ref={aboutRef} className='w-full'>
        <About />
      </div>
      <div className='mt-[40px] sm:mt-[100px] h-[75px] sm:h-[107px] xl:h-[145px] rounded-br-[14px] rounded-tl-[14px] w-full overflow-hidden' style={{ background: `radial-gradient(75.78% 73.23% at 50.37% 49.41%, rgba(0, 0, 0, 0.5) 58.03%, rgb(10, 124, 255) 100%)`, }}>
        <div className=' bg-[#FFFFFF36] w-full h-[22px] sm:h-[38px]  xl:h-[63px] -rotate-[3deg] relative top-[40px] z-10'>
          <div className='scroll flex gap-[12px] items-center justify-between text-[#FFFFFF] inter-medium text-[14px] sm:text-[24px] xl:text-[41px] text-nowrap'>
            <PiStarFourFill className="text-[#0B7DFF] flex-shrink-0" />
            <p>Dashboard</p>
            <PiStarFourFill className="text-[#0B7DFF] flex-shrink-0" />
            <p>Wireframe</p>
            <PiStarFourFill className="text-[#0B7DFF] flex-shrink-0" />
            <p>User Research</p>
            <PiStarFourFill className="text-[#0B7DFF] flex-shrink-0" />
            <p>UX Design</p>
            <PiStarFourFill className="text-[#0B7DFF] flex-shrink-0" />
            <p>App Design</p>
            <PiStarFourFill className="text-[#0B7DFF] flex-shrink-0" />
          </div>
        </div>
      </div>
      <div id='service' ref={serviceRef} className='w-full'>
        <Service />
      </div>
      <div id='contact' ref={contactRef} className='w-full'>
        <Form />
      </div>
      <Footer setHeaderTab={setHeaderTab} />
    </div>
  )
}
