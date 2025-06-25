import React from 'react'
import img from "../../../images/about.webp";

export default function About() {
    return (
        <div className='mt-[80px] relative px-[20px] sm:px-0 sm:w-9/12 mx-auto flex flex-col xl:flex-row gap-[25px] items-center justify-center'>
            <img src={img} alt='img' className='flex shrink-0 w-[200px] sm:w-auto' />
            <div className='text-[#FFFFFF] '>
                <h4 className='inter-semibold text-[24px] sm:text-[48px]'>About Me </h4>
                <p className='inter-regular text-[12px] sm:text-[15px] mt-[11px]'>I am a passionate and motivated UI/UX Designer, eager to start my <br className='hidden sm:block'/> career by creating user-friendly and visually appealing designs. I <br className='hidden sm:block'/> have experience using tools like Figma and enjoy solving design <br className='hidden sm:block'/> challenges. I bring fresh ideas and am always eager to learn and <br className='hidden sm:block'/> improve my skills. My goal is to create impactful, user-centered <br className='hidden sm:block'/> digital experiences.</p>
                <div className='mt-[11px]'>
                    <p>UX</p>
                    <div className='relative w-full h-[9px] bg-[#EDECEC] rounded-full mt-[13px]'>
                        <div className='h-full w-[90%] bg-[#0B7DFF] rounded-l-full relative'>
                            <div className='size-[20px] bg-[#EDECEC] rounded-full border border-[#0B7DFF] absolute right-0 top-1/2 -translate-y-1/2' style={{ boxShadow: "0px 3px 5px 0px #00000033" }}></div>
                        </div>
                    </div>
                </div>
                <div className='mt-[11px]'>
                    <p>Website Design</p>
                    <div className='relative w-full h-[9px] bg-[#EDECEC] rounded-full mt-[13px]'>
                        <div className='h-full w-[80%] bg-[#0B7DFF] rounded-l-full relative'>
                            <div className='size-[20px] bg-[#EDECEC] rounded-full border border-[#0B7DFF] absolute right-0 top-1/2 -translate-y-1/2' style={{ boxShadow: "0px 3px 5px 0px #00000033" }}></div>
                        </div>
                    </div>
                </div>
                <div className='mt-[11px]'>
                    <p>App Design </p>
                    <div className='relative w-full h-[9px] bg-[#EDECEC] rounded-full mt-[13px]'>
                        <div className='h-full w-[94%] bg-[#0B7DFF] rounded-l-full relative'>
                            <div className='size-[20px] bg-[#EDECEC] rounded-full border border-[#0B7DFF] absolute right-0 top-1/2 -translate-y-1/2' style={{ boxShadow: "0px 3px 5px 0px #00000033" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bg-blue-500 opacity-70 blur-[200px] w-[400px] h-[200px] top-1/2 sm:top-auto -translate-y-1/2 sm:-translate-y-0 sm:bottom-0 z-0 -left-[150px] sm:-left-[350px]'></div>
        </div>
    )
}
