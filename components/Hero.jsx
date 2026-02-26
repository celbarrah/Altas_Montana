import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='bg h-162.5 relative overflow-hidden wave px-0 md:px-10 flex  justify-center items-center'>
      <div className='flex flex-col w-[95%] md:w-[80%] xl:w-[75%]  items-center gap-6 text-center'>
        <Image src={"/logo.png"} height={250} width={250} alt='atlas montana' />
        <h1 className='font-extrabold text-white uppercase text-2xl md:text-3xl lg:text-5xl'>Protégez vos proches, même dans  les moments les plus difficiles</h1>
        <p className='text-white/50 text-[16px] md:text-[20px] uppercase font-light'>Assistance obsèques et protection financière en cas de maladie grave ou de décès. Sans pression. Sans jargon. Avec un accompagnement humain.</p>
        <Link href={"/contact"} className='hover2 w-75 h-14 rounded-full bg-white font-bold flex justify-center items-center'>Vérifier mon éligibilité</Link>
        <Link href={"/contact"} className='hover2 w-100 h-14 rounded-full bg-white font-bold flex justify-center items-center'>Parler à un courtier d’assurance</Link>
        
      </div>
    </section>
  )
}

export default Hero