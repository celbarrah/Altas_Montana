import React from 'react'

const About = () => {
  return (
    <section className='shape1 grid grid-cols-1 lg:grid-cols-2 px-10 md:px-20 xl:px-24 pt-20 gap-4'>
        <div className='space-y-10'>
            <h1 className='font-extrabold text-2xl'>À propos d’Assurance Décès Plus</h1>
            <p className='text-[19px]'>Chez Assurance Décès Plus, nous sommes convaincus d’une chose :
                Lorsqu'un imprévu survient, vos proches ne devraient jamais être seuls. <br />
                Perte d’un être cher, maladie grave, situation d’urgence… ces moments sont déjà suffisamment lourds émotionnellement pour ne pas y ajouter des démarches complexes, des décisions difficiles ou des inquiétudes financières. <br />
                C’est pourquoi nous proposons des solutions d’assurance et d’assistance simples, claires et profondément humaines, pensées pour accompagner les familles en Belgique au moment où elles en ont le plus besoin
            </p>
        </div>
        <div className='h-auto md:h-125 w-full bg_about rounded-3xl'/>
        <div className='h-auto md:h-55 relative top-10 py-10 px-5 md:px-10 bg-[#16553C] w-full rounded-3xl col-span-1 lg:col-span-2'>
            <p className='text-white/45'>Nos solutions sont développées en collaboration avec des partenaires d’assurance reconnus comme AXA et DAS, et reposent sur un accompagnement réel, assuré par un Care Manager dédié.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 text-white mt-5'>
                <p className='font-extrabold'>Son rôle : écouter, coordonner, soulager. <br />
                Pour vous puissiez vous concentrer sur l’essentiel.</p>
                <p className='border border-white rounded-4xl p-4 mt-2 md:mt-0'>Penser à demain, ce n’est pas être inquiet.
                C’est être responsable envers ceux que l’on aime</p>
            </div>
        </div>
    </section>
  )
}

export default About