
'use client'
import Image from "next/image";
import mainarrow from '@/public/UWWA _ SaaS Design Studio/mainarrow.svg'
import circlestar from '@/public/UWWA _ SaaS Design Studio/circlestar.svg'
import { motion } from 'framer-motion'
import downarrow from '@/public/UWWA _ SaaS Design Studio/smalldownarrow.svg'
import Marquee from './Marquee'
import { regularppmori, semiboldppmori } from '@/utils/fonts'
import React, { useState } from 'react'

const Hero = () => {
    const [explorearrowstate, setexplorearrowstate] = useState(false)

    const explore = {
        hover: {
            y: '-100%'
        }
    }
    const handleexplorearrowhoverbutton = (state) => {
        setexplorearrowstate(state)
    }
    return (
        <section className="py-[100px] px-[5%] xl:px-[64px] pt-[190px] pb-[30px]">
            <div className="w-full mx-auto relative">
                <div className="flex gap-[80px] LL:gap-[150px] flex-wrap justify-between items-stretch mb-[40px]">
                    <div className="flex-none items-stretch flex flex-col">
                        <div>
                            <h1 className={` ${semiboldppmori.className}  my-0 text-[8vw] LL:text-[120px] font-semibold leading-[1]`}>
                                We design first
                                <br />
                                <span className="relative text-[1em] ">&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Image src={mainarrow} alt="" fill={true} />
                                </span>
                                &nbsp;class SaaS&nbsp;
                                <span className="relative text-[1em]">&nbsp;&nbsp;&nbsp;
                                    <Image src={circlestar} alt="" fill={true} />
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] justify-between items-start min-w-[260px] max-w-[425px] pt-[10px] pb-[10px] flex-1">
                        <div className="opacity-80">
                            <p className={` ${regularppmori.className} text-[#262625] text-left traacking-[-.02em] uppercase text-[.875em] font-semibold leading-[1.71]`}>
                                <span className="text-[#baa9a9]">Uwwa </span>
                                is a design studio focusing solely on SaaS products. We help businesses achieve goals through design.
                            </p>
                        </div>
                        <div>
                            <motion.a onMouseEnter={() => handleexplorearrowhoverbutton(true)} onMouseLeave={() => handleexplorearrowhoverbutton(false)} whileHover='hover' href="" className="flex gap-[5px] font-semibold max-w-full ">
                                <div className="flex justify-center items-center ">
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={`stroke ${explorearrowstate ? "animate-arrow" : ''}`} d="M1 0.75H4C5.10457 0.75 6 1.64543 6 2.75V5.25M6 5.25L4.5 3.75M6 5.25L7.5 3.75" stroke="currentColor" stroke-linecap="square"></path>
                                    </svg>
                                </div>
                                <div className={`${regularppmori.className} flex h-[19px] flex-col relative overflow-hidden`}>
                                    <motion.div variants={explore} className="text-[.825rem] font-semibold leading-[1.57]">Explore works</motion.div>
                                    <motion.div variants={explore} className="text-[.825rem] font-semibold leading-[1.57]">Explore works</motion.div>
                                </div>
                            </motion.a>
                        </div>
                    </div>
                </div>

                <Marquee />

            </div>
        </section>
    )
}

export default Hero
