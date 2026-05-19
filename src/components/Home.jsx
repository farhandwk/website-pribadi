import React, { useEffect, useRef } from 'react';
import lamp from "../assets/lamp.png";
import arrow_down from "../assets/arrow-down.png";
import farhan from "../assets/farhan.png";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.9, ease: 'easeOut', delay },
    }),
};

// ─── Home Component ────────────────────────────────────────────────────────────
function Home({ onScrollClick }) {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax transforms — kept from original
    const moveLeft     = useTransform(scrollYProgress, [0.5, 1], [0, -150]);
    const moveRight    = useTransform(scrollYProgress, [0.5, 1], [0, 300]);
    const moveLeftSlow = useTransform(scrollYProgress, [0.5, 1], [0, -150]);

    return (
        <section
            ref={sectionRef}
            className="bg-[var(--tertiary)] w-screen h-screen font-[aeonik]
                       flex flex-col justify-center items-center
                       md:flex-row md:justify-between
                       px-6 md:px-12 lg:px-20 overflow-hidden relative"
        >
            {/* ── Subtle background grid texture ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(34,34,34,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,34,34,0.04) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
                aria-hidden="true"
            />

            {/* ── Decorative corner mark (top-left) ── */}
            <div
                className="absolute top-8 left-6 md:left-12 lg:left-20 flex items-center gap-2 select-none"
                aria-hidden="true"
            >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#7B7B7B' }} />
                <span
                    className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: '#7B7B7B' }}
                >
                    Portfolio 2025
                </span>
            </div>

            {/* ── Scroll indicator (bottom-center) ── */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={1.4}
                aria-hidden="true"
            >
                <span
                    className="text-[9px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: 'rgba(34,34,34,0.35)' }}
                >
                    Scroll
                </span>
                <motion.div
                    className="w-px h-10"
                    style={{ background: 'rgba(34,34,34,0.2)' }}
                    animate={{ scaleY: [1, 0.4, 1], originY: 0 }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>

            {/* ══════════════════════════════════════════
                LEFT COLUMN — Text Content
            ══════════════════════════════════════════ */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2 lg:w-3/5 z-10">

                {/* Eyebrow label */}
                <motion.p
                    className="text-xs font-semibold uppercase tracking-[0.3em] mb-5"
                    style={{ color: '#7B7B7B' }}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                >
                    Fullstack Developer & Data Analyst
                </motion.p>

                {/* ── Hero Heading with parallax ── */}
                <motion.div
                    className="flex flex-col"
                    style={{ x: moveLeft }}
                >
                    <motion.h1
                        className="text-7xl sm:text-8xl md:text-9xl font-bold text-[var(--primary)] leading-none tracking-tight"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                    >
                        Hallo,
                    </motion.h1>

                    <motion.div
                        className="pl-1 pt-3 pb-8"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.25}
                    >
                        {/* Decorative line + name */}
                        <div className="flex items-center gap-3 mb-1.5">
                            <div className="w-8 h-px" style={{ background: '#222222' }} />
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
                                Saya Farhan Dwiki
                            </h2>
                        </div>
                        <p
                            className="text-base md:text-lg pl-11"
                            style={{ color: '#7B7B7B' }}
                        >
                            Fullstack Web Developer & Data Analyst
                        </p>
                    </motion.div>
                </motion.div>

                {/* ── Tagline with parallax ── */}
                <motion.div
                    className="flex flex-row items-start gap-4 pb-10 max-w-md"
                    style={{ x: moveRight }}
                >
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.4}
                        className="flex items-start gap-4"
                    >
                        {/* Callout box */}
                        <div
                            className="flex items-start gap-3 px-4 py-3.5 rounded-2xl"
                            style={{
                                background: 'rgba(34,34,34,0.04)',
                                border: '1px solid rgba(34,34,34,0.09)',
                            }}
                        >
                            <img src={lamp} className="w-5 h-5 mt-0.5 flex-shrink-0" alt="" />
                            <p className="text-base md:text-lg leading-relaxed text-[var(--primary)]">
                                Dari wawasan berbasis data hingga menjadi solusi full-stack.{' '}
                                <span style={{ color: '#7B7B7B' }}>
                                    Saya wujudkan ide Anda menjadi nyata.
                                </span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── CTA Button ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.55}
                >
                    <button
                        onClick={onScrollClick}
                        className="group flex flex-row items-center gap-3 self-start"
                    >
                        {/* Animated pill */}
                        <span
                            className="flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold
                                       transition-all duration-300
                                       group-hover:shadow-lg"
                            style={{
                                background: '#222222',
                                color: '#F8F8F8',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#3a3a3a'}
                            onMouseLeave={e => e.currentTarget.style.background = '#222222'}
                        >
                            Cari tahu lebih banyak
                            <img
                                src={arrow_down}
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                                alt=""
                                style={{ filter: 'invert(1)' }}
                            />
                        </span>
                    </button>
                </motion.div>

                {/* Stats strip */}
                <motion.div
                    className="flex items-center gap-6 md:gap-10 mt-12 pt-8"
                    style={{ borderTop: '1px solid rgba(34,34,34,0.08)' }}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={0.8}
                >
                    {[
                        { value: '3+', label: 'Proyek' },
                        { value: '6+', label: 'Tech Stack' },
                        { value: '2+', label: 'Tahun' },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center md:items-start">
                            <span className="text-2xl font-bold text-[var(--primary)] leading-none">
                                {stat.value}
                            </span>
                            <span
                                className="text-[10px] font-semibold uppercase tracking-widest mt-1"
                                style={{ color: '#7B7B7B' }}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ══════════════════════════════════════════
                RIGHT COLUMN — Photo
            ══════════════════════════════════════════ */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0 z-10">
                <motion.div
                    className="relative"
                    style={{ x: moveLeftSlow }}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                >
                    {/* Decorative ring behind photo */}
                    <div
                        className="absolute -inset-4 rounded-full opacity-30 blur-2xl pointer-events-none"
                        style={{ background: 'rgba(34,34,34,0.08)' }}
                        aria-hidden="true"
                    />

                    {/* Photo */}
                    <img
                        src={farhan}
                        alt="Farhan Dwiki"
                        className="relative w-64 md:w-80 lg:w-[26rem] object-contain"
                    />

                    {/* Floating badge — bottom left of photo */}
                    <motion.div
                        className="absolute bottom-4 -left-4 md:-left-8 flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                        style={{
                            background: 'rgba(248,248,248,0.92)',
                            border: '1px solid rgba(34,34,34,0.10)',
                            boxShadow: '0 8px 32px rgba(34,34,34,0.10)',
                            backdropFilter: 'blur(12px)',
                        }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-xs font-semibold text-[var(--primary)] whitespace-nowrap">
                            Available for work
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;