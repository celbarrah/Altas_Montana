import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className='px-10 md:px-20 xl:px-24 pt-20 text-center mb-20'>
      <h1 className='font-extrabold text-4xl'>Nos services</h1>
      <p>Deux protections essentielles, avec un accompagnement humain du début à la fin</p>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 mt-10 justify-center'>
        <nav className='flex flex-col items-center'>
            <h3 className='h-14 w-80 md:w-100 flex justify-center items-center bg-[#E6F1EC] font-extrabold rounded-4xl text-2xl'>Assistance Obsèques</h3>
            <div className='p-10 item1 h-125 w-90 xl:w-112.5 rounded-4xl flex flex-col justify-between items-center text-start'>
                <p>Soulager vos proches quand ils en ont le plus besoin. </p>
                <p>Une assurance et une assistance complètes conçues pour protéger votre famille financièrement et humainement lors d’un décès.</p>
                <ul className='list-disc relative right-7'>
                    <li>Organisation des démarches</li>
                    <li>Aide administrative</li>
                    <li>Accompagnement humain</li>
                    <li>Intervention en Belgique</li>
                    <li>Care Manager dédié</li>
                </ul>
                <Link href={"/problematique"} className='hover h-12 w-80 flex justify-center items-center bg-[#16553C] text-white font-extrabold rounded-full'>Découvrir l’assistance obsèques</Link>
            </div>
        </nav>
        <nav className='flex flex-col items-center'>
            <h3 className='h-14 p-2 w-80 md:w-100 flex flex-col justify-center items-center bg-[#E6F1EC] font-extrabold rounded-4xl text-2xl'>Vital Cares <span className='font-medium text-[14px]'>Protection maladies graves</span></h3>
            <div className='p-10 item2 h-125 w-90 xl:w-112.5 rounded-4xl flex flex-col justify-between items-center text-start'>
                <p className='font-bold'>Le cancer ne touche pas qu’une personne. Il touche toute une famille. </p>
                <p>Vital Cares complète votre protection en cas de maladie grave ou de décès.</p>
                <p className='font-bold'>Un soutien financier et humain, destiné :</p>
                <ul className='list-disc'>
                    <li>aux particuliers</li>
                    <li>aux entreprises (B2B) souhaitant optimiser leurs charges et soutenir leurs collaborateurs</li>
                </ul>
                <Link href={"/services"} className='hover h-12 w-80 flex justify-center items-center bg-[#16553C] text-white font-extrabold rounded-full'>Découvrir Vital Care</Link>
            </div>
        </nav>
    </div>
    </section>
  )
}

export default Services