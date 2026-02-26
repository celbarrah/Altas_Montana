import ServiceHero from '@/components/ServiceHero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
     <ServiceHero classe={"service_bg"} title={"SERVICES"} subtitle={"Des services essentiels pour protéger ceux qui comptent"} descrip={"Deux solutions claires et humaines, pensées pour accompagner les familles en Belgique dans les moments les plus sensibles."} btn={true}/>
     <section className='service_shape h-300 md:h-250 flex justify-center items-center relative z-10 bottom-40 md:bottom:30 xl:bottom-60 px-4 md:px-15 xl:px-32'>
        <nav className='grid grid-cols-1 md:grid-cols-2 gap-2 h-[70%] lg:h-[45%]'>
            <div className='flex flex-col gap-2 md:gap-5 justify-center'> 
                <h1 className='font-extrabold text-3xl text-[#16553C]'>NOS DEUX SERVICES</h1>
                <div className='flex items-center gap-4 mt-10'>
                  <Image src={"/1.png"} alt='1' width={40} height={40} />
                  <h2 className='text-2xl font-bold'> ASSISTANCE OBSÈQUES</h2>
                </div>
                <p>L’assistance obsèques est conçue pour soulager vos proches lorsqu’un décès survient.
                    Elle prend en charge les démarches administratives
                    et offre un accompagnement humain, pour que votre famille ne soit jamais confrontée aux imprévus sur les urgences de la vie. 
                </p>
                <a href="https://wa.me/32492861660" target='_blank'>
                <Image src={"/whats_btn.png"} alt='btn' width={300} height={100} />
                </a>
            </div>
            <div className='w-full h-full bg_service1 rounded-2xl' />
        </nav>
        <section className='h-auto md:h-110 absolute z-10 -bottom-50 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] xl:w-[75%]'>
          <nav className='grid grid-cols-1 md:grid-cols-2 gap-2 h-full relative py-6'>
            <div className='absolute h-full w-[95%] right-0 bg-[#F7F7F7] -z-10'/>
            <div className='w-full h-full bg_service2 ' />
            <div className='flex flex-col gap-5 justify-center items-center md:items-start pl-4'> 
                <div className='flex items-center justify-center md:justify-start text-center md:text-start gap-4 mt-10'>
                  <Image src={"/2.png"} alt='2' width={40} height={40} />
                  <h1 className='text-3xl font-bold'>VITAL CARES</h1>
                </div>
                <h2 className='font-extrabold text-2xl text-[#16553C] uppercase text-center md:items-start'>Protection maladies graves</h2>
                <p>
                  Une maladie grave ne touche jamais une seule personne.
                  Elle impacte toute une famille, émotionnellement et financièrement.
                  Vital Cares apporte une protection financière et un accompagnement humain dès le premier jour.
                </p>
                 <a href="https://wa.me/32492861660" target='_blank'>
                <Image src={"/whats_btn.png"} alt='btn' width={300} height={100} />
                </a>
            </div>
        </nav>
        </section>     
     </section>
     <section className='my-20 px-5 md:px-0 flex flex-col items-center gap-4'>
        <h1 className='font-extrabold text-4xl text-[#16553C] text-center md:text-start'>Protéger, C'est Aimer</h1>
        <p className='text-center text-xl'>
          Choisir une protection, ce n’est pas céder à la peur. <br />
          C’est faire preuve de responsabilité envers ceux que l’on aime.
        </p>
        <Link href={"/contact"} className='hover w-75 h-14 rounded-full  text-white font-extrabold bg-[#16553C] uppercase flex items-center gap-3 px-3'>
          <Image src={"/phone.png"} alt='phone' height={30} width={30} />
          Verifier Mon éligibilié
        </Link>
        <p className='text-black/50 text-center md:text-start'>Sans engagement • Gratuit • Accompagnement humain</p>
     </section>
    </>
  )
}

export default page