'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

import maryan from '@/public/UWWA _ SaaS Design Studio/maryna.png'
import belive from '@/public/UWWA _ SaaS Design Studio/belive.svg'
import TestimonialINdividaul from './TestimonialINdividaul'
import { motion } from 'framer-motion'
import { regularppmori, semiboldppmori } from '@/utils/fonts'
const Testimonials = () => {
    const testimonies = [
        {
            personname: `Maryna Protsenko`,
            role: `Product Manager`,
            company: belive,
            main: `It's a complete pleasure to work with UWWA!`,
            desc: `Borys' user-centric approach is something I really admire. He never settles for the surface-level design; instead, but instead dives deeper into the core user pain points and studies them, to ensure that design solution solves actual needs. Collaboration with Borys has been incredibly productive, and has been a significant factor in our ongoing success and growth.`,
            image: maryan,

        },
        {
            personname: `Maryna Protsenko`,
            role: `Product Manager`,
            company: belive,
            main: `With no hesitation or doubt in my mind, I recommend working with Kristina to build out your design team`,
            desc: `Borys' user-centric approach is something I really admire. He never settles for the surface-level design; instead, but instead dives deeper into the core user pain points and studies them, to ensure that design solution solves actual needs. Collaboration with Borys has been incredibly productive, and has been a significant factor in our ongoing success and growth.`,
            image: maryan,

        },
        {
            personname: `Maryna Protsenko`,
            role: `Product Manager`,
            company: belive,
            main: `Kristina helped to assemble and coordinate a team of 120 talented designers around the world`,
            desc: `Borys' user-centric approach is something I really admire. He never settles for the surface-level design; instead, but instead dives deeper into the core user pain points and studies them, to ensure that design solution solves actual needs. Collaboration with Borys has been incredibly productive, and has been a significant factor in our ongoing success and growth.`,
            image: maryan,

        }]
    const testimonyref = useRef(null)
    const [current, setcurrent] = useState(1)
    const [translate, setTranaslte] = useState(0)
    const [lefthover, setlefthover] = useState(false)
    const [righthover, setrighthover] = useState(false)


    const handleLeftClick = () => {
        // console.log(testimonyref.current.getBoundingClientRect())
        const testimonywrapperwidth = testimonyref.current.getBoundingClientRect().width
        // console.log(testimonywrapperwidth);

        if (current <= 1) {
            setcurrent(3)
            setTranaslte(-2 * testimonywrapperwidth)
        }
        else {
            setcurrent(prev => --prev)
            setTranaslte(prev => prev + testimonywrapperwidth)
        }

    }

    const handleRightClick = () => {
        const testimonywrapperwidth = testimonyref.current.getBoundingClientRect().width
        // console.log(testimonywrapperwidth);

        if (current >= 3) {
            setcurrent(1)
            setTranaslte(0)
        }
        else {
            setcurrent(prev => ++prev)
            setTranaslte(prev => prev - testimonywrapperwidth)
        }
    }
    // console.log(current, translate);

    const handlelefthoverbutton = (state) => {
        setlefthover(state)
    }
    const handlerighthoverbutton = (state) => {
        setrighthover(state)
    }

    return (
        <section className='xl:px-[64px] py-[100px] relative min-h-[200vh] mb-[-100vh] '>
            <div className='w-full min-h-[100vh] sticky top-[-10vh]'>
                <div className='w-full mx-auto relative w-layout-vflex'>
                    <div className='[grid-template-columns:minmax(101px,auto)_minmax(auto,max-content)_minmax(auto,528px)] gap-x-[8vw] justify-between w-full mt-auto grid-rows-[auto] auto-cols-[1fr] grid '>
                        <div class="opacity-80">
                            <h1 class={`${regularppmori.className} uppercase object-fill text-[12px] font-normal leading-[2] my-0 ${regularppmori.className}`}>/ Testimonials /</h1>
                        </div>
                        <div className='row-span-1 col-span-1 '>
                            <h2 className={`relative my-0 text-[40px] font-semibold leading-[1.2] ${semiboldppmori.className} `}>
                                Here’s what
                                <br />
                                others say
                            </h2>
                        </div>
                        <div className='w-full overflow-hidden '>
                            <div className='flex flex-col h-auto gap-y-[24px] bg-[rgb(255,255,255)]/[0] text-center relative '>
                                <div ref={testimonyref} className='flex-1 z-[1] whitespace-nowrap  relative left-0 right-0 block mb-[-50px] overflow-hidden'>

                                    {testimonies.map((testimony, index) =>
                                        <TestimonialINdividaul current={current} indexed={index} image={testimony.image} main={testimony.main} desc={testimony.desc} personname={testimony.personname} role={testimony.role} company={testimony.company} tranfer={translate} />
                                    )}
                                </div>
                                <motion.div onMouseEnter={() => handlelefthoverbutton(true)} onMouseLeave={() => handlelefthoverbutton(false)} onClick={() => handleLeftClick()} className='leftarrow relative left-[5px] right-[65px] bg-[#262625] [box-shadow:0_0_0_0_#262625] hover:[box-shadow:0_0_0_3px_#262625] rounded-[50%] flex justify-center items-center w-[46px] h-[46px] m-0 [transition:opacity_.2s,box-shadow_.2s]  top-auto bottom-[5px] z-[3] cursor-pointer text-white text-[40px] overflow-hidden'>
                                    <div className='flex items-center justify-center'>
                                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class={`stroke  ${lefthover ? "animate-arrow" : ''}`} d="M21 8H1M1 8L7.66667 1M1 8L7.66667 15" stroke="currentColor" stroke-linecap="round"></path>
                                        </svg>
                                    </div>
                                </motion.div>

                                <div onMouseEnter={() => handlerighthoverbutton(true)} onMouseLeave={() => handlerighthoverbutton(false)} onClick={() => handleRightClick()} className='relative top-[-75px] left-[64px] right-auto bg-[#262625] [box-shadow:0_0_0_0_#262625] hover:[box-shadow:0_0_0_3px_#262625] rounded-[50%] flex justify-center items-center w-[46px] h-[46px] m-0 [transition:opacity_.2s,box-shadow_.2s]   bottom-[5px] z-[4] cursor-pointer text-white text-[40px] overflow-hidden'>
                                    <div className='btl:cursor-auto btl:text-[15px] flex items-center justify-center'>
                                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class={`stroke  ${righthover ? "animate-arrow" : ''}`} d="M1 8H21M21 8L14.3333 1M21 8L14.3333 15" stroke="currentColor" stroke-linecap="round"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
