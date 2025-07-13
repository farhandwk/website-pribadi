import React, {useState, useEffect} from 'react'


function Portfolio() {
    const [selectedSection, setSelectedSection] = useState(true)

    const handleSection1 = () => {
        setSelectedSection(true)
    }

    const handleSection2 = () => {
        setSelectedSection(false)
    }

  return (
    <section className='font-[aeonik] w-full h-full bg-[var(--tertiary)]
    flex flex-col items-center justify-start pt-10 pr-8 pl-10
    '>
        <h2 className='text-[var(--primary)] text-3xl self-start pb-8'>
            Portofolio
        </h2>
        <div className='flex flex-row gap-4'>
            <button className='text-[var(--primary)] text-md border-[1px] rounded-[5px] bg-[none] p-2 pb-0.5 pt-0.5 w-[120px]
            hover:bg-[var(--primary)] hover:text-[var(--tertiary)] duration-[0.5s]
            ' onClick={handleSection1}>Full Stack</button>
            <button className='text-[var(--primary)] text-md border-[1px] rounded-[5px] bg-[none] p-2 pb-0.5 pt-0.5 w-[120px]
            hover:bg-[var(--primary)] hover:text-[var(--tertiary)] duration-[0.5s]
            ' onClick={handleSection2}>Data Analyst</button>
        </div>
        <h3>{selectedSection ? "Full Stack" : "Data Analyst"}</h3>
        <div>
            
        </div>
    </section>
  )
}

export default Portfolio
