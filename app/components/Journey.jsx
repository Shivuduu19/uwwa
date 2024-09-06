'use client'
import { useMotionValueEvent, useScroll, motion, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import first from '@/public/UWWA _ SaaS Design Studio/65758382fab7d131285c7b13_Figure 6.svg'
import third from '@/public/UWWA _ SaaS Design Studio/6556054b28cf849cc7b7aff0_Figure 3.svg'
import { regularppmori, semiboldppmori } from '@/utils/fonts'
import Image from 'next/image'
import scrollSvg from 'scroll-svg'

const Journey = () => {
    const getstarted = useRef(null)
    const elementRef = useRef(null);

    const [footerclip, setfooterclip] = useState(100)
    const [footerimageroatevalue, setfooterimagerotate] = useState(0)
    const [scrollarrowvalue, setscrollarrowvalue] = useState(0)
    const [scrollarrowopacityvalue, setscrollarrowopacity] = useState(0)
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const positionRef = useRef(position);
    const [isgetstartedInView, setIsgetstartedInView] = useState(false);
    const isInViewRef = useRef(isgetstartedInView);
    const getstarteddiv = useScroll({
        target: getstarted,
        offset: ['start end', 'end start']
    })
    const scrollarrow = useTransform(getstarteddiv.scrollYProgress, [.14, .539], [0, 100])
    const scrollarrowopacity = useTransform(getstarteddiv.scrollYProgress, [.14, .2], [0, 1])
    const getstrtedva = useTransform(getstarteddiv.scrollYProgress, [.52, .7], [100, 95])
    const footerimagerotatmotion = useTransform(getstarteddiv.scrollYProgress, [0, 1], [0, 150])
    useMotionValueEvent(getstrtedva, 'change', () => {
        setfooterclip(getstrtedva.get())
        // setscrollarrowvalue(scrollarrow.get())
    })

    useMotionValueEvent(scrollarrow, 'change', () => {
        setscrollarrowvalue(scrollarrow.get())
    })
    useMotionValueEvent(scrollarrowopacity, 'change', () => {
        setscrollarrowopacity(scrollarrowopacity.get())
    })
    useMotionValueEvent(footerimagerotatmotion, 'change', () => {
        setfooterimagerotate(footerimagerotatmotion.get())
    })

    // useEffect(() => {
    //     console.log(document.body.scrollTop);

    // }, [])

    // useEffect(() => {
    //     const svg = document.querySelector('svg.scrollarrow')
    //     const firstpath = document.querySelector('path.firstpath')
    //     // console.log(firstpath);
    //     const scroll = () => {
    //         console.log(svg.scrollTop);
    //         // const firstpathLength = firstpath.getTotalLength()
    //         // // console.log(scrollarrowvalue);

    //         // firstpath.style.strokeDasharray = `${firstpathLength}`

    //         // console.log(scrollarrowvalue);

    //         // firstpath.style.strokeDashoffset = `${firstpathLength * (100 - scrollarrowvalue)}`

    //     }

    //     scroll()
    //     window.addEventListener('scroll', scroll)
    //     return () => window.removeEventListener('scroll', scroll)



    // }, [])
    // console.log(isgetstartedInView);

    useEffect(() => {
        const currentElement = elementRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsgetstartedInView(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    useEffect(() => {
        isInViewRef.current = isgetstartedInView;
    }, [isgetstartedInView]);
    // console.log(isgetstartedInView);

    useEffect(() => {
        positionRef.current = position
    }, [position])

    useEffect(() => {
        const updatePosition = () => {
            const element = elementRef.current;
            // console.log(element, isgetstartedInView);
            // console.log(isInViewRef.current);

            if (isInViewRef.current && element) {
                const rect = element.getBoundingClientRect();
                setPosition({
                    top: rect.top,
                    left: rect.left
                });
            }
        };

        // console.log(positionRef.current);





        // Initial position
        updatePosition();

        // Add scroll event listener
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);

        // Clean up
        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, []);
    // console.log(positionRef.current);

    useEffect(() => {

        // function drawLine() {
        //     var pathLength = line.getTotalLength(),
        //         maxScrollTop = $(document).height() - $(window).height(),
        //         percentDone = $(window).scrollTop() / maxScrollTop,
        //         length = percentDone * pathLength;
        //     line.style.strokeDasharray = [length, pathLength].join(' ');
        // }

        // drawLine()

        function positionCar() {
            // var scrollYgetstarted = positionRef.current
            // console.log(scrollarrowvalue);

            // var maxScrollY = document.documentElement.scrollHeight;
            var path = document.getElementById("scroll-line");
            // Calculate distance along the path the car should be for the current scroll amount
            var pathLen = path.getTotalLength();

            var dist = (pathLen * scrollarrowvalue) / 100;
            path.style.strokeDasharray = [dist, pathLen].join(' ');
            // console.log(pathLen);
            // console.log(dist);


            // console.log((scrollarrowvalue/100) * (pathLen / 100));
            console.log(path.getPointAtLength(0));

            var pos = path.getPointAtLength(dist);
            console.log(pos);

            // Calculate position a little ahead of the car (or behind if we are at the end), so we can calculate car angle
            if (dist + 1 <= pathLen) {
                var posAhead = path.getPointAtLength(dist + 1);
                var angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
            } else {
                var posBehind = path.getPointAtLength(dist - 1);
                var angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
            }
            // Position the car at "pos" totated by "angle"
            var car = document.getElementById("c");
            // console.log(car);

            car.setAttribute("transform", "translate(" + (pos.x) + "," + (pos.y) + ") rotate(" + (rad2deg(angle)) + ")");
        }
        positionCar()
        function rad2deg(rad) {
            return (180 * rad / Math.PI) - 90;
        }
    }, [position.top])


    // useEffect(() => {
    //     const svgPath = document.querySelector('#scroll-line')
    //     const svg = scrollSvg(svgPath, { draw_origin: .9, speed: 0.4 })

    //     return () => svg.remove()
    // }, [])

    return (
        <div ref={elementRef} className="text-[#f3f3f1] LL:min-h-[150vh] flex items-center justify-center min-h-screen xl:px-[64px] py-[100px] relative ">
            <motion.div style={{ width: `${footerclip}%`, height: "100%" }} className="bg-[#262625] rounded-[60px] absolute w-full h-full "></motion.div>
            <div ref={getstarted} className="max-w-[1230px] flex-1 w-full mx-auto relative flex items-start ">
                <div className="grid  grid-cols-[minmax(101px,1fr)_auto] gap-x-[8vw] justify-between w-full mt-auto grid-rows-[auto] auto-cols-[1fr] ">
                    <div>
                        <div className="opacity-80 ">
                            <h1 className={`uppercase object-fill text-[12px] font-normal leading-[2] ${regularppmori.className}`}>/ Get started /</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[70px] items-stretch row-span-1 col-span-1">
                        <div className="xl:mb-[19vw] mb-[18vw]">
                            <h2 className={`inline text-[8vw] leading-[1] font-semibold my-0 ${semiboldppmori.className} `}>Let's Launch Your Journey</h2>
                            <figure className="inline relative ">
                                <div className="xl:top-[20.1vw] w-[50%] mt-[-18vw] inline-block relative overflow-hidden object-contain h-auto ">
                                    <div className="flex justify-center items-center relative ">
                                        <svg className="scrollarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 330" width="500" height="330" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible", opacity: scrollarrowopacityvalue }}>
                                            <defs><clipPath id="__lottie_element_2"><rect width="500" height="330" x="0" y="0"></rect></clipPath></defs>
                                            <g clip-path="url(#__lottie_element_2)">
                                                <g transform="matrix(1,0,0,1,250,165)" opacity="1" style={{ display: "block" }}>
                                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                        <path id='scroll-line' className='firstpath' stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(186,169,169)" stroke-opacity="1" stroke-width="10" d=" M-175.93099975585938,-161 C-175.93099975585938,-161 -175.93099975585938,-161 -175.93099975585938,-161 C-175.93099975585938,-140.3000030517578 -159.1510009765625,-123.51899719238281 -138.4510040283203,-123.51899719238281 C-138.4510040283203,-123.51899719238281 -50.558998107910156,-123.51899719238281 -50.558998107910156,-123.51899719238281 C-34.387001037597656,-123.51899719238281 -21.277999877929688,-110.41000366210938 -21.277999877929688,-94.23799896240234 C-21.277999877929688,-94.23799896240234 -21.277999877929688,-94.23799896240234 -21.277999877929688,-94.23799896240234 C-21.277999877929688,-78.06600189208984 -34.387001037597656,-64.95600128173828 -50.558998107910156,-64.95600128173828 C-50.558998107910156,-64.95600128173828 -215.98699951171875,-64.95600128173828 -215.98699951171875,-64.95600128173828 C-232.01100158691406,-64.95600128173828 -245,-51.96699905395508 -245,-35.94300079345703 C-245,-35.94300079345703 -245,-35.94300079345703 -245,-35.94300079345703 C-245,-19.920000076293945 -232.01100158691406,-6.929999828338623 -215.98699951171875,-6.929999828338623 C-215.98699951171875,-6.929999828338623 -132.4949951171875,-6.929999828338623 -132.4949951171875,-6.929999828338623 C-132.4949951171875,-6.929999828338623 216.30999755859375,-6.929999828338623 216.30999755859375,-6.929999828338623 C232.15499877929688,-6.929999828338623 245,5.914999961853027 245,21.760000228881836 C245,21.760000228881836 245,21.760000228881836 245,21.760000228881836 C245,37.60499954223633 232.15499877929688,50.45000076293945 216.30999755859375,50.45000076293945 C216.30999755859375,50.45000076293945 -77.86399841308594,50.45000076293945 -77.86399841308594,50.45000076293945 C-94.43199920654297,50.45000076293945 -107.86399841308594,63.88100051879883 -107.86399841308594,80.44999694824219 C-107.86399841308594,80.44999694824219 -107.86399841308594,121.36699676513672 -107.86399841308594,144.8769989013672">
                                                        </path></g>
                                                </g>
                                                <g transform="matrix(1,0,0,1,250.13600158691406,164.2679382324219)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path id='c' stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(186,169,169)" stroke-opacity="1" stroke-width="10" d=" M-24,-11.75 C-24,-11.75 0.25,12.75 0.25,12.75 C0.25,12.75 24.875,-11.75 24.875,-11.75"></path></g></g></g>
                                        </svg>
                                    </div>
                                    <motion.div style={{ rotateZ: `${footerimageroatevalue}deg` }} className="absolute top-0 xl:w-[23%] xl:right-[23%] object-contain h-auto">
                                        <Image src={third} alt="" width={121} height={121} className="" />
                                    </motion.div>
                                    <motion.div style={{ rotateZ: `-${footerimageroatevalue}deg` }} className="absolute top-0 right-0 xl:w-[23%] object-contain h-auto">
                                        <Image src={first} alt="" width={121} height={121} />
                                    </motion.div>
                                </div>
                            </figure>
                        </div>
                        <div className="flex items-start gap-[30px] justify-between">
                            <div className="flex flex-col flex-1 items-stretch gap-[4rem] max-w-[416px] mb-0">
                                <p className={`opacity-60 ${regularppmori.className}`}><strong>We are providing consultations, for free. Get &nbsp;advice on customer activation, onboarding design, reducing product complexity, or growth experiments.</strong></p>
                                <div className="w-layout-vflex gap-[6px]">
                                    <div className="opacity-40">
                                        <h5 class={`uppercase object-fill text-[12px] font-normal leading-[2] my-0 ${regularppmori.className}`}>Contact Us</h5>
                                    </div>
                                    <a href="mailto:hello@uwwa.co" className={`opacity-80 ${regularppmori.className}`}>hello@uwwa.co</a>
                                    <a href="tel:+48571044670" className={`${regularppmori.className} opacity-80`}>+48 571 044 670</a></div>
                            </div>
                            <div className="w-[416px] max-w-[416px] mb-0 flex-1 mt-0 mx-0 ">
                                <form id="email-form" name="email-form" data-name="Email Form" method="post" className="flex flex-col items-start gap-[34px] " data-wf-page-id="657441184aaadff0f02c5440" data-wf-element-id="8936f7f0-88cf-6994-d4c2-fa42734560d0" aria-label="Email Form">
                                    <div className="flex flex-col items-start gap-[40px] w-full">
                                        <input className="text-[#f3f3f1] bg-[#fff0] border-0 border-solid border-[#000] border-b-[1px] border-b-[#f3f3f133] h-[47px] mb-0 pt-0 px-0 pb-[27px] text-[1rem] w-full leading-[1.42857] block" maxlength="256" name="name" data-name="Name" placeholder="First &amp; Last name" type="text" id="name" required="" fdprocessedid="ogthcs" />
                                        <input className="text-[#f3f3f1] bg-[#fff0] border-0 border-solid border-[#000] border-b-[1px] border-b-[#f3f3f133] h-[47px] mb-0 pt-0 px-0 pb-[27px] text-[1rem] w-full leading-[1.42857] block" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="email" required="" fdprocessedid="sh8nlu" />
                                    </div>
                                    <textarea placeholder="About your project" maxlength="5000" id="field" name="field" data-name="Field" className="min-h-[47px] max-h-[150px] pb-0 h-auto text-[#f3f3f1] bg-[#fff0] border-0 border-solid border-[#000] border-b-[1px] border-b-[#f3f3f133]  mb-0 pt-0 px-0  text-[1rem] "></textarea>
                                    <input type="submit" data-wait="Please wait..." className=" text-[#262625]  bg-[20px] bg-[length:18px_8px] pl-[3.4em] bg-[#f3f3f1] py-[1.57em] px-[1.43em] text-[14px] font-semibold leading-[1] transition-all duration-[.2s] flex relative cursor-pointer border-0 rounded-[99px] text-center flex-none  " value="Send a message" fdprocessedid="xli21h" />
                                </form>
                                {/* <div class="success-message w-form-done" tabindex="-1" role="region" aria-label="Email Form success"><div class="p2-u">Thank you! <br />We will get in touch with you in 24 hours.</div></div><div class="error-message w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure"><div class="p2-u">an error occurred while submitting the form. <br />please check the entered data and try again.</div>
                  </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey
