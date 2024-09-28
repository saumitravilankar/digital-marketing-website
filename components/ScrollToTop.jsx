"use client"

import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

function ScrollToTop() {

    const [arrowclass, setarrowclass] = useState("hidden")

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setarrowclass('')
            } else {
                setarrowclass('hidden')
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className={`fixed bottom-3 right-3 md:bottom-7 md:right-9 text-lg text-[#000] z-[99] bg-[#f7f5f5] shadow-2xl shadow-slate-900 p-[12px] md:p-[20px] rounded-full cursor-pointer ${arrowclass}`} onClick={scrollUp}>
                <IoIosArrowUp />
            </div>
        </>
    )
}

export default ScrollToTop