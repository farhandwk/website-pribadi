import React, { useEffect, useState, useRef } from 'react';
import lamp from "../assets/lamp.png";
import arrow_down from "../assets/arrow-down.png";
import farhan from "../assets/farhan.png";

import { motion, useScroll, useTransform } from "framer-motion";

function Home({ onScrollClick }) {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Framer Motion transform values (dibiarkan seperti semula)
    const moveLeft = useTransform(scrollYProgress, [0.5, 1], [0, -150]);
    const moveRight = useTransform(scrollYProgress, [0.5, 1], [0, 300]);
    const moveLeftSlow = useTransform(scrollYProgress, [0.5, 1], [0, -150]);
    
    // Log scroll progress (dibiarkan seperti semula, bisa dihapus jika tidak diperlukan)
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            console.log(latest.toFixed(2));
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section 
            ref={sectionRef} 
            className='bg-[var(--tertiary)] w-screen h-screen font-[aeonik]
            flex flex-col justify-center items-center md:flex-row md:justify-between 
            px-8 md:px-16 lg:px-24 overflow-hidden'
        >
            {/* ====== KOLOM KIRI (Konten Teks) ====== */}
            {/* Wrapper untuk semua konten teks agar mudah diatur dalam layout flexbox */}
            <div className='flex flex-col items-center md:items-start w-full md:w-1/2 lg:w-3/5'>
                
                {/* --- Blok Sapaan --- */}
                <motion.div 
                    className='animate-[fade-in-down_1.5s] flex flex-col'
                    style={{ x: moveLeft }}
                >
                    <h1 className='text-7xl sm:text-8xl md:text-9xl'>Hallo</h1>
                    <div className='pl-4 pb-10'>
                        <h2 className='text-[var(--primary)] text-2xl md:text-3xl'>Saya Farhan Dwiki</h2>
                        <p className='text-[var(--secondary)] text-base md:text-lg'>Fullstack Web Developer & Data Analyst</p>
                    </div>
                </motion.div>

                {/* --- Blok Tagline --- */}
                <motion.div 
                    className='flex flex-row items-center justify-start gap-4 pb-8 animate-[fade-in-left_1.5s] max-w-md'
                    style={{ x: moveRight }}
                >
                    <img src={lamp} className='w-8 h-8 flex-shrink-0'></img>
                    <p className='text-[var(--primary)] font-[aeonik] text-lg md:text-xl'>Dari wawasan berbasis data hingga menjadi solusi full-stack. Saya wujudkan ide Anda menjadi nyata.</p>
                </motion.div>

                {/* --- Tombol Aksi --- */}
                <button
                    href="#about"
                    onClick={onScrollClick} 
                    className='flex flex-row items-center gap-4 self-start animate-[fade-in-right_1.5s] group'
                >
                    <a className='text-lg group-hover:text-[var(--primary)] transition-colors duration-300'>Cari tahu lebih banyak</a>
                    <img src={arrow_down} className='w-5 h-5 group-hover:translate-y-1 transition-transform duration-300'></img>
                </button>
            </div>

            {/* ====== KOLOM KANAN (Gambar) ====== */}
            {/* Wrapper untuk gambar agar posisinya bisa diatur di layar besar */}
            <div className='w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0'>
                <motion.img 
                    src={farhan} 
                    className='w-64 md:w-96 lg:w-[28rem] animate-[fade-in-up_1.5s]'
                    style={{ x: moveLeftSlow }}
                ></motion.img>
            </div>
        </section>
    );
}

export default Home;