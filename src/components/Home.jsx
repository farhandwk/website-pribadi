import React, {useEffect, useState, useRef} from 'react'
import lamp from "../assets/lamp.png"
import arrow_down from "../assets/arrow-down.png"
import farhan from "../assets/farhan.png"

import { motion, useScroll, useTransform } from "framer-motion"

function Home({onScrollClick}) {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const [scrollValues, setScrollValue] = useState(0)

    // 2. Buat nilai transformasi berdasarkan scrollYProgress
  // Saat scrollYProgress dari 0 (atas) ke 1 (bawah), 
  // 'moveLeft' akan berubah dari 0px ke -300px
  const moveLeft = useTransform(scrollYProgress, [0.5, 1], [0, -150]);

  // 'moveRight' akan berubah dari 0px ke 300px
  const moveRight = useTransform(scrollYProgress, [0.5, 1], [0, 300]);

  // Animasi untuk elemen yang lebih lambat
  const moveLeftSlow = useTransform(scrollYProgress, [0.5, 1], [0, -150]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setScrollValue(scrollYProgress)
            console.log(latest.toFixed(2))
        })
        return () => unsubscribe()
    }, [scrollYProgress])

  return (
    <section ref={sectionRef} className='bg-[var(--tertiary)] w-scrren h-screen font-[aeonik] pt-10 pb-0 pr-8 pl-10
        flex flex-col items-center max-w-screen max-h-screen justify-around
        overflow-hidden
    '>
        <motion.div className='animate-[fade-in-down_1.5s] flex flex-col'
        
        style={{
            x: moveLeft
        }}>
            <h1 className='text-8xl'>Hallo</h1>
            <div className='pl-4 pb-10'>
                <h2 className='text-[var(--primary)] text-2xl'>Saya Farhan Dwiki</h2>
                <p className='text-[var(--secondary)] text-base'>Fullstack Web Developer & Data Analyst</p>
            </div>
        </motion.div>
        <motion.div className='flex flex-row itemms-center justify-start pb-8 pr-10 animate-[fade-in-left_1.5s]'
        style={{
            x: moveRight
        }}>
            <img src={lamp} className='w-8 h-8'></img>
            <p className='text-[var(--primary)] font-[aeonik] text-xl'>Dari wawasan berbasis data hingga menjadi solusi full-stack. Saya wujudkan ide Anda menjadi nyata.</p>
        </motion.div>
        <button
        href="#about"
        onClick={() => {
            onScrollClick();    // Panggil fungsi dari prop saat diklik
          }} 
        className='flex flex-row items-center justify-between w-[60%] self-start animate-[fade-in-right_1.5s]'>
            <a>Cari tahu lebih banyak</a>
            <img src={arrow_down}></img>
        </button>
        <motion.img src={farhan} className='w-64 animate-[fade-in-up_1.5s]'
        
        style={{
            x: moveLeftSlow
        }}
        ></motion.img>
    </section>
  )
}

export default Home
