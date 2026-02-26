import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className='h-auto md:h-64 bg-[#16553C] w-full flex justify-center items-center'>
       <div className='w-[95%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 p-3 md:p-0 h-auto md:h-52'>
        <div className='border-r-2 border-white/50 space-y-3 flex flex-col justify-center pr-10'>
            <h2 className='font-extrabold text-white text-3xl'>Parlez à un courtier d’assurance qui vous aidera au mieux</h2>
            <p className='text-white/50'>Un conseiller vous accompagne pour comprendre votre besoin, ils vous explique les solutions selon vos différents choix et répond à vos attentes et sans engagement</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h2 className='font-extrabold text-white text-2xl text-center'> Une question ? <br /> Besoin d’être rassuré(e) ?</h2>
            <div className='space-y-1'>
                <div className='flex items-center justify-center gap-4'>
                    <Image src={"/phone.png"} alt='phone' width={25} height={25} />
                    <p className='text-white/50'>+32 493 99 51 37</p>
                </div>
                <p className='text-white/50'>Du lundi au vendredi – 9h à 18h</p>
            </div>
            <Link href={"/contact"} className='h-12 w-85 flex justify-center items-center bg-white text-black font-extrabold rounded-full'>Vérifier mon éligibilité</Link>
        </div>
       </div>
    </section>
  )
}

export default Contact