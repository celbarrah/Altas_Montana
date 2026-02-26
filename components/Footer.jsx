import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-10 flex flex-col items-center gap-9 pb-9 pt-5'>
        <div className='flex justify-between items-center flex-col md:flex-row gap-6 w-[85%]'>
            <Image src={"/logo2.png"} alt='logo' height={100} width={200} />
             <p>Politique de confidentialité | Mentions légales | Contact <br /> Courtier <span className='font-bold'>Costa Gaspare</span></p>
            <div>
                <div className='flex items-center gap-2'>
                    <Image src={"/whatsapp.png"} alt='logo' height={20} width={20} />
                    <p className=''>+32 493 99 51 37</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={"/email.png"} alt='logo' height={20} width={20} />
                    <p className=''><a href="mailto:info@assurancedecesplus.be">info@assurancedecesplus.be</a></p>
                </div>
            </div>
        </div>
        <div>
            <p className='text-center font-light text-black/50'>
             © 2026 Assurance décès Plus. Tous droits réservés. <br />
             Créé par Creative Network</p>
        </div>
    </footer>
  )
}

export default Footer