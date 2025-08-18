import React from 'react';
import talenta_digital from "../assets/portfolioImage/talentaDigital.png";
import unteyo_journey from '../assets/portfolioImage/unteyoJourney.png';
import descriptive_correlation from "../assets/portfolioImage/descriptive-correlation.png"

// Komponen untuk ikon (tidak diubah)
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

// Data portofolio statis
const portfolioItems = [
    {
        id: 1,
        title: 'TalentaDigital.id',
        description: 'TalentaDigital.id adalah platform edukasi full-stack yang dibangun dengan tumpukan teknologi MERN (React, Node.js, Express, MongoDB), menampilkan sistem autentikasi aman (JWT & Google OAuth) dengan manajemen peran dinamis. Platform ini mengintegrasikan empat fitur utama: platform kursus dengan sertifikat PDF dinamis (Skill Lab), sistem kuis kompetitif (Zona Asah Otak), inkubator ide bisnis dengan bimbingan mentor (Inkubator Wirausaha), dan alat asesmen karier (Kompas Karier). Dengan antarmuka mobile-first yang responsif menggunakan React & Tailwind CSS, aplikasi ini dirancang untuk menangani logika bisnis yang kompleks dari manajemen konten hingga interaksi pengguna. ',
        imageUrl: talenta_digital,
        projectUrl: 'https://talentadigital.farhanportfolio.my.id/login',
        githubUrl: 'https://github.com/farhandwk/talenta-digital',
        tags: 'React,Node.js,Nginx,VPS, Fullstack'
    },
    {
        id: 2,
        title: 'Unteyo Journey',
        description: 'Website Single Page Application yang difungsikan sebagi landing page oleh creative media mahasiswa.',
        imageUrl: unteyo_journey,
        projectUrl: 'https://www.unteyojourney.com/',
        githubUrl: 'https://github.com/farhandwk/UnteyoJourney',
        tags: 'React, Tailwind, Frontend'
    },
    {
        id: 3,
        title: 'Descriptive Analytics & Correlation Analysis Tools',
        description: 'Sebuah aplikasi web full-stack yang dirancang untuk mengubah data survei mentah dari file CSV menjadi wawasan visual secara instan. Dibangun menggunakan React.js untuk frontend dan Flask (Python) untuk backend, aplikasi ini secara cerdas mendeteksi kolom Skala Likert, menghitung statistik deskriptif, dan menghasilkan heatmap korelasi yang interaktif. Proyek ini secara dramatis mengurangi waktu analisis manual dan memberdayakan pengguna non-teknis, seperti tim event organizer, untuk membuat keputusan berbasis data dengan cepat dan efisien.',
        imageUrl: descriptive_correlation,
        projectUrl: 'https://analytics.farhanportfolio.my.id/',
        githubUrl: 'https://github.com/farhandwk/descriptive-correlation',
        tags: 'Fullstack, Python, Pandas, Data, Flask, React, VPS'
    },
];

function Portfolio() {
    return (
        <main className="bg-[var(--tertiary)] text-white min-h-screen py-16 md:py-24 font-[aeonik]">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
                <header className="text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl mb-2 text-[var(--primary)] font-bold">My Portfolio</h1>
                    <p className="text-lg md:text-xl text-[var(--secondary)]">A collection of my projects and work.</p>
                </header>

                {/* Grid untuk Kartu Portofolio (kelas grid Anda sudah sempurna!) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map(item => (
                        // --- KARTU PORTOFOLIO ---
                        <div key={item.id} className="bg-[var(--secondary)] rounded-lg overflow-hidden shadow-lg 
                                                    flex flex-col transform hover:scale-105 transition-transform duration-300">
                            <img 
                                src={item.imageUrl}
                                alt={item.title} 
                                className="w-full h-56 object-cover" 
                            />
                            {/* Kontainer konten kartu dibuat flex-col agar link bisa menempel di bawah */}
                            <div className="p-6 flex flex-col flex-grow items-start justify-between">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[var(--tertiary)]">{item.title}</h3>
                                
                                {/* Tags atau Skills */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags && item.tags.split(',').map((tag, index) => (
                                        <span key={index} className="bg-[var(--tertiary)] text-[var(--primary)] text-xs font-semibold px-2.5 py-1 rounded-full">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Deskripsi dengan flex-grow dan line-clamp */}
                                <p className="text-[var(--tertiary)]/80 text-sm md:text-base mb-6 flex-grow">
                                    {item.description}
                                </p>
                                
                                {/* Tombol Link (mt-auto akan mendorongnya ke bawah) */}
                                <div className="flex items-center gap-4 mt-auto">
                                    {item.projectUrl && (
                                        <a href={item.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--tertiary)] hover:text-sky-400 transition-colors font-semibold">
                                            <LinkIcon />
                                            Live Demo
                                        </a>
                                    )}
                                    {item.githubUrl && (
                                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--tertiary)] hover:text-sky-400 transition-colors font-semibold">
                                            <GitHubIcon />
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Portfolio;