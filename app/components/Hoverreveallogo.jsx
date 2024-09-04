import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { semiboldppmori } from '@/utils/fonts'

const Hoverreveallogo = ({ img, craft, no }) => {

    const imageref = useRef(null)



    useEffect(() => {
        // console.log(image.getBoundingClientRect());

        const handleMouseMove = (event) => {
            const image = imageref.current

            const parentRect = image.parentElement.getBoundingClientRect();
            // console.log(parentRect.width / 2, parentRect.height / 2);

            const relativeX = event.clientX - parentRect.width / 2;
            const relativeY = event.clientY - parentRect.height / 2;

            const translateX = `${relativeX}px`;
            const translateY = `${relativeY}px`;
            // console.log(translateX, translateY);


            image.style.transform = `translate(${translateX}, ${translateY})`;
        }
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }

    }, [])


    const imagereveal = {
        hover: {
            display: "flex",
            opacity: 1
        }
    }
    return (
        <motion.div whileHover='hover' className="pt-[2rem] btl:gap-x-[4vw] btl:cursor-pointer grid auto-cols-[1fr] grid-rows-[auto] cursor-none gap-x-[5vw] grid-cols-[.5fr_.5fr_1fr_minmax(200px,530px)] items-start px-[10px] transition-colors duration-[.2s] relative overflow-hidden">
            <div style={{ opacity: .4 }} className="items-baseline flex  row-span-1 col-span-1">
                {/* <h4 className="my-0 text-[1.125rem] font-semibold leading-[1.33]">/</h4> */}
                <h4 className="my-0 text-[1.125rem] font-semibold leading-[1.33]">{no}</h4>
                {/* <h4 className="my-0 text-[1.125rem] font-semibold leading-[1.33]">/</h4> */}
            </div>
            <div className="opacity-[.4] row-span-1 col-span-1 items-center flex">
                <h4 className="leading-[1] my-0 text-[1.125rem] font-semibold ">(</h4>
                <div class="w-layout-hflex justify-center items-center">
                    <div class="hor-line"></div>
                    <div class="vert-line">
                    </div>
                </div>
                <h4 className="leading-[1] my-0 text-[1.125rem] font-semibold ">)</h4>
            </div>
            <div className="row-span-1 col-span-1 pb-[2rem] flex justify-center items-start w-[200px]  relative">
                <motion.div variants={imagereveal} className="opacity-0 hidden z-[-3] w-full justify-center items-center h-[100vh] cursor-none fixed top-[0%] bottom-[0%] left-[0%] right-[0%]">


                    <Image ref={imageref} src={img} alt="" width={386} height={386} className="object-contain w-[200px] h-auto" />

                </motion.div>
            </div>
            <div className="row-span-1 col-span-1 [grid-row-gap:1.5rem] flex items-start flex-col   ">
                <div className="">
                    <h4 className={`uppercase ${semiboldppmori.className}`}>{craft}</h4>
                </div>
            </div>
        </motion.div>
    )
}

export default Hoverreveallogo
