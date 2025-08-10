import React, { useState } from 'react'
import Marquee from "react-fast-marquee"
import python from "../assets/skills/python.png"
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import js from "../assets/skills/js.png"
import nodejs from "../assets/skills/nodejs.png"
import react from "../assets/skills/react.png"
import Certificate from './Certificate'


// Bungkus komponen dengan forwardRef
const About = React.forwardRef((props, ref) => {

    const skills = [
        {id: 1, name: "python", img: python},
        {id: 2, name: "html", img: html},
        {id: 3, name: "css", img: css},
        {id: 4, name: "js", img: js},
        {id: 5, name: "nodejs", img: nodejs},
        {id: 6, name: "react", img: react}
    ]

  return (
    // Pasang ref yang diterima ke elemen terluar dari section ini
    <section ref={ref} id="about" className="font-[aeonik] w-screen max-w-screen min-h-full bg-[var(--tertiary)] text-white flex flex-col pt-10 pr-0 pl-0
    ">
      <div className='flex flex-col w-full h-auto gap-2 pr-8 pl-10'>
        <h2 className='text-[var(--primary)] text-3xl'>Tentang Saya</h2>
        <p className='text-[var(--secondary)] text-sm text-justify'>Saya adalah seorang pengembang web dan analis data yang bersemangat dalam menciptakan solusi teknologi yang efisien dan berdampak. Dengan latar belakang yang kuat dalam pengembangan full-stack dan analisis data, saya senang mengubah ide-ide kompleks menjadi aplikasi yang fungsional dan menganalisis data untuk menemukan wawasan yang berharga. Saya percaya pada pembelajaran berkelanjutan dan selalu mencari tantangan baru untuk mengembangkan keahlian saya.</p>
      </div>
      <div className='flex flex-col w-full h-auto pt-10'>
        <h2 className='text-[var(--primary)] text-3xl pr-8 pl-10 pb-4'>Skillsets</h2>
        <Marquee pauseOnHover direction='left' speed={30} gradient='true' gradientColor='#F8F8F8' gradientWidth={150} className='w-screen pb-4'>
          {skills.map((item) => (
            <div key={item.id} className='pr-4'>
              <img src={item.img} className='w-18 h-18 '></img>
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover direction='right' speed={30} gradient='true' gradientColor='#F8F8F8' gradientWidth={150} className='w-screen'>
          {skills.map((item) => (
            <div key={item.id} className='pr-4'>
              <img src={item.img} className='w-18 h-18 '></img>
            </div>
          ))}
        </Marquee>
        </div>
    </section>
  );
});

export default About;