'use client'
import Image from "next/image";
import mainarrow from '@/public/UWWA _ SaaS Design Studio/mainarrow.svg'
import circlestar from '@/public/UWWA _ SaaS Design Studio/circlestar.svg'
import downarrow from '@/public/UWWA _ SaaS Design Studio/smalldownarrow.svg'
import Marqueindividual from "./components/Marqueindividual";
import Marquee from "./components/Marquee";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import heroillsutration from '@/public/UWWA _ SaaS Design Studio/65c3645d0b92619b9cdbf0b5_Hero_illustration.svg'
import letsconnect from '@/public/letsconnect.svg'
import wearebestat from '@/public/UWWA _ SaaS Design Studio/We are best at_.svg'
import { useEffect, useRef, useState } from "react";
import first from '@/public/UWWA _ SaaS Design Studio/65758382fab7d131285c7b13_Figure 6.svg'
import third from '@/public/UWWA _ SaaS Design Studio/6556054b28cf849cc7b7aff0_Figure 3.svg'
import seven from '@/public/UWWA _ SaaS Design Studio/6556054c84a110213d53d672_Figure 7.svg'
import four from '@/public/UWWA _ SaaS Design Studio/6556054bda4a7160b4368226_Figure 4.svg'
import logo from '@/public/UWWA _ SaaS Design Studio/6575a2973dcb29ab010e4cff_uwwa-logo.svg'
import { regularppmori, semiboldppmori } from "@/utils/fonts";
import Hoverreveallogo from "./components/Hoverreveallogo";
import Testimonials from "./components/Testimonials";
import Journey from "./components/Journey";
export default function Home() {
  const textscrolref = useRef(null)
  const wrapper = useRef(null)


  const [tranval, settransval] = useState(0)
  const [bgblackstate, setbgstate] = useState(0)
  // const [trax, settranx] = useState(0)
  // const [transy, setrtansy] = useState(0)
  // const [footerclip, setfooterclip] = useState(0)
  // const [footerimageroatevalue, setfooterimagerotate] = useState(0)






  //   // console.log(image);
  //   if (parentRect.width > 100) {
  //     const imageRect = image.getBoundingClientRect();
  //     console.log(imageRect.left, imageRect.top);
  //     const handleMouseMove = (event) => {
  //       const parentRect = image.parentElement.getBoundingClientRect()
  //       console.log(parentRect);


  //       console.log(imageRect);



  //       const relativeX = event.clientX - imageRect.left;
  //       const relativeY = event.clientY - imageRect.top;
  //       // console.log(relativeX, relativeY);


  //       let translateX = `${relativeX}px`;
  //       let translateY = `${relativeY}px`;
  //       // settranx(relativeX)
  //       // setrtansy(relativeY)
  //       // imageref.current.style.transform = 'scale3d(4,4,2)'
  //       imageref.current.style.transform = `translate3d(${translateX}, ${translateY},0)`;
  //       // console.log(`translate3d(${translateX}, ${translateY},0)`);

  //     }
  //     document.addEventListener("mousemove", handleMouseMove);
  //     return () => {
  //       document.removeEventListener('mousemove', handleMouseMove);

  //     }
  //   };
  // }, [])

  // console.log(trax, transy);

  const { scrollYProgress } = useScroll({
    target: textscrolref,
    offset: ['start start', 'end end']
  })

  const blackbg = useScroll({
    target: textscrolref,
    offset: ['start 0.435', '.8 end']
  })

  const bgblackprog = useTransform(blackbg.scrollYProgress, [0, 1], [0, 200])

  useMotionValueEvent(bgblackprog, 'change', (x) => {
    // console.log(bgblackprog.get());
    setbgstate(bgblackprog.get())

  })

  const xprog = useTransform(scrollYProgress, [0, 1], ['0', '-50'])
  useMotionValueEvent(xprog, 'change', (x) => {
    settransval(parseFloat(xprog.get()))
    // console.log(typeof parseFloat(xprog.get()))

  })



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

  // const textscroll={
  //   initial:{
  //     x:0
  //   },
  //   animte:{
  //     x:"-50%"
  //   }
  // }

  const imagereveal = {
    hover: {
      display: "flex",
      opacity: 1
    }
  }

  return (
    <>
      <main >
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
                  <a href="" className="flex gap-[5px] font-semibold max-w-full ">
                    <div className="flex justify-center items-center ">
                      <Image src={downarrow} alt="" />
                    </div>
                    <div className={`${regularppmori.className} flex h-[19px] flex-col relative overflow-hidden`}>
                      <div className="text-[.825rem] font-semibold leading-[1.57]">Explore works</div>
                      <div className="text-[.825rem] font-semibold leading-[1.57]">Explore works</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <Marquee />

          </div>
        </section>
        <section className="py-0 px-[5%] block xl:px-[64px] h-min relative">
          <figure className="mb-0 w-full ">
            <Image src={heroillsutration} alt="" className="rounded-[22px] w-full" />
          </figure>
        </section>
        <section className=" py-[100px] pb-0 px-[5%] relative">
          <div className="w-full mx-auto relative">
            <div className="flex items-start flex-wrap justify-between ">
              <div className="w-layout-hflex  flex-1 items-stretch flex-wrap gap-[1rem]   justify-between">
                <div className="flex-none self-start opacity-80">
                  <h1 className={`uppercase text-[.75rem] font-normal leading-[2] ${regularppmori.className}`}>/ Studio /</h1>
                </div>
                <div className="max-w-[384px] self-start">
                  <h2 className={`text-[40px] my-0 font-semibold leading-[1.2] ${semiboldppmori.className}`}>Leading SaaS design innovators</h2>
                </div>
              </div>
              <div className="w-layout-hflex items-stretch flex-1 justify-end">
                <div className="max-w-[528px]">
                  <div className="flex flex-col gap-[2rem] items-start ">
                    <p className={`opacity-60 mb-0 leading-[1.88] mt-0 ${regularppmori.className}`}>
                      <strong>A young SaaS Design agency with no red tape. Founded by a perfect duo: an expert designer and a design recruiter. Setting high standards for ourselves and the work we do.</strong>
                    </p>
                    <div className="w-layout-hflex ">
                      <p className={`leading-[1.6] bg-[#2626251a] rounded-[999px] max-w-[262px] py-[.5em] px-[1.7em] text-[.875rem] ${regularppmori.className}`}>We will answer any design-related questions on a short call.</p>
                      <motion.a whileHover='hover' href="" className='bg-[#262625] text-white flex justify-center items-center text-center flex-none gap-[.71em] rounded-[99px] whitespace-nowrap py-[1.57em] px-[1.43em] text-[.875rem] font-semibold leading-[1] transition-all duration-[.2s] relative overflow-hidden max-w-full'>
                        <div className='z-[1] relative flex items-center justify-center'>
                          <Image src={letsconnect} alt='' width={18} height={8} />
                        </div>
                        <motion.div variants={buttonvar} className='bg-[#a4afb5] [transform:translate3d(0%,0%,0px)_scale3d(1,1,1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,0deg);] rounded-[50%] w-[54px] h-[54px] absolute top-full left-[-54px]'></motion.div>
                        <motion.div variants={letsconect} className={`${semiboldppmori.className} relative`}>Let's connect</motion.div>
                      </motion.a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={textscrolref} className="min-h-[300vh] relative">
          <div className="mb-[-200px] min-h-[100vh] sticky items-stretch top-0 overflow-hidden justify-center flex flex-col">
            <div ref={wrapper} className="relative mx-auto w-full  p-0">
              <div className="flex items-start ">
                <motion.div style={{ x: `${tranval}%` }} className="flex-none items-center w-[200%] flex ">
                  <div className="bg-[#dededd] items-center w-full h-[90%] flex absolute"></div>
                  <motion.div style={{ width: `${bgblackstate}vw` }} className="bg-[#262625] items-center h-[90%] flex absolute"></motion.div>
                  <Image src={wearebestat} alt="" width={3171} height={596} className="text-[#dededd] object-contain flex-none w-full h-auto text-[347px] font-semibold relative" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[5%] py-[100px] relative ">
          <div className="w-full mx-auto relative">
            <div className="flex flex-col items-stretch">
              <Hoverreveallogo img={first} craft={'product design'} no='01' />
              <div className="bg-[#262625] opacity-20 w-full h-[1px]"></div>
              <Hoverreveallogo img={seven} craft={'growth design'} no='02' />
              <div className="bg-[#262625] opacity-20 w-full h-[1px]"></div>
              <Hoverreveallogo img={third} craft={'mobile apps design'} no='03' />
              <div className="bg-[#262625] opacity-20 w-full h-[1px]"></div>
              <Hoverreveallogo img={four} craft={'Design systems'} no='04' />
              <div className="bg-[#262625] opacity-20 w-full h-[1px]"></div>
            </div>
          </div>
        </section>
        <Testimonials />
        <Journey />
      </main >
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
                <div id="w-node-_257721c6-3ed8-277f-dbb1-60931b0806e5-f02c5440" data-w-id="257721c6-3ed8-277f-dbb1-60931b0806e5" className="[box-shadow:0_0_0_0_#262625] transition-[box-shadow] duration-[1s] [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] bg-[#262625] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center" >
                  <svg width="32" height="46" viewBox="0 0 32 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke" d="M16 45L16 0.999999M16 0.999999L0.999999 15.3333M16 0.999999L31 15.3333" stroke="#fff" stroke-linecap="round"></path>
                  </svg>
                </div>
              </a>
            </div>
            <a href="#" className="p2-l hidden opacity-40 footer-link-sm">Terms &amp; Conditions</a><a href="#" className="p2-l opacity-40 hidden footer-link-sm">Cookie Policy</a><div className="text-left [grid-area:2/5/3/3] opacity-40">© 2023 All rights reserved. All wrongs reversed.</div></div></div>
      </article>
    </>
  );
}
