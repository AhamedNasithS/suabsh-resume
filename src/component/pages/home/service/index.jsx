import React from 'react'
import bulb from "../../../images/light-bulb.svg";
import ux from "../../../images/ux-ui.svg";
import web from "../../../images/web-design.svg";
import app from "../../../images/app-design.svg";
import design from "../../../images/graph-design.svg";


export default function Service() {
    return (
        <div className='mt-[20px] sm:mt-[80px] relative w-11/12 mx-auto'>
            <div className='flex justify-center'>
                <h4 className='text-[24px] sm:text-[60px] inter-bold text-[#FFFFFF] text-center'>Services</h4>
                <img src={bulb} alt='bulb' className='mt-[10px] sm:mt-[20px] h-[40px] sm:h-auto' />
            </div>
            <p className=' text-[#A6AAB2] text-[14px] sm:text-[18px] inter-medium text-center'>We offer a range of high-quality design services tailored to elevate your brand and <br /> user experience.</p>
            <div className='mt-[18px] sm:mt-[24px] grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] sm:gap-[31px]'>
                <div className='rounded-[14px] bg-[#0B7DFF4D] py-[10px] px-[18px]'>
                    <img src={ux} alt='ux' className='w-[50px] sm:w-auto'/>
                    <p className='text-[#FFFFFF] text-[18px] sm:text-[32px] inter-semibold mt-[12px] sm:mt-[26px]'>UI/UX</p>
                    <p className='text-[#FFFFFF] text-[12px] sm:text-[19px] inter-regular mt-[8px] sm:mt-[16px]'>We design intuitive and engaging user interfaces to ensure seamless user experiences </p>
                </div>
                <div className='rounded-[14px] bg-[#0B7DFF4D] py-[10px] px-[18px]'>
                    <img src={web} alt='ux' className='w-[50px] sm:w-auto'/>
                    <p className='text-[#FFFFFF] text-[18px] sm:text-[32px] inter-semibold mt-[12px] sm:mt-[26px]'>Web Design</p>
                    <p className='text-[#FFFFFF] text-[12px] sm:text-[19px] inter-regular mt-[8px] sm:mt-[16px]'>Crafting responsive and modern websites that are visually appealing and optimized for performance.</p>
                </div>
                <div className='rounded-[14px] bg-[#0B7DFF4D] py-[10px] px-[18px]'>
                    <img src={app} alt='ux' className='w-[50px] sm:w-auto' />
                    <p className='text-[#FFFFFF] text-[18px] sm:text-[32px] inter-semibold mt-[12px] sm:mt-[26px]'>App Design</p>
                    <p className='text-[#FFFFFF] text-[12px] sm:text-[19px] inter-regular mt-[8px] sm:mt-[16px]'>Designing mobile apps with a focus on usability, aesthetics, and smooth user interactions.</p>
                </div>
                <div className='rounded-[14px] bg-[#0B7DFF4D] py-[10px] px-[18px]'>
                    <img src={design} alt='ux' className='w-[50px] sm:w-auto' />
                    <p className='text-[#FFFFFF] text-[18px] sm:text-[32px] inter-semibold mt-[12px] sm:mt-[26px]'>Graphic Design </p>
                    <p className='text-[#FFFFFF] text-[12px] sm:text-[19px] inter-regular mt-[8px] sm:mt-[16px]'>Creating striking visual content to communicate your brand message effectively and creatively. </p>
                </div>
            </div>
        </div>
    )
}
