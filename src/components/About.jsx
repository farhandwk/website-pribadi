import React from 'react';
import Marquee from "react-fast-marquee";
import python from "../assets/skills/python.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import nodejs from "../assets/skills/nodejs.png";
import react from "../assets/skills/react.png";
// import Certificate from './Certificate';

const About = React.forwardRef((props, ref) => {

    const skills = [
        { id: 1, name: "python", img: python },
        { id: 2, name: "html", img: html },
        { id: 3, name: "css", img: css },
        { id: 4, name: "js", img: js },
        { id: 5, name: "nodejs", img: nodejs },
        { id: 6, name: "react", img: react }
    ];

    return (
        <section 
            ref={ref} 
            id="about" 
            // `overflow-x-hidden` ditambahkan untuk memastikan tidak ada scroll horizontal
            className="font-[aeonik] min-h-full bg-[var(--tertiary)] text-white 
            flex flex-col justify-center py-16 md:py-24 overflow-x-hidden"
        >
            {/* ====== BAGIAN TENTANG SAYA ====== */}
            <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:gap-8 lg:gap-12 items-start'>
                    <div className='w-full md:w-1/3 mb-4 md:mb-0 flex-shrink-0'>
                        <h2 className='text-[var(--primary)] text-3xl md:text-4xl'>Tentang Saya</h2>
                    </div>
                    <div className='w-full md:w-2/3'>
                        <p className='text-[var(--secondary)] text-base md:text-lg text-justify'>
                            Saya adalah seorang pengembang web dan analis data yang bersemangat dalam menciptakan solusi teknologi yang efisien dan berdampak. Dengan latar belakang yang kuat dalam pengembangan full-stack dan analisis data, saya senang mengubah ide-ide kompleks menjadi aplikasi yang fungsional dan menganalisis data untuk menemukan wawasan yang berharga. Saya percaya pada pembelajaran berkelanjutan dan selalu mencari tantangan baru untuk mengembangkan keahlian saya.
                        </p>
                    </div>
                </div>
            </div>

            {/* ====== BAGIAN SKILLSETS ====== */}
            {/* Kontainer untuk Skillsets dibuat terpisah agar Marquee bisa full-width tanpa terpengaruh padding */}
            <div className='w-full h-auto pt-16 md:pt-24'>
                <h2 className='text-[var(--primary)] text-3xl md:text-4xl text-center pb-8 md:pb-12'>
                    Skillsets
                </h2>
                
                {/* --- Marquee 1 (ke kiri) --- */}
                {/* gradientColor dikembalikan ke #F8F8F8 sesuai permintaan */}
                <Marquee pauseOnHover direction='left' speed={30} gradient={true} gradientColor='#F8F8F8' gradientWidth={150}>
                    {skills.map((item) => (
                        <div key={item.id} className='px-4 md:px-6'>
                            <img src={item.img} alt={item.name} className='w-16 h-16 md:w-20 md:h-20'></img>
                        </div>
                    ))}
                </Marquee>

                <div className='h-4 md:h-6'></div>

                {/* --- Marquee 2 (ke kanan) --- */}
                <Marquee pauseOnHover direction='right' speed={30} gradient={true} gradientColor='#F8F8F8' gradientWidth={150}>
                    {skills.map((item) => (
                        <div key={item.id} className='px-4 md:px-6'>
                            <img src={item.img} alt={item.name} className='w-16 h-16 md:w-20 md:h-20'></img>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
});

export default About;