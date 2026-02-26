import Client from '@/components/Client'
import ClientxForm from '@/components/form'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
        <section className='flex flex-col justify-center items-center mt-14 shape_contact relative'>
        <div className='w-[90%] md:w-[80%] xl:w-[70%] space-y-2 text-center'>
            <h1 className='font-extrabold text-2xl text-[#16553C]'>Contactez-nous en toute simplicité</h1>
            <p className='text-black/50'>Une question, un doute, ou simplement besoin d’être rassuré(e) ? <br /> Nous sommes là pour vous écouter.</p>
        </div>
        {/* <nav className='h-auto pb-7 bg-[#16553C]/30 w-full mt-2 flex flex-col items-center gap-4 pt-5'>
          <div className='w-[40%] h-16 rounded-full bg-[#16553C] flex items-center gap-3 pl-4'>
            <Image src={"/phone_white.png"} alt='phone' width={30} height={30} />
            <h2 className='font-extrabold text-xl text-white'>+32 493 99 51 37</h2>
            <p className='text-white/50'>Du lundi au vendredi — 9h à 18h</p>
          </div>
           <div className='w-[40%] h-16 rounded-full bg-[#16553C] flex items-center gap-3 pl-4'>
            <Image src={"/email_white.png"} alt='phone' width={30} height={30} />
            <h2 className='font-extrabold text-xl text-white'>info@assurancedecesplus.be</h2>
          </div>
          <nav className='mt-10 w-full text-center'>
            <h1 className='font-extrabold text-3xl text-[#16553C]'>Être contacté(e) par un courtier</h1>
            <ClientxForm />
            <p className='text-center font-bold'>Vos données restent confidentielles. <br /> Aucun engagement.</p>
          </nav>
        </nav> */}
        <nav className='w-full flex flex-col items-center justify-center'>
            <div className='w-[90%] md:w-[70%] xl:w-[50%] bg-[#F4F3F3] rounded-3xl h-auto md:h-30 p-5 md:p-0 relative top-9 grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
                <Image src={"/logo2.png"} alt='logo' width={150} height={100} className='border-b-2 md:border-b-0 border-r-0 md:border-r-2 border-black/50 w-[90%] px-10 py-5 md:py-0'/>
                <div>
                    <h1 className='text-[#16553C] font-bold'>Comment ca marche ?</h1>
                    <div className='flex items-center gap-1'>
                          <Image src={"/check2.png"} alt='logo' width={20} height={20} />
                          <p className='text-[14px]'>Vous nous contactez via le formulaire de contact</p>
                    </div>
                     <div className='flex items-center gap-1'>
                          <Image src={"/check2.png"} alt='logo' width={20} height={20} />
                          <p className='text-[14px]'>Nous vous contacterons le plus tôt possible</p>
                    </div>
                </div>
            </div>
            <div className='w-[90%] md:w-[80%] xl:w-[60%] bg-[#E6F1EC] rounded-3xl h-auto'>
                 <ClientxForm />
            </div>
        </nav>
        <Client />
    </section>
    </>
    
  )
}

export default page