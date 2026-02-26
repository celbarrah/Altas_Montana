import Image from 'next/image'
import React from 'react'
import check from "@/public/check_1.png"
import shield from "@/public/shield_1.png"
import conversation from "@/public/conversation.png"
import Card from './Card'

const Works = () => {
  return (
    <section className='h-auto xl:h-125 flex flex-col items-center gap-7 mt-12'>
        <h2 className='font-extrabold text-2xl md:text-3xl'>Comment ça fonctionne</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 md:gap-9 lg:gap-4 mt-8'>
          <Card pic={check} title={"1- Vérifiez votre éligibilité"} des={"En quelques minutes, vérifiez si vous êtes éligible à nos solutions d’assistance obsèques ou de protection en cas de maladie grave. Sans engagement, sans pression."} />
          <Card pic={conversation} title={"2- Échangez avec un courtier d’assurance"} des={"Un courtier vous contacte pour effectuer sur votre situation actuelle, une analyse de vos besoins et vous explique  les meilleures options disponibles en toute simplicité."} />
          <Card pic={shield} title={"3- Protégez vos proches en toute sérénité"} des={"Une fois votre solution choisie, vos proches bénéficient d’un accompagnement humain, administratif et financier le jour où ils en ont le plus besoin"} />
        </div>
    </section>
  )
}

export default Works