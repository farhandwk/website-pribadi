import React, {useState} from 'react'
import dataAnalyst_udemy from "../assets/certificates/data-analyst-udemy.png"
import logo_udemy from "../assets/certificates/logo-udemy.png"
import arrow_down from "../assets/arrow-down.png"


function Certificate({item}) {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div>
      <div className='w-full h-[200px] bg-[var(--tertiary)] border-[1px] rounded-[5px] border-[black] flex flex-row  bg-cover bg-right bg-no-repeat font-[aeonik]
      ' key={item.id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
            backgroundImage: `url(${item.bg})`
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
                        <div className='flex flex-col text-[var(--tertiary)] text-sm'>
                            <p className=''>{item.date}</p>
                            <p>{item.issuer}</p>
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
            <div className={`grow-1 bg-none w-auto h-full flex flex-row items-center ${isHovered ? 'block opacity-[1]' : 'hidden opacity-[0]'}`} style={{
                backdropFilter: `blur(${isHovered ? '2px' : '0px'})`,
                transition: '0.5s'
            }}>
                <a className='font-[aeonik-bold] text-[var(--primary)] text-sm p-2' href={item.url} target='blank'>
                    <span>Lihat Kredensial</span>
                    <img src={arrow_down} className='rotate-270'></img>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Certificate
