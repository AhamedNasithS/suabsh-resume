import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

export default function Protfolio() {
  const [hoverIndex, sethoverIndex] = useState(null)

  const projects = [
    {title: "Coffeetiria"},
    {title: "Scubeo Diving App"},
    {title: "Home on"},
    {title: "NFT Dashboard"},
    {title: "Greener"},
    {title: "Car Care"},
  ]

  return (
    <div className='mt-[20px] sm:mt-[80px] relative w-full px-[20px] sm:px-0'>
      <div className='absolute bg-blue-500 opacity-70 blur-[200px] w-[150px] sm:w-3/12 h-1/2 z-0 top-0 sm:top-1/2 right-0 sm:-translate-y-1/2 '></div>
      <div className='relative z-10'>
        <div className='text-[24px] sm:text-[60px] inter-bold text-[#FFFFFF] text-center'>
          <h3>Let’s have a look at </h3>
          <h3 className='bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF33] w-fit bg-clip-text text-transparent mx-auto'>my portfolio</h3>
        </div>
        <p className='mt-[14px] sm:mt-[24px] text-[#A6AAB2] text-[14px] sm:text-[18px] inter-medium text-center'>I seek to push the limits of creativity to create high-engaging, user-friendly, <br className='hidden lg:hidden'/> and memorable interactive experiences.</p>
        <div className='px-[30px] sm:px-[50px] rounded-full w-fit mx-auto mt-[20px] sm:mt-[80px]' style={{background: `radial-gradient(69.78% 74.23% at 50.37% 49.41%, rgba(0, 0, 0, 0.5) 58.03%, #0A7CFF 100%)`,}}>
          <div className='py-[10px] border-b-[2px] sm:border-b-[5px] border-[#0A7CFF]'>
            <p className='inter-medium text-[16px] sm:text-[27px] bg-gradient-to-b from-[#0A7CFF] via-[#0A7CFF] to-[#FFFFFF] bg-clip-text text-transparent'>Website</p>
          </div>
        </div>
        <div className='mt-[20px] sm:mt-[50px]'>
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 sm:w-10/12 mx-auto gap-[20px] sm:gap-[25px]'>
            {projects.map((i, index) => (
              <div key={index} onMouseEnter={() => { sethoverIndex(index) }} onMouseLeave={() => { sethoverIndex(null) }} className='p-[20px] sm:p-[40px] rounded-[18px] border-[#FFFFFF26] border text-[16px] sm:text-[32px] inter-semibold text-[#FFF] flex justify-between items-center' style={{background: `radial-gradient(100% 87.23% at 38.37% 44.41%, rgba(0, 0, 0, 0.5) 58.03%, #0A7CFF 100%)`,}}>
                <p>{i.title}</p>
                <div className={`size-[30px] sm:size-[60px] cursor-pointer flex justify-center items-center bg-gradient-to-br from-[#0A7CFF] via-[#0A7CFF] to-[#FFFFFF] rounded-full transition-opacity duration-700 ${hoverIndex === index ? "xl:opacity-100" : "opacity-100 xl:opacity-0"}`}>
                  <GoArrowUpRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
