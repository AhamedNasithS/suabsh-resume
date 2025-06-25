import React from 'react'
import banneImg from "../../../images/subash.webp";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export default function Banner() {
    return (
        <div className="bg-cover bg-center h-full w-full flex flex-col justify-between relative px-[40px] mb-[20px]  lg:mb-[60px] xl:mb-[100px] overflow-hidden"
        >
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='absolute bg-blue-500 opacity-70 blur-[200px] w-1/2 h-[300px] sm:h-[200px] z-0 left-1/2 -translate-x-1/2'></div>
            <div className='mt-[20px]  lg:mt-[60px] xl:mt-[100px] relative z-10 overflow-hidden'>
                <img src={banneImg} alt='bannerIng' className='hidden sm:block absolute z-10 bottom-0 lg:-bottom-[80px] left-1/2 -translate-x-1/2 w-[250px] lg:w-[400px] xl:w-[550px]' />
                <div className='relative z-[1] mt-[100px] sm:mt-[150px]'>
                    <h1 className='text-[20px] sm:text-[30px] lg:text-[40px] xl:text-[50px] text-[#FFFFFF] vast-shadow-regular text-start'>I’m Subash</h1>
                    <h2 className='text-[24px] sm:text-[50px] lg:text-[80px] xl:text-[100px] text-[#FFF] vast-shadow-regular scroll w-fit'>UX/UI   DESIGNER</h2>
                </div>
                <img src={banneImg} alt='bannerIng' className='sm:hidden w-[300px]' />
                <div className='flex flex-col sm:flex-row justify-between gap-[20px] w-full mt-[80px] xl:mb-[150px] relative z-[1]'>
                    <div>
                        <FaQuoteLeft className='size-[16px] sm:size-[20px] lg:size-[36px] fill-[#FFFFFF]' />
                        <p className='mt-[16px] lg:mt-[24px] text-[13px] lg:text-[15px] inter-regular text-[#FFFFFF]'>Subash’s Exceptional UX/UI <br className='hidden sm:block lg:hidden'/> design <br className='hidden lg:block'/> ensure our website’s <br className='hidden sm:block lg:hidden'/>  success. <br className='hidden lg:block'/> Highly  Recommended</p>
                    </div>
                    <div>
                        <div className='flex gap-[3px] items-center justify-start sm:justify-end'>
                            {[...Array(5)].map((_, index) => (
                                <IoIosStar key={index} className='text-[#FFFFFF4D] size-[16px] sm:size-[26px]' />
                            ))}
                        </div>
                        <p className='mt-[8px] sm:mt-[16px] lg:mt-[21px] inter-medium text-[16px] sm:text-[30px] lg:text-[47px] text-[#FFF] text-start sm:text-end'>+2 Years</p>
                        <p className='mt-[5px] inter-regular text-[10px] sm:text-[16px] lg:text-[20px] text-[#FFF] text-start sm:text-end'>Experince</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
