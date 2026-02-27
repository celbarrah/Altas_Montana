import Image from 'next/image'
import React from 'react'

const Client = () => {
  return (
    <section className='px-10 md:px-20 xl:px-24 pt-20 text-center mb-20 flex justify-center items-center'>
      <div className='w-[95%] md:w-[85%]'>
        <h1 className='font-extrabold text-4xl'>Notre partenaires</h1>
      <div className='grid grid-cols-3 md:grid-cols-6 justify-center items-center place-items-center gap-10 md:gap-3 mt-14'>
        <Image src={"/client1.png"} alt='assurance' height={100} width={150} />
        <Image src={"/client2.png"} alt='Axa' height={100} width={150} />
        <Image src={"/client3.png"} alt='Patronale' height={100} width={300} />
        <Image src={"/das.svg"} alt='assurance' height={70} width={100} />
        <Image src={"/pobos.svg"} alt='Axa' height={100} width={150} />
        <Image src={"/prisma.png"} alt='Patronale' height={100} width={300} />
      </div>
      </div>
    </section>
  )
}

export default Client