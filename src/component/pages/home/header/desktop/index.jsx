import React, { useEffect, useState } from 'react'
import { Logo } from '../svg';
import { motion } from "framer-motion"
import { Download } from 'lucide-react';
import pdf from "../Subash-CV.pdf";


export default function Desktop({ headerTab, setHeaderTab, handleHomeClick, handleContactClick, handleAboutClick, handleWorkClick, handleServiceClick }) {

    const [position, setPosition] = useState(window.innerWidth);

    useEffect(() => {
        window.onresize = function () {
            setPosition(window.innerWidth);
        };
    }, []);


    return (
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className={`flex justify-between items-center h-[80px] px-[30px] w-full mx-auto lg:px-[60px] py-[8px] z-[55] fixed bg-[#000000A3]`}>
            <a title='logo' href='/'>
                <Logo width={position >= 1024 ? "133" : "100"} height={position >= 1024 ? "51" : "45"} />
            </a>
            <div className={`flex p-[10px] rounded-full border-[1px] border-[#FFFFFF26] bg-[#FFFFFF26] relative z-[20]`} style={{ boxShadow: '0px 4px 7px 0px #432E860A' }}>
                <div className='px-[8px] lg:px-[14px] py-[2px]'><div className={`text-[13px] lg:text-[16px] cursor-pointer transition-colors duration-300 ${headerTab === "Home" ? "text-[#0E7BF8] inter-semibold" : "text-[#fff] inter-medium"}`} onClick={(e) => { setHeaderTab('Home'); handleHomeClick() }}>Home</div></div>
                <div className='px-[8px] lg:px-[14px] py-[2px]'><div className={`text-[13px] lg:text-[16px] cursor-pointer transition-colors duration-300 ${headerTab === "Work" ? "text-[#0E7BF8] inter-semibold" : "text-[#fff] inter-medium"}`} onClick={(e) => { setHeaderTab('Work'); handleWorkClick() }}>Work</div></div>
                <div className='px-[8px] lg:px-[14px] py-[2px]'><div className={`text-[13px] lg:text-[16px] cursor-pointer transition-colors duration-300 ${headerTab === "About" ? "text-[#0E7BF8] inter-semibold" : "text-[#fff] inter-medium"}`} onClick={() => { setHeaderTab('About'); handleAboutClick() }}>About</div></div>
                <div className='px-[8px] lg:px-[14px] py-[2px]'><div className={`text-[13px] lg:text-[16px] cursor-pointer transition-colors duration-300 ${headerTab === "Service" ? "text-[#0E7BF8] inter-semibold" : "text-[#fff] inter-medium"}`} onClick={(e) => { setHeaderTab('Service'); handleServiceClick() }}>Service</div></div>
                <div className='px-[8px] lg:px-[14px] py-[2px]'><div className={`text-[13px] lg:text-[16px] cursor-pointer transition-colors duration-300 ${headerTab === "Contact" ? "text-[#0E7BF8] inter-semibold" : "text-[#fff] inter-medium"}`} onClick={(e) => { setHeaderTab('Contact'); handleContactClick() }}>Contact</div></div>
            </div>
            <button
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = `${pdf}`; // path relative to public folder
                    link.download = 'Subash-CV.pdf'; // file name for download
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}
                className='p-[10px] lg:px-[26px] lg:py-[12px] flex rounded-full bg-[#000000] border border-[#0A7CFF] inter-medium gap-[8px] items-center text-[14px] lg:text-[18px] text-white'
                style={{ boxShadow: '0px 0px 30px 0px #0A7CFFCC inset' }}
            >
                <p>Download CV</p>
                <Download size={position >= 1024 ? 24 : 16} />
            </button>
        </motion.div>
    )
}
