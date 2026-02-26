import Link from 'next/link'
import React from 'react'

const ServiceHero = ({title,subtitle,descrip,btn,classe}) => {
  return (
     <section className={`${classe} h-160 md:h-130 px-4 md:px-20 xl:px-32`}>
      <nav className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-[90%]'>
        <div className='col-span-3 flex flex-col gap-5 justify-end md:justify-center'>
          <h1 className='font-extrabold text-4xl text-[#16553C]'>{title}</h1>
          <h2 className='font-extrabold text-4xl'>{subtitle}</h2>
          <p className='text-black/80 text-xl w-[90%]'>{descrip}</p>
          {
            btn &&  <Link href={"/contact"} className='hover w-75 h-14 rounded-full flex justify-center items-center text-white font-extrabold bg-[#16553C]'>Verifier Mon éligibilié</Link>    
          }

        </div>
        <div className='col-span-2'/>
      </nav>
     </section>
  )
}

export default ServiceHero