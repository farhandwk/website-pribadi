import React from 'react';
import Marquee from "react-fast-marquee";
import python from "../assets/skills/python.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import nodejs from "../assets/skills/nodejs.png";
import react from "../assets/skills/react.png";

// ─── Skills Data ───────────────────────────────────────────────────────────────
const skills = [
    { id: 1, name: "Python",   img: python  },
    { id: 2, name: "HTML",     img: html    },
    { id: 3, name: "CSS",      img: css     },
    { id: 4, name: "JavaScript", img: js   },
    { id: 5, name: "Node.js",  img: nodejs  },
    { id: 6, name: "React",    img: react   },
];

// ─── Stat Item ─────────────────────────────────────────────────────────────────
function StatItem({ value, label }) {
    return (
        <div className="flex flex-col items-center md:items-start gap-1">
            <span
                className="text-3xl md:text-4xl font-bold text-[var(--primary)] leading-none"
            >
                {value}
            </span>
            <span
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: '#7B7B7B' }}
            >
                {label}
            </span>
        </div>
    );
}

// ─── Skill Pill (for Marquee) ──────────────────────────────────────────────────
function SkillPill({ item }) {
    return (
        <div
            className="mx-3 flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-1"
            style={{
                background: 'rgba(34,34,34,0.05)',
                border: '1px solid rgba(34,34,34,0.10)',
            }}
        >
            <img
                src={item.img}
                alt={item.name}
                className="w-7 h-7 object-contain"
            />
            <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: '#222222' }}
            >
                {item.name}
            </span>
        </div>
    );
}

// ─── About Component ───────────────────────────────────────────────────────────
const About = React.forwardRef((props, ref) => {
    return (
        <section
            ref={ref}
            id="about"
            className="font-[aeonik] min-h-screen bg-[var(--tertiary)] text-[var(--primary)]
                       flex flex-col justify-center py-16 md:py-24 overflow-x-hidden"
        >
            {/* ── Header — consistent with Portfolio & Certificate ── */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
                <header className="text-center mb-14 md:mb-20">
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
                        style={{ color: '#7B7B7B' }}
                    >
                        Who I Am
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-4 leading-tight">
                        Tentang Saya
                    </h1>
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                        <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                    </div>
                </header>

                {/* ── Bio Section ── */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-16 md:mb-24">

                    {/* Left — label + stats */}
                    <div className="w-full lg:w-2/5 flex-shrink-0">
                        {/* Section label */}
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
                            style={{ color: '#7B7B7B' }}
                        >
                            Background
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] leading-snug mb-8">
                            Web Developer<br />
                            <span style={{ color: '#7B7B7B', fontWeight: 400 }}>& Data Analyst</span>
                        </h2>

                        {/* Thin divider */}
                        <div className="w-8 h-px mb-8" style={{ background: '#222222' }} />

                        {/* Stats row */}
                        <div
                            className="grid grid-cols-3 gap-6 pt-8"
                            style={{ borderTop: '1px solid rgba(34,34,34,0.08)' }}
                        >
                            <StatItem value="3+"  label="Proyek Selesai" />
                            <StatItem value="2+"  label="Tahun Belajar"  />
                            <StatItem value="6+"  label="Tech Stack"     />
                        </div>
                    </div>

                    {/* Right — paragraph */}
                    <div className="w-full lg:w-3/5">
                        {/* Decorative quote mark */}
                        <p
                            className="text-7xl leading-none font-serif mb-2 select-none"
                            style={{ color: 'rgba(34,34,34,0.10)' }}
                            aria-hidden="true"
                        >
                            "
                        </p>
                        <p className="text-base md:text-lg text-[var(--secondary)] leading-relaxed mb-5">
                            Saya adalah seorang pengembang web dan analis data yang bersemangat dalam
                            menciptakan solusi teknologi yang efisien dan berdampak. Dengan latar belakang
                            yang kuat dalam pengembangan full-stack dan analisis data, saya senang mengubah
                            ide-ide kompleks menjadi aplikasi yang fungsional.
                        </p>
                        <p className="text-base md:text-lg text-[var(--secondary)] leading-relaxed">
                            Saya menganalisis data untuk menemukan wawasan yang berharga dan percaya pada
                            pembelajaran berkelanjutan — selalu mencari tantangan baru untuk terus
                            mengembangkan keahlian.
                        </p>

                        {/* Highlighted callout */}
                        <div
                            className="mt-8 px-5 py-4 rounded-2xl flex items-start gap-4"
                            style={{
                                background: 'rgba(34,34,34,0.04)',
                                border: '1px solid rgba(34,34,34,0.08)',
                            }}
                        >
                            <div
                                className="w-1 self-stretch rounded-full flex-shrink-0"
                                style={{ background: '#222222', minHeight: '2.5rem' }}
                            />
                            <p className="text-sm text-[var(--secondary)] leading-relaxed italic">
                                Fokus saat ini: membangun platform edukasi digital berskala penuh dan
                                mengeksplorasi machine learning untuk analitik prediktif.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Skillsets Section — full width for marquee ── */}
            <div className="w-full">
                {/* Section header — inside max-w container */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-10 md:mb-14">
                    <div className="flex flex-col items-center text-center">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
                            style={{ color: '#7B7B7B' }}
                        >
                            Tools & Technologies
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">
                            Skillsets
                        </h2>
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                            <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                        </div>
                    </div>
                </div>

                {/* Subtle top divider */}
                <div
                    className="w-full mb-8"
                    style={{ height: '1px', background: 'rgba(34,34,34,0.07)' }}
                />

                {/* Marquee 1 — left */}
                <Marquee
                    pauseOnHover
                    direction="left"
                    speed={35}
                    gradient={true}
                    gradientColor="#F8F8F8"
                    gradientWidth={120}
                >
                    {skills.map(item => (
                        <SkillPill key={item.id} item={item} />
                    ))}
                </Marquee>

                <div className="h-4 md:h-5" />

                {/* Marquee 2 — right */}
                <Marquee
                    pauseOnHover
                    direction="right"
                    speed={35}
                    gradient={true}
                    gradientColor="#F8F8F8"
                    gradientWidth={120}
                >
                    {skills.map(item => (
                        <SkillPill key={item.id} item={item} />
                    ))}
                </Marquee>

                {/* Subtle bottom divider */}
                <div
                    className="w-full mt-8"
                    style={{ height: '1px', background: 'rgba(34,34,34,0.07)' }}
                />
            </div>
        </section>
    );
});

export default About;