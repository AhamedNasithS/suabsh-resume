import React from 'react'
import { Logo } from '../svg';
import { motion } from "framer-motion";
import { Download } from 'lucide-react';


export default function Mobile() {

    return (
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="w-full z-[55] fixed bg-[#000000]">
            <div className={`w-full flex justify-between items-center p-[20px] z-[50] border-b-[1px] border-[#0A7CFF] relative`}>
                <a title='Workfast' href='/'>
                    <div className='py-[6px] border border-[#0A7CFF] rounded-[16px]' style={{ boxShadow: '0px 4px 7px 0px #432E860A' }}>
                        <Logo width="100" height="26" />
                    </div>
                </a>
                <div className="flex gap-[10px] items-center">
                    <button className='px-[16px] py-[8px] flex rounded-full bg-[#000000] border border-[#0A7CFF] inter-medium gap-[4px] items-center text-[12px] text-white' style={{ boxShadow: "0px 0px 30px 0px #0A7CFFCC inset" }}>
                        <p>Download CV</p>
                        <Download size={10}/>
                    </button>
                </div>
            </div>
            {/* <div className={`${isOpen ? "max-h-full opacity-100 pb-6" : "max-h-0 opacity-0 hidden"} w-full transition-all duration-300 relative rounded-b-[20px] bg-[#FFF] z-[50]`}>
                <div className={`w-10/12 mx-auto`}>
                    <div className={`py-[18px] cursor-pointer flex justify-between`} onClick={(e) => { setIsUserGuide(!isUserGuide) }}>
                        <p className="font-semibold text-[18px]">User Guide</p>
                        <FaAngleRight className={`text-[18px] text-[#24223E]`} />
                    </div>
                    <div className={`py-[18px] cursor-pointer ${location?.pathname === "/blog" ? "text-[#FDD01F]" : "text-[#24223E]"}`} onClick={(e) => { navigate('/blog') }}>
                        <p className="font-semibold text-[18px]">Blog</p>
                    </div>
                    <div className={`py-[18px] cursor-pointer ${location?.pathname === "/pricing" ? "text-[#FDD01F]" : "text-[#24223E]"}`} onClick={() => { navigate('/pricing') }}>
                        <p className="font-semibold text-[18px]">Pricing</p>
                    </div>
                    <div className={`py-[18px] cursor-pointer ${location?.pathname === "/investor" ? "text-[#FDD01F]" : "text-[#24223E]"}`} onClick={(e) => { navigate('/investor') }}>
                        <p className="font-semibold text-[18px]">Investor</p>
                    </div>
                    <div className={`py-[18px] cursor-pointer ${location?.pathname === "/franchise" ? "text-[#FDD01F]" : "text-[#24223E]"}`} onClick={(e) => { navigate('/franchise') }}>
                        <p className="font-semibold text-[18px]">Franchise</p>
                    </div>
                    <button className='border border-[#C5A313] bg-[#FDD01F] rounded-[12px] h-[45px] w-full text-[#2A2200] text-[18px] font-semibold' onClick={(e) => { handleLiginClick(e) }}>Login</button>
                </div>
            </div>
            {isOpen && (
                <div className='fixed h-screen w-full top-0 left-0 bg-[#000]/[90%] z-[10]' onClick={() => setIsOpen(!isOpen)}></div>
            )} */}
        </motion.div>
    )
}
