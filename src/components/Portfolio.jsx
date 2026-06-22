import React, { useState, useEffect } from 'react';
import talenta_digital from "../assets/portfolioImage/talentaDigital.png";
import unteyo_journey from '../assets/portfolioImage/unteyoJourney.png';
import descriptive_correlation from "../assets/portfolioImage/descriptive-correlation.png";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const GitHubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const LinkIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>
);

const CloseIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
);

const FolderIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
);

// ─── Static Data ───────────────────────────────────────────────────────────────
const portfolioItems = [
    {
        id: 1,
        title: 'TalentaDigital.id',
        date: 'Maret 2025',
        category: 'Fullstack Web Development',
        group: 'Full-Stack Data Engineering',
        description: 'Platform edukasi full-stack berbasis MERN dengan sistem autentikasi JWT & Google OAuth, manajemen peran dinamis, dan empat modul utama pembelajaran.',
        longDescription: [
            'TalentaDigital.id adalah platform edukasi full-stack komprehensif yang dibangun di atas tumpukan teknologi MERN (MongoDB, Express, React, Node.js). Platform ini hadir sebagai solusi terpadu bagi individu yang ingin mengembangkan keterampilan digital secara terstruktur dan terukur.',
            'Sistem autentikasi dibangun dengan keamanan berlapis menggunakan JWT (JSON Web Token) dan Google OAuth, dilengkapi manajemen peran dinamis (admin, mentor, student). Platform mengintegrasikan empat fitur inti: Skill Lab (kursus bersertifikat PDF dinamis), Zona Asah Otak (sistem kuis kompetitif real-time), Inkubator Wirausaha (inkubator ide dengan bimbingan mentor), dan Kompas Karier (alat asesmen karier berbasis psikometri).',
            'Frontend dibangun dengan React & Tailwind CSS menggunakan pendekatan mobile-first yang sepenuhnya responsif. Backend menggunakan arsitektur RESTful API yang di-deploy di VPS dengan Nginx sebagai reverse proxy, memastikan performa dan skalabilitas tinggi untuk ratusan pengguna konkuren.',
        ],
        imageUrl: talenta_digital,
        projectUrl: 'https://talentadigital.farhanportfolio.my.id/login',
        githubUrl: 'https://github.com/farhandwk/talenta-digital',
        tags: 'React,Node.js,Express,MongoDB,JWT,Nginx,VPS,Fullstack',
    },
    {
        id: 2,
        title: 'Unteyo Journey',
        date: 'November 2024',
        category: 'Frontend Development',
        group: 'Full-Stack Data Engineering',
        description: 'Single Page Application yang berfungsi sebagai landing page representatif bagi unit creative media mahasiswa, menampilkan karya dan portofolio tim.',
        longDescription: [
            'Unteyo Journey adalah sebuah Single Page Application (SPA) yang dirancang dan dikembangkan untuk menjadi wajah digital dari komunitas creative media mahasiswa. Situs ini berfungsi sebagai etalase karya, portofolio tim, dan media komunikasi kepada audiens eksternal.',
            'Dikembangkan menggunakan React.js dengan Tailwind CSS, antarmuka dirancang agar terasa modern, ringan, dan berdampak. Animasi scroll-triggered, layout yang dinamis, dan tipografi yang dipilih dengan cermat menciptakan pengalaman menjelajah yang berkesan dan profesional.',
            'Proyek ini mengutamakan performa loading yang cepat dan aksesibilitas lintas perangkat, memastikan karya-karya kreatif tim dapat dinikmati dengan optimal baik di layar desktop maupun mobile.',
        ],
        imageUrl: unteyo_journey,
        projectUrl: 'https://www.unteyojourney.com/',
        githubUrl: 'https://github.com/farhandwk/UnteyoJourney',
        tags: 'React,Tailwind CSS,SPA,Frontend,Responsive',
    },
    {
        id: 3,
        title: 'Descriptive & Correlation Analytics',
        date: 'Januari 2025',
        category: 'Data Engineering & Fullstack',
        group: 'Industrial Engineering',
        description: 'Aplikasi web full-stack untuk mengubah data survei CSV menjadi wawasan visual instan — statistik deskriptif, deteksi Skala Likert, dan heatmap korelasi interaktif.',
        longDescription: [
            'Aplikasi ini lahir dari kebutuhan nyata tim event organizer yang harus menganalisis ratusan respons survei secara manual setiap pasca-acara. Dengan tools ini, proses yang biasa memakan waktu berjam-jam dapat diselesaikan dalam hitungan detik hanya dengan mengunggah file CSV.',
            'Backend dibangun menggunakan Flask (Python) dengan library Pandas dan SciPy untuk komputasi statistik. Sistem secara otomatis mendeteksi kolom berformat Skala Likert, menghitung mean, median, modus, standar deviasi, dan menghasilkan matriks korelasi Pearson yang divisualisasikan sebagai heatmap interaktif menggunakan Plotly.',
            'Frontend React.js menyajikan hasil analisis dalam antarmuka yang bersih dan intuitif, dirancang khusus untuk pengguna non-teknis. Proyek ini di-deploy di VPS dengan arsitektur containerized, memastikan isolasi environment dan kemudahan maintenance jangka panjang.',
        ],
        imageUrl: descriptive_correlation,
        projectUrl: 'https://analytics.farhanportfolio.my.id/',
        githubUrl: 'https://github.com/farhandwk/descriptive-correlation',
        tags: 'Python,Flask,Pandas,SciPy,Plotly,React,VPS,Data Analytics',
    },
];

// ─── Modal Component ───────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!project) return null;

    return (
        // ── Overlay
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}
            onClick={onClose}
        >
            {/* Backdrop blur layer */}
            <div className="absolute inset-0 backdrop-blur-sm" />

            {/* ── Glass Panel */}
            <div
                className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── Image Header */}
                <div className="relative w-full h-52 md:h-64 flex-shrink-0 overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(0.88)' }}
                    />
                    {/* Gradient overlay on image */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)',
                        }}
                    />
                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 p-5 md:p-6">
                        <p
                            className="text-xs font-semibold uppercase tracking-widest mb-1"
                            style={{ color: 'rgba(255,255,255,0.65)' }}
                        >
                            {project.category}
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            {project.title}
                        </h2>
                    </div>
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
                        style={{
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.25)',
                            color: 'rgba(255,255,255,0.85)',
                            backdropFilter: 'blur(8px)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.28)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        aria-label="Tutup modal"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* ── Scrollable Body */}
                <div className="flex-1 overflow-y-auto px-5 md:px-7 py-5 md:py-6" style={{ color: 'rgba(255,255,255,0.88)' }}>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-4 mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            <CalendarIcon />
                            <span>{project.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            <FolderIcon />
                            <span>{project.category}</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.split(',').map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs font-medium px-3 py-1 rounded-full"
                                style={{
                                    background: 'rgba(255,255,255,0.12)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: 'rgba(255,255,255,0.8)',
                                }}
                            >
                                {tag.trim()}
                            </span>
                        ))}
                    </div>

                    {/* Long Description */}
                    <div className="space-y-3 mb-6">
                        {project.longDescription.map((para, i) => (
                            <p key={i} className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* ── Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        {project.projectUrl && (
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2.5 flex-1 py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-200"
                                style={{
                                    background: 'rgba(255,255,255,0.92)',
                                    color: '#222222',
                                    border: '1px solid rgba(255,255,255,0.5)',
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = '#ffffff'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.92)'}
                            >
                                <LinkIcon />
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2.5 flex-1 py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-200"
                                style={{
                                    background: 'rgba(255,255,255,0.08)',
                                    color: 'rgba(255,255,255,0.88)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.16)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                }}
                            >
                                <GitHubIcon />
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Portfolio Card ────────────────────────────────────────────────────────────
function PortfolioCard({ item, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group relative bg-[var(--tertiary)] rounded-2xl overflow-hidden cursor-pointer
                       flex flex-col transform transition-all duration-300 ease-out
                       hover:-translate-y-2 hover:shadow-2xl"
            style={{
                border: '1px solid rgba(34,34,34,0.08)',
                boxShadow: '0 4px 24px rgba(34,34,34,0.07)',
            }}
        >
            {/* Image with overlay */}
            <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle dark gradient at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-grow p-5 md:p-6">

                {/* Date */}
                <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--secondary)] mb-2">
                    {item.date}
                </p>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[var(--primary)] mb-2 leading-snug group-hover:text-[var(--secondary)] transition-colors duration-200">
                    {item.title}
                </h3>

                {/* Thin divider */}
                <div className="w-8 h-px mb-3" style={{ background: '#222222' }} />

                {/* Short description */}
                <p className="text-sm text-[var(--secondary)] leading-relaxed mb-4 flex-grow line-clamp-3">
                    {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.split(',').slice(0, 4).map((tag, i) => (
                        <span
                            key={i}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                                background: 'rgba(34,34,34,0.06)',
                                color: '#222222',
                                border: '1px solid rgba(34,34,34,0.1)',
                            }}
                        >
                            {tag.trim()}
                        </span>
                    ))}
                    {item.tags.split(',').length > 4 && (
                        <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                                background: 'rgba(34,34,34,0.06)',
                                color: '#7B7B7B',
                                border: '1px solid rgba(34,34,34,0.1)',
                            }}
                        >
                            +{item.tags.split(',').length - 4}
                        </span>
                    )}
                </div>

                {/* Footer: links & "View Details" hint */}
                <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: '1px solid rgba(34,34,34,0.08)' }}
                >
                    <div className="flex items-center gap-3">
                        {item.projectUrl && (
                            <a
                                href={item.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-150"
                            >
                                <LinkIcon />
                                Demo
                            </a>
                        )}
                        {item.githubUrl && (
                            <a
                                href={item.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-150"
                            >
                                <GitHubIcon />
                                Code
                            </a>
                        )}
                    </div>

                    {/* "View detail" indicator */}
                    <span
                        className="text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0"
                        style={{ color: '#7B7B7B' }}
                    >
                        Detail
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

// ─── Main Portfolio Component ──────────────────────────────────────────────────
function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    
    // 1. Tambahkan state untuk melacak tab yang aktif
    const [activeTab, setActiveTab] = useState('Full-Stack Data Engineering');

    // 2. Buat variabel baru yang hanya berisi data sesuai tab yang dipilih
    const filteredItems = portfolioItems.filter(item => item.group === activeTab);

    return (
        <main className="bg-[var(--tertiary)] text-[var(--primary)] min-h-screen py-16 md:py-24 font-[aeonik]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* ── Header */}
                <header className="text-center mb-10 md:mb-14">
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
                        style={{ color: '#7B7B7B' }}
                    >
                        Selected Works
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-4 leading-tight">
                        My Portfolio
                    </h1>
                    
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                        <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                    </div>
                    <p className="mt-5 text-base md:text-lg text-[var(--secondary)] max-w-md mx-auto leading-relaxed">
                        A curated collection of projects built with precision, purpose, and craft.
                    </p>
                </header>

                {/* ── Toggle Button UI */}
                <div className="flex justify-center mb-10 md:mb-14">
                    <div
                        className="inline-flex items-center p-1.5 rounded-full"
                        style={{
                            background: 'rgba(34,34,34,0.04)',
                            border: '1px solid rgba(34,34,34,0.08)'
                        }}
                    >
                        {['Full-Stack Data Engineering', 'Industrial Engineering'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-out"
                                style={{
                                    background: activeTab === tab ? 'rgba(34,34,34,0.9)' : 'transparent',
                                    color: activeTab === tab ? '#ffffff' : '#7B7B7B',
                                    boxShadow: activeTab === tab ? '0 4px 12px rgba(34,34,34,0.15)' : 'none'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Cards Grid */}
                {/* 3. Gunakan filteredItems di sini, bukan portfolioItems */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredItems.map(item => (
                        <PortfolioCard
                            key={item.id}
                            item={item}
                            onClick={() => setSelectedProject(item)}
                        />
                    ))}
                </div>
            </div>

            {/* ── Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </main>
    );
}

export default Portfolio;
