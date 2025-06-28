import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import project1 from "../../../images/cafeteria.png";
import project2 from "../../../images/scuba-diving.png"
import project3 from "../../../images/home-on.png"
import project4 from "../../../images/nft-dashboard.png"
import project5 from "../../../images/greener.png"
import project6 from "../../../images/super-service.png"
import projectImg1 from "../../../images/cafeteria-img.webp";
import projectImg2 from "../../../images/scuba-dive-img.webp"
import projectImg3 from "../../../images/home-on-img.webp"
import projectImg4 from "../../../images/dashboard-img.webp"
import projectImg5 from "../../../images/greener-img.webp"
import projectImg6 from "../../../images/super-service-img.png"
import cave from "../../../images/cave.png"
import { FaFigma } from "react-icons/fa";


export default function Protfolio() {
  const [hoverIndex, sethoverIndex] = useState(null);
  const [selectIndex, setSelectIndex] = useState(null);

  const projects = [
    { title: "Coffeetiria", image: `${project1}`, bigImage: `${projectImg1}` },
    { title: "Scubeo Diving App", image: `${project2}`, bigImage: `${projectImg2}` },
    { title: "Home on", image: `${project3}`, bigImage: `${projectImg3}` },
    { title: "NFT Dashboard", image: `${project4}`, bigImage: `${projectImg4}` },
    { title: "Greener", image: `${project5}`, bigImage: `${projectImg5}` },
    { title: "Car Care", image: `${project6}`, bigImage: `${projectImg6}` },
  ]

  return (
    <div className='mt-[20px] sm:mt-[80px] relative w-full px-[20px] sm:px-0'>
      <div className='absolute bg-blue-500 opacity-70 blur-[200px] w-[150px] sm:w-3/12 h-1/2 z-0 top-0 sm:top-1/2 right-0 sm:-translate-y-1/2 '></div>
      <div className='relative z-10'>
        <div className='text-[24px] sm:text-[60px] inter-bold text-[#FFFFFF] text-center'>
          <h3>Let’s have a look at </h3>
          <h3 className='bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF33] w-fit bg-clip-text text-transparent mx-auto'>my portfolio</h3>
        </div>
        <p className='mt-[14px] sm:mt-[24px] text-[#A6AAB2] text-[14px] sm:text-[18px] inter-medium text-center'>I seek to push the limits of creativity to create high-engaging, user-friendly, <br className='hidden lg:hidden' /> and memorable interactive experiences.</p>
        <div className='mt-[20px] sm:mt-[50px]'>
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 sm:w-10/12 mx-auto gap-[20px] sm:gap-[25px]'>
            {projects.map((i, index) => (
              <div key={index} onMouseEnter={() => { sethoverIndex(index) }} onMouseLeave={() => { sethoverIndex(null) }} className='relative rounded-t-[18px] rounded-b-[30px] border-[#FFFFFF26] border text-[16px] sm:text-[24px] inter-semibold text-[#FFF]' style={{ background: `radial-gradient(100% 99.23% at 62.37% 68.41%, rgba(0, 0, 0, 0.5) 60.03%, rgb(10, 124, 255) 100%)`, }}>
                <div className='py-[24px] border-b border-[#FFFFFF26] text-center'>
                  <p>{i.title}</p>
                </div>
                <img src={i.image} alt='projectcs' className='mt-[40px] relative z-0' />
                <div className={`absolute bottom-0 right-0 z-10 size-[180px] rounded-b-[30px] transition-opacity duration-700 ${hoverIndex === index ? "xl:opacity-100" : "opacity-100 xl:opacity-0"}`}>
                  <img src={cave} alt='cave' className='absolute z-0 -right-[1px] rounded-b-[30px]' />
                  <div className={`absolute right-[20px] bottom-[20px] size-[80px] cursor-pointer flex justify-center items-center bg-gradient-to-br from-[#0A7CFF] via-[#0A7CFF] to-[#FFFFFF] rounded-full`} onClick={() => { setSelectIndex(index) }}>
                    <GoArrowUpRight className='text-[30px]' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectIndex !== null && (
        <div className="flex justify-center items-center text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#121825CC] z-[90]">
          <div
            className="w-[95%] h-[95%] flex items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat relative"
            style={{
              backdropFilter: "blur(100px)",
            }}
          >
            <div
              className="absolute top-5 right-5 cursor-pointer border border-[#FFFFFF] text-[#FFF] p-2 rounded-lg"
              onClick={() => {
                setSelectIndex(null);
              }}
            >
              <RxCross2 />
            </div>
            <div
              className="absolute top-5 left-5 cursor-pointer flex gap-2 text-[#FFF] items-center p-2 inter-semibold"
              onClick={() => {
                window.open(
                  "https://www.figma.com/design/3TlU4Lyc1jKS6hRF2jNkBd/Subash-portfolio?node-id=2008-10293&t=PVnaFXMchQifJPLv-0",
                  "_blank", "noopener,noreferrer"
                );
              }}
            >
              <FaFigma />
              See design
            </div>
            <div className='h-[80%] max-w-[80%] overflow-y-scroll'>
              <img src={projects[selectIndex]?.bigImage} alt='figma-images'/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
