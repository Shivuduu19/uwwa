'use client'
import React, { useEffect, useState } from 'react'
import Marqueindividual from './Marqueindividual'

const Marquee = () => {
    const [trans, settrans] = useState(0)

    useEffect(() => {
        const key = setInterval(() => {
            settrans(prev => {
                if (prev < -100) {
                    return 0
                } else {

                    return prev - .041
                }
            }
            )
        }, 10);

        return () => clearInterval(key)
    }, [])
    // console.log(trans);

    return (
        <section className="text-[#8d8d8d] tracking-[-.02em] uppercase w-full text-[.875rem] font-semibold leading-[1.71] flex flex-row overflow-hidden  ">
            <Marqueindividual transfer={trans} />
            <Marqueindividual transfer={trans} />
            <Marqueindividual transfer={trans} />
        </section>
    )
}

export default Marquee
