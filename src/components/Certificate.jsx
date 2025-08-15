import React, { useState } from 'react';
import dataAnalyst_udemy from "../assets/certificates/data-analyst-udemy.png";
import AI_Taalenta from "../assets/certificates/AI-Taalenta.jpeg";
import CAD_Industri from "../assets/certificates/CAD-Industri.jpeg";
import logo_udemy from "../assets/certificates/logo-udemy.png";
import logo_taalenta from "../assets/certificates/logo-Taalenta.jpeg";
import arrow_down from "../assets/arrow-down.png";

// Data sertifikat didefinisikan di luar komponen agar lebih rapi
const certificates = [
    // Saya perbaiki typo "Pyhton" -> "Python"
    {id: 1, title: "The Data Analyst Course: Complete Data Analyst Bootcamp", date: "22 JAN 2025", issuer: "Udemy", skills: ["Python", "Data Analyst"], logo: logo_udemy, img: dataAnalyst_udemy, Credential: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-12b3406a-aa26-46e1-a6f2-6cd80d5f5319.pdf'},
    {id: 2, title: "AI & CHATGPT Untuk Inovasi Kerja Akademik dan Perkantoran", date: "9 MAR 2024", issuer: "Taalenta", skills: ["Productivity", "Prompting AI"], logo: logo_taalenta, img: AI_Taalenta, Credential: 'https://drive.google.com/file/d/19n6dJV0adIGtIvD2K8ySdbbtJVkTh3qR/view?usp=sharing'},
    {id: 3, title: "Design Club", date: "30 JAN 2024", issuer: "Himpunan Mahasiswa Teknik Industri", skills: ["CAD", "3D Design", "Product Design"], logo: '', img: CAD_Industri, Credential: 'https://drive.google.com/file/d/1IVc7dpP4wUBAyPMqmXrkGWaVvNOZlUcZ/view?usp=sharing'},
];

// Prop 'item' tidak digunakan, jadi saya hapus untuk kebersihan kode
function Certificate() {
    const [hoveredID, setHoveredID] = useState(null);

    return (
        <section className='font-[aeonik] min-h-full bg-[var(--tertiary)] text-white flex flex-col justify-center py-16 md:py-24 overflow-x-hidden'>
            <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 w-full'>
                <h2 className='text-[var(--primary)] text-3xl md:text-4xl text-center pb-8 md:pb-12'>Sertifikat</h2>
                
                {/* --- GRID CONTAINER --- */}
                {/* Mobile: 1 kolom (grid-cols-1) */}
                {/* Tablet (md): 2 kolom (md:grid-cols-2) */}
                {/* Desktop (lg): 3 kolom (lg:grid-cols-3) */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {certificates.map((item) => {
                        const isHovered = hoveredID === item.id;

                        return (
                            // --- KARTU SERTIFIKAT ---
                            <div 
                                className='w-full h-[250px] md:h-[280px] bg-[var(--tertiary)] border-[1px] rounded-lg border-black flex flex-row bg-cover bg-center bg-no-repeat font-[aeonik] shadow-lg overflow-hidden'
                                key={item.id}
                                onMouseEnter={() => setHoveredID(item.id)}
                                onMouseLeave={() => setHoveredID(null)}
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    transition: "transform 0.3s ease", // Menambah efek hover halus
                                    transform: isHovered ? "scale(1.03)" : "scale(1)"
                                }}
                            >
                                {/* Overlay Kiri (Info) */}
                                <div 
                                    className={`bg-[var(--secondary)]/90 backdrop-blur-sm flex flex-col items-start justify-between p-3 md:p-4 ${isHovered ? 'w-full' : 'w-[45%]'}`}
                                    style={{ transition: 'width 0.4s ease-in-out' }}
                                >
                                    <div>
                                        <h3 className='text-[var(--primary)] text-base md:text-lg font-bold'>{item.title}</h3>
                                        {/* Info detail yang muncul saat hover */}
                                        <div className={`transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0 h-0 invisible'}`}>
                                            <div className='flex flex-col text-[var(--tertiary)] text-xs md:text-sm gap-1 mt-2'>
                                                <p>{item.date}</p>
                                                <p className='font-semibold text-[var(--primary)]'>{item.issuer}</p>
                                                {item.logo && <img className='w-16 md:w-20' src={item.logo} alt={`${item.issuer} logo`} />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skills Pills */}
                                    <div className={`flex flex-row gap-2 flex-wrap h-auto transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0 invisible'}`}>
                                        {item.skills.map((skill, index) => (
                                            <span 
                                                key={index} 
                                                className="bg-[var(--tertiary)] text-[var(--secondary)] text-[10px] md:text-xs font-mono px-2 py-1 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Overlay Kanan (Link Kredensial) */}
                                <div 
                                    className={`absolute top-0 right-0 w-full h-full flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <a className='flex items-center gap-2 font-bold text-white text-sm p-2 rounded-lg bg-black/50 hover:bg-black/75 transition-colors' href={item.Credential} target='_blank' rel="noopener noreferrer">
                                        <span>Lihat Kredensial</span>
                                        <img src={arrow_down} className='w-4 h-4 -rotate-90'></img>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Certificate;