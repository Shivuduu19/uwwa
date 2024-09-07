'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/UWWA _ SaaS Design Studio/6575a2973dcb29ab010e4cff_uwwa-logo.svg'
import { motion } from 'framer-motion'
import letsconnect from '@/public/letsconnect.svg'
import { regularppmori } from '@/utils/fonts'
const Header = () => {

    const buttonvar = {
        // initial: {
        //     transform: 'translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);'
        // },
        hover: {

            transform: "translate3d(100%,-50%,0px) scale3d(6,6,1)",
            transition: {
                duration: .5
            }
        }
    }
    const text = {
        hover: {
            color: '#fff'
        }
    }
    const letsconect = {
        hover: {
            color: '#000'
        }
    }

    return (
        <header id='header' className='z-[999] pt-[2rem] pb-0 xl:px-[64px]  relative block '>
            <div className='flex relative mx-auto items-center  justify-between gap-[20px]'>
                <div className='flex-1   '>
                    <a href="" className='transition-opacity  duration-[.2s] relative max-w-full inline-block'>
                        <Image src={logo} alt='' width={80} height={65} className='object-contain inline-block  h-auto' />
                    </a>
                </div>
                <div className='flex flex-1 gap-[12px] justify-end items-start '>
                    <div className=''>
                        <motion.a whileHover='hover' href="" className=' flex justify-center items-stretch text-center gap-[.71em] rounded-[99px] whitespace-nowrap py-[1.57em] px-[1.43em] text-[.875rem] font-semibold leading-[1] transition-all duration-[.2s] relative overflow-hidden max-w-full'>
                            <motion.div variants={buttonvar} className='bg-[#998e8e] [transform:translate3d(0%,0%,0px)_scale3d(1,1,1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,0deg);] rounded-[50%] w-[54px] h-[54px] absolute top-full left-[-54px]'></motion.div>
                            <motion.div variants={text} className={`${regularppmori.className} relative`}> Book a call</motion.div>
                        </motion.a>
                    </div>
                    <motion.a whileHover='hover' href="" className='bg-[#262625] text-white flex justify-center items-stretch text-center gap-[.71em] rounded-[99px] whitespace-nowrap py-[1.57em] px-[1.43em] text-[.875rem] font-semibold leading-[1] transition-all duration-[.2s] relative overflow-hidden max-w-full'>
                        <div className='z-[1] relative flex items-center justify-center'>
                            <Image src={letsconnect} alt='' width={18} height={8} />
                        </div>
                        <motion.div variants={buttonvar} className='bg-[#a4afb5] [transform:translate3d(0%,0%,0px)_scale3d(1,1,1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,0deg);] rounded-[50%] w-[54px] h-[54px] absolute top-full left-[-54px]'></motion.div>
                        <motion.div variants={letsconect} className={`${regularppmori.className}relative z-[1]`}>Let's connect</motion.div>
                    </motion.a>
                </div>
            </div>

        </header>
    )
}

export default Header
