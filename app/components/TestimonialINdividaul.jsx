import Image from 'next/image'
import React from 'react'

const TestimonialINdividaul = ({ current, image, main, desc, personname, role, company, indexed, tranfer }) => {
    return (
        <div style={{ transform: `translateX(${tranfer}px)` }} class="slide delay-100 w-slide" >
            <div className='LL:gap-[164px] justify-between items-stretch flex flex-col'>
                <div className='flex items-start relative overflow-hidden'>
                    <div style={{ transform: `translate3d(0px,${current === indexed + 1 ? 0 : 20}px,0px)` }} className='relative transition-transform duration-500 '>
                        <h3>{main}</h3>
                        <p>&zwj;‍</p>
                        <p className='opacity-60 font-semibold'>{desc}</p>
                    </div>
                </div>
                <div className='flex flex-col items-stretch justify-between'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <div className='flex  items-center gap-[1rem] justify-between'>
                            <figure className='author-img rounded-[12px] m-0'>
                                <Image src={image} alt='' fill sizes="(max-width: 479px) 31vw, (max-width: 1279px) 66px, (max-width: 1439px) 5vw, 66px" className='w-full h-full object-cover' />
                            </figure>
                            <div className='w-layout-vflex'>
                                <div class="overflow-hidden">
                                    <p class="font-[bolder]" >{personname}</p>
                                </div>
                                <div class="overflow-hidden">
                                    <p class="text-left opacity-40" >{role}</p>
                                </div>
                            </div>
                        </div>
                        <figure class="author-logo m-0">
                            <Image src={company} alt='' className='h-auto object-contain' height={26} width={66} />
                        </figure>
                    </div>
                    <div class="w-layout-hflex justify-end mt-[1rem]">
                        <div className='w-[19px] opacity-40 text-[14px] font-normal leading-[1.86]'>0{indexed + 1}</div>
                        <div class="opacity-40 text-[14px] font-normal leading-[1.86]">/ 03</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialINdividaul
