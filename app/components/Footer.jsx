import React, { useState } from 'react'
import logo from '@/public/UWWA _ SaaS Design Studio/6575a2973dcb29ab010e4cff_uwwa-logo.svg'
import Image from 'next/image'

const Footer = () => {
    const [movetophover, setmovetophover] = useState(false)
    const handlemovetophoverbutton = (state) => {
        setmovetophover(state)
    }
    return (
        <article className="pb-[18px] xl:px-[64px] pt-[100px] relative">
            <div className="w-full mx-auto relative">
                <div className="grid auto-cols-[1fr] gap-x-[90px] gap-col-[100px] grid-rows-[auto] grid-cols-[minmax(max-content,auto)_max-content_max-content_minmax(auto,130px)]">
                    <div id="w-node-_257721c6-3ed8-277f-dbb1-60931b0806c9-f02c5440" className="w-layout-vflex footer-item">
                        <a href="#header" className="brand w-inline-block">
                            <Image src={logo} alt="" width={80} height={29} className="" />
                            {/* <img src="https://cdn.prod.website-files.com/6554adf723d82cf38df7e63b/6575a2973dcb29ab010e4cff_uwwa-logo.svg" loading="lazy" width="80" height="29" alt="" className="img-contain"> */}
                        </a>
                    </div>

                    <ul role="list" className="footer-ul"><li className="footer-li"><a href="#" className="p2-b footer-link">Home</a></li><li className="footer-li"><a href="#" className="p2-b footer-link">Services</a></li><li className="footer-li"><a href="#" className="p2-b footer-link">Process</a></li><li className="footer-li"><a href="#" className="p2-b footer-link">Case studies</a></li></ul>
                    <ul role="list" className="footer-ul"><li className="footer-li"><a href="#" className="p2-b footer-link">Instagram</a></li><li className="footer-li"><a href="#" className="p2-b footer-link">LinkedIn</a></li><li className="footer-li"><a href="#" className="p2-b footer-link">Twitter</a></li></ul>

                    <div className="justify-end">
                        <a href="#header" aria-label="to-the-top" id="w-node-_257721c6-3ed8-277f-dbb1-60931b0806e4-f02c5440" data-w-id="257721c6-3ed8-277f-dbb1-60931b0806e4" className="cursor-none xl:cursor-pointer w-inline-block">
                            <div onMouseEnter={() => handlemovetophoverbutton(true)} onMouseLeave={() => handlemovetophoverbutton(false)} id="w-node-_257721c6-3ed8-277f-dbb1-60931b0806e5-f02c5440" data-w-id="257721c6-3ed8-277f-dbb1-60931b0806e5" className="[box-shadow:0_0_0_0_#262625] transition-[box-shadow] duration-[1s] [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] bg-[#262625] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center" >
                                <svg width="32" height="46" viewBox="0 0 32 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`stroke ${movetophover ? "animate-arrow" : ''} `} d="M16 45L16 0.999999M16 0.999999L0.999999 15.3333M16 0.999999L31 15.3333" stroke="#fff" stroke-linecap="round"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <a href="#" className="p2-l hidden opacity-40 footer-link-sm">Terms &amp; Conditions</a><a href="#" className="p2-l opacity-40 hidden footer-link-sm">Cookie Policy</a><div className="text-left [grid-area:2/5/3/3] opacity-40">© 2023 All rights reserved. All wrongs reversed.</div></div></div>
        </article>
    )
}

export default Footer
