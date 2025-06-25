import React from 'react'
import rocket from "../../../images/rocket.webp";
import { BriefcaseBusiness, House, Phone, UserRound } from 'lucide-react';

export default function Footer() {
    const handleHomeClick = () => {
        const element = document.getElementById('home');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 160,
            behavior: 'smooth'
          });
        }
      };
    
      const handleContactClick = () => {
        const element = document.getElementById('contact');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 160,
            behavior: 'smooth'
          });
        }
      };
    
      const handleAboutClick = () => {
        const element = document.getElementById('about');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 90,
            behavior: 'smooth'
          });
        }
      };
    
      const handleWorkClick = () => {
        const element = document.getElementById('work');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 90,
            behavior: 'smooth'
          });
        }
      };

  return (
    <div className='mt-[150px] sm:mt-[200px] relative w-full'>
        <img src={rocket} alt='rocket' className='absolute left-0 -top-[120px] sm:-top-[150px] z-0 w-[150px] sm:w-auto' />
        <div className='relative border-t border-[#0A7CFF] py-[100px] z-10 px-[20px] sm:px-0'>
            <div className='grid sm:flex gap-[50px] flex-wrap sm:justify-center items-center text-[#FFF] text-[17px] w-full'>
                <div className='flex gap-[10px] items-center justify-start cursor-pointer' onClick={() => { handleHomeClick() }}>
                    <House size={20}/>
                    <p>Home</p>
                </div>
                <div className='flex gap-[10px] items-center cursor-pointer' onClick={() => { handleAboutClick() }}>
                    <UserRound size={20}/>
                    <p>About me</p>
                </div>
                <div className='flex gap-[10px] items-center cursor-pointer' onClick={() => { handleWorkClick() }}>
                    <BriefcaseBusiness size={20}/>
                    <p>Work</p>
                </div>
                <div className='flex gap-[10px] items-center cursor-pointer' onClick={() => { handleContactClick() }}>
                    <Phone size={20}/>
                    <p>Contact</p>
                </div>
            </div>
            {/* <div className='mt-[50px] flex gap-[10px] items-center'></div> */}
        </div>
        <div className='absolute bg-blue-500 opacity-70 blur-[200px] w-1/2 h-[300px] sm:h-[200px] bottom-0 z-0 left-1/2 -translate-x-1/2'></div>
    </div>
  )
}
