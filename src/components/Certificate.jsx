import React, {useState} from 'react'
import dataAnalyst_udemy from "../assets/certificates/data-analyst-udemy.png"
import AI_Taalenta from "../assets/certificates/AI-Taalenta.jpeg"
import CAD_Industri from "../assets/certificates/CAD-Industri.jpeg"
import logo_udemy from "../assets/certificates/logo-udemy.png"
import logo_taalenta from "../assets/certificates/logo-Taalenta.jpeg"
import arrow_down from "../assets/arrow-down.png"

const certificates = [
    {id: 1, title: "The Data Analyst Course: Complete Data Analyst Bootcamp", date: "22 JAN 2025", issuer: "Udemy", skills: ["Pyhton", "Data Analyst"], logo: logo_udemy, img: dataAnalyst_udemy, Credential: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-12b3406a-aa26-46e1-a6f2-6cd80d5f5319.pdf'},
    {id: 2, title: "AI & CHATGPT Untuk Inovasi Kerja Akademik dan Perkantoran (Pemula) Batch 6", date: "9 MAR 2024", issuer: "Taalenta", skills: ["Productivity", "Prompting AI"], logo: logo_taalenta, img: AI_Taalenta, Credential: 'https://drive.google.com/file/d/19n6dJV0adIGtIvD2K8ySdbbtJVkTh3qR/view?usp=sharing'},
    {id: 3, title: "Desing Club", date: "30 JAN 2024", issuer: "Himpunan Mahasiswa Teknik Indsutri", skills: ["CAD", "3D Desing", "Product Design"], logo: '', img: CAD_Industri, Credential: 'https://drive.google.com/file/d/1IVc7dpP4wUBAyPMqmXrkGWaVvNOZlUcZ/view?usp=sharing'},
]

function Certificate({item}) {
    const [isHoveredID, setIsHoveredID] = useState(null)

  return (
    <section className='font-[aeonik] w-screen max-w-screen min-h-full bg-[var(--tertiary)] text-white flex flex-col pt-10 pr-8 pl-10'>
        <h2 className='text-[var(--primary)] text-3xl pb-8'>Sertifikat</h2>
        <div className='flex flex-col items-center gap-4'>
            {certificates.map((item) => {
            const isHovered = isHoveredID == item.id

            return (
                <div className='w-full min-h-[200px] bg-[var(--tertiary)] border-[1px] rounded-[5px] border-[black] flex flex-row min-h-content  bg-cover bg-right bg-no-repeat font-[aeonik]
                '   key={item.id}
                    onMouseEnter={() => setIsHoveredID(item.id)}
                    onMouseLeave={() => setIsHoveredID(null)}
                    style={{
                        backgroundImage: `url(${item.img})`,
                        transition: "all 0.5s"
                    }}
                    >
                        <div className={`bg-[var(--secondary)] flex flex-col items-start justify-around p-1 pl-2 ${ isHovered ? 'w-[70%]' : 'w-[35%]'}`}
                        style={{
                        transition: '0.35s'
                        }}
                        >
                            <h3 className='text-[var(--primary)] text-lg'
                            >{item.title}</h3>
                                <div className={`flex flex-row gap-4 items-start ${isHovered ? 'opacity-[1] block' : 'hidden opacity-[0]'}`}
                                style={{
                                transition: '0.2s'
                                }}
                                >
                                    <div className='flex flex-col text-[var(--tertiary)] text-sm gap-1'>
                                        <p className=''>{item.date}</p>
                                        <p className='font-semibold text-[var(--primary)]'>{item.issuer}</p>
                                        <img className='w-20' src={item.logo}></img>
                                    </div>
                                    <div className='flex flex-row gap-2 flex-wrap h-auto'>
                                        {item.skills.map((skill, index) => (
                                            <span 
                                            key={index} 
                                            className="bg-[var(--tertiary)] text-[var(--secondary)] text-xs font-mono px-2 rounded h-auto"
                                            >
                                            {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                        </div>
                        <div className={`grow-1 bg-none w-auto h-full min-h-[200px] flex flex-col items-center justify-center ${isHovered ? 'block opacity-[1]' : 'hidden opacity-[0]'}`} style={{
                            backdropFilter: `blur(${isHovered ? '2px' : '0px'})`,
                            transition: '0.5s'
                        }}>
                            <a className='font-[aeonik-bold] text-[var(--primary)] text-sm p-2' href={item.Credential} target='_blank'>
                                <span>Lihat Kredensial</span>
                                <img src={arrow_down} className='rotate-270'></img>
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Certificate
