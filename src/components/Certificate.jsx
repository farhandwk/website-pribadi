import React, { useState } from 'react';
import dataAnalyst_udemy from "../assets/certificates/data-analyst-udemy.png";
import AI_Taalenta from "../assets/certificates/AI-Taalenta.jpeg";
import CAD_Industri from "../assets/certificates/CAD-Industri.jpeg";
import logo_udemy from "../assets/certificates/logo-udemy.png";
import logo_taalenta from "../assets/certificates/logo-Taalenta.jpeg";
import arrow_down from "../assets/arrow-down.png";

// ─── Data ──────────────────────────────────────────────────────────────────────
const certificates = [
    {
        id: 1,
        title: "The Data Analyst Course: Complete Data Analyst Bootcamp",
        date: "22 Jan 2025",
        issuer: "Udemy",
        category: "Data Science",
        skills: ["Python", "Data Analyst"],
        logo: logo_udemy,
        img: dataAnalyst_udemy,
        credential: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-12b3406a-aa26-46e1-a6f2-6cd80d5f5319.pdf',
    },
    {
        id: 2,
        title: "AI & ChatGPT Untuk Inovasi Kerja Akademik dan Perkantoran",
        date: "9 Mar 2024",
        issuer: "Taalenta",
        category: "Artificial Intelligence",
        skills: ["Productivity", "Prompting AI"],
        logo: logo_taalenta,
        img: AI_Taalenta,
        credential: 'https://drive.google.com/file/d/19n6dJV0adIGtIvD2K8ySdbbtJVkTh3qR/view?usp=sharing',
    },
    {
        id: 3,
        title: "Design Club",
        date: "30 Jan 2024",
        issuer: "Himpunan Mahasiswa Teknik Industri",
        category: "Industrial Design",
        skills: ["CAD", "3D Design", "Product Design"],
        logo: '',
        img: CAD_Industri,
        credential: 'https://drive.google.com/file/d/1IVc7dpP4wUBAyPMqmXrkGWaVvNOZlUcZ/view?usp=sharing',
    },
];

// ─── Icons ─────────────────────────────────────────────────────────────────────
const CalendarIcon = () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

// ─── Certificate Card ──────────────────────────────────────────────────────────
function CertificateCard({ item }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group relative bg-[var(--tertiary)] rounded-2xl overflow-hidden flex flex-col
                       transform transition-all duration-300 ease-out cursor-default
                       hover:-translate-y-2 hover:shadow-2xl"
            style={{
                border: '1px solid rgba(34,34,34,0.08)',
                boxShadow: '0 4px 24px rgba(34,34,34,0.07)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* ── Image Section ── */}
            <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient always-present (bottom fade) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                    <span
                        className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{
                            background: 'rgba(248,248,248,0.88)',
                            color: '#222222',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.6)',
                        }}
                    >
                        {item.category}
                    </span>
                </div>

                {/* ── Credential hover overlay — ONLY covers the image ── */}
                <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                    style={{
                        opacity: hovered ? 1 : 0,
                        background: 'rgba(0,0,0,0.45)',
                        backdropFilter: hovered ? 'blur(2px)' : 'none',
                    }}
                >
                    <a
                        href={item.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
                        style={{
                            background: 'rgba(248,248,248,0.92)',
                            color: '#222222',
                            border: '1px solid rgba(255,255,255,0.5)',
                            backdropFilter: 'blur(8px)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#ffffff'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(248,248,248,0.92)'}
                    >
                        <ExternalLinkIcon />
                        Lihat Kredensial
                    </a>
                </div>
            </div>

            {/* ── Card Body — always fully visible ── */}
            <div className="flex flex-col flex-grow p-5 md:p-6">

                {/* Issuer row */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest"
                        style={{ color: '#7B7B7B' }}>
                        <CalendarIcon />
                        <span>{item.date}</span>
                    </div>
                    {item.logo
                        ? <img src={item.logo} alt={item.issuer} className="h-5 object-contain opacity-70" />
                        : <span className="text-[10px] font-semibold text-[var(--secondary)] tracking-wide">{item.issuer}</span>
                    }
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-[var(--primary)] leading-snug mb-2 group-hover:text-[var(--secondary)] transition-colors duration-200">
                    {item.title}
                </h3>

                {/* Thin divider */}
                <div className="w-8 h-px mb-3" style={{ background: '#222222' }} />

                {/* Issuer name text */}
                <p className="text-xs text-[var(--secondary)] mb-4">
                    Diterbitkan oleh <span className="font-semibold text-[var(--primary)]">{item.issuer}</span>
                </p>

                {/* Tags / Skills */}
                <div
                    className="flex flex-wrap gap-1.5 pt-4 mt-auto"
                    style={{ borderTop: '1px solid rgba(34,34,34,0.08)' }}
                >
                    {item.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                                background: 'rgba(34,34,34,0.06)',
                                color: '#222222',
                                border: '1px solid rgba(34,34,34,0.1)',
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Main Certificate Component ────────────────────────────────────────────────
function Certificate() {
    return (
        <section className="font-[aeonik] min-h-screen bg-[var(--tertiary)] text-[var(--primary)] py-16 md:py-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

                {/* ── Header — matches Portfolio page ── */}
                <header className="text-center mb-14 md:mb-20">
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
                        style={{ color: '#7B7B7B' }}
                    >
                        Credentials & Achievements
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-4 leading-tight">
                        Sertifikat
                    </h1>
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                        <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                    </div>
                    <p className="mt-5 text-base md:text-lg text-[var(--secondary)] max-w-md mx-auto leading-relaxed">
                        Lisensi dan sertifikasi yang memvalidasi kompetensi teknis dan profesional.
                    </p>
                </header>

                {/* ── Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certificates.map(item => (
                        <CertificateCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificate;