import ServiceHero from '@/components/ServiceHero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Anticiper le Coût des Obsèques en Belgique | Assurance Décès Plus",
  description:
    "Inflation des frais funéraires, contrats non indexés, démarches complexes : informez-vous et mettez en place une protection claire pour vos proches.",
  openGraph: {
    title: "Les Coûts des Obsèques : Une Réalité Sous-Estimée",
    description:
      "Comprendre aujourd’hui pour protéger demain. Découvrez pourquoi anticiper les frais d’obsèques est essentiel pour votre famille.",
    url: "https://assurancedecesplus.be/couts-obseques",
    siteName: "Assurance Décès Plus",
    locale: "fr_BE",
    type: "website",
  },
};
const page = () => {
  return (
    <>
     <ServiceHero classe={"prob_bg"} title={<>PROBLÉMATIQUE <br /> DES COÛTS OBSÈQUES</>} subtitle={"Les coûts des obsèques : une réalité souvent sous-estimée"} descrip={"Lorsqu’un décès survient, les proches doivent faire face à une douleur immense… et souvent à des frais imprévus."} btn={false} />
       <section className='service_shape h-300 md:h-250 flex justify-center items-center relative z-10 bottom-40 md:bottom:30 xl:bottom-60 px-4 md:px-15 xl:px-32'>
             <nav className='grid grid-cols-1 md:grid-cols-2 gap-2 h-[70%] lg:h-[45%]'>
                 <div className='flex flex-col gap-2 md:gap-8 justify-center'> 
                     <h1 className='font-extrabold text-3xl text-[#16553C]'>COMBIEN COÛTENT DES OBSÈQUES ?</h1>
                     <p>
                        Si cette tendance continue d'augmenter, en 2038, les coûts des funérailles pourraient atteindre :
                     </p>
                     <div>
                        <h2 className='font-extrabold text-3xl md:text-4xl lg:text-6xl mb-2 lg:mb-0 text-[#16553C]'>12.000€ à 21.000€</h2>
                        <p>selon les prestations du coût de la vie.</p>
                     </div>
                    
                    <p className='text-[18px] w-[90%]'>Ces montants doivent souvent être avancés très rapidement par les proches.</p>
                 </div>
                 <div className='w-full h-full graph rounded-2xl' />
             </nav>
             <section className='h-auto md:h-110 absolute z-10 -bottom-50 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] xl:w-[75%]'>
              <nav className="grid grid-cols-1 gap-4 h-full relative py-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center px-4">
                    <Image src="/el1.png" alt="btn" width={300} height={100} className="w-full h-auto" />
                    <Image src="/el2.png" alt="btn" width={300} height={100} className="w-full h-auto" />
                    <Image src="/el3.png" alt="btn" width={300} height={100} className="w-full h-auto" />
                    <div className="col-span-1 order-3 md:order-2 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                        <Image src="/el4.png" alt="btn" width={300} height={100} className="w-full h-auto" />
                        <Image src="/el5.png" alt="btn" width={300} height={100} className="w-full h-auto" />
                    </div>
                </div>
                </nav>
             </section>     
          </section>
          <section className='h-auto w-full relative flex flex-col items-center pb-10'>
            <Image src={"/shape_green3.png"} alt='btn' width={300} height={100} className='-z-10 absolute w-[90%] md:w-full h-full top-0 left-0' />
            <div className='absolute top-0 h-20 md:h-40 bg-[#16553C] rounded-2xl flex items-center justify-center gap-2 w-[95%] md:w-[70%] px-2 left-1/2 -translate-x-1/2'>
                <Image src={"/attention.png"} alt='btn' width={50} height={50} className='brightness-0 invert'/> 
                <p className='text-white/40 text-[16px] md:text-xl'>Ces coûts doivent souvent être avancés <span className='font-bold text-white/60'>dans un délai très court.</span></p>
            </div>
            <section className='flex justify-center items-center flex-col gap-3 w-[95%] md:w-[70%] mt-30'>
                <h1 className='font-extrabold text-xl md:text-3xl text-[#16553C] text-start self-start'>CE QUE VIVENT LES FAMILLES</h1>
                <nav className='bg-white rounded-2xl h-auto w-full mt-10 grid grid-cols-1 md:grid-cols-2 py-10'>
                   <div className='pl-5 md:pl-10 flex flex-col justify-center gap-4'>
                        <h1 className='font-extrabold text-2xl'>Dans ces moments déjà difficiles,<br /> les proches doivent :</h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <Image src={"/time.png"} alt='btn' width={20} height={20}/> 
                                <p>Prendre des décisions rapides</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src={"/card.png"} alt='btn' width={20} height={20}/> 
                                <p>Avancer des sommes importantes</p>
                            </div><div className='flex items-center gap-2'>
                                <Image src={"/doc.png"} alt='btn' width={20} height={20}/> 
                                <p>Gérer des démarches complexes</p>
                            </div><div className='flex items-center gap-2'>
                                <Image src={"/broken.png"} alt='btn' width={20} height={20}/> 
                                <p>Tout en vivant un deuil profond</p>
                            </div>
                        </div>
                        <p>Beaucoup de familles ne s’y attendent pas. <br /> Et pourtant, cette situation est fréquente.</p>
                   </div>
                    <Image src={"/prob_pic1.png"} alt='btn' width={200} height={100} className='w-[95%] md:w-[90%] h-full relative left-0 top-3 md:top-0 md:left-20 object-cover bg-center'/> 
                </nav>
            </section>
            <section className='flex justify-center items-center flex-col gap-5 w-[95%] md:w-[80%] xl:w-[70%] mt-30'>
                <h1 className='font-extrabold text-3xl text-[#16553C] text-center md:text-start uppercase'>pour ceux qui comptent le plus</h1>
                <p className='text-center'>Anticiper, ce n’est pas penser au pire. <br /> C’est éviter une charge supplémentaire à ceux que l’on aime.</p>
                    <Link href={"/contact"} className='hover w-80 h-14 rounded-full bg-[#16553C] font-bold text-white flex justify-center items-center'>Vérifier mon éligibilité</Link>
                <h3 className='font-bold italic'>Sans engagement • Informations claires</h3>
            </section>
          </section>
           <section className='flex justify-center items-center flex-col gap-5 w-[95%] md:w-[80%] m-auto mt-10'>
                <h1 className='font-extrabold text-xl md:text-3xl text-[#16553C] text-start uppercase'>PROBLÉMATIQUE DES CONTRATS EXISTANTS & INDEXATION</h1>
                <div className='h-14 bg-[#EEEDED] px-5 flex items-center justify-center gap-3 rounded-2xl'>
                    <Image src={"/attention_green.png"} alt='btn' width={40} height={40}/> 
                    <h2 className='uppercase text-[15px] md:text-[16px]'>Attention aux contrats existants : un capital qui ne suit pas toujours les coûts réels</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-4 justify-items-center'>
                    <Image src={"/prob_pic2.png"} alt='btn' width={200} height={150} className='w-70'/> 
                    <div className='w-full h-full col-span-2 flex flex-col items-center gap-8'>
                        <p> Avez-vous déjà souscrit un contrat d’assurance décès ou une assistance obsèques ? </p>
                        <p>Il est important de savoir que rien ne garantit que votre capital décès sera indexé automatiquement chaque année et lorsque c'est la cas, rien n'est indiquer sur le contrat que ce versement se fera chaque année et jusqu'au terme du contrat</p>
                        <p>Par conséquent, puisque les coûts des obsèques après des années auront encore augmenté, comment allez-vous garantir à vos proches que le capital qui sera libéré par la compagnie d'assurance sera suffisant ? IMPOSSIBLE</p>
                        <p>Par conséquent, vos proches devront payer la différence.</p>
                    </div>
                </div>
            </section>
            <section className='h-auto md:h-140 relative mt-10 flex justify-center'>
                <Image src={"/green_shape4.png"} alt='btn' width={200} height={150} className='-z-10 object-center absolute w-full h-full top-0 left-0'/> 
                <nav className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 w-[95%] md:w-[80%] xl:w-[70%]'>
                   <div className='flex flex-col gap-8 pt-30 md:pt-20'>
                     <h1 className='font-extrabold text-white text-2xl md:text-3xl uppercase'>ce qui nous rend uniques</h1>
                     <p className='text-white/55'>Il existe une seule compagnie d'assurance qui garantit contractuellement, qu'une indexation sera versée chaque année et ajouter sur le montant du capital décès : 4 % ou 5 % par an jusqu’au terme du contrat.</p>
                     <p className='text-white/55'><span className='font-bold text-white'>Notre solution :</span><br /> Une assistance obsèques avec indexation garantie par contrat.</p>
                   </div>
                    <Image src={"/prob_pic4.png"} alt='btn' width={200} height={150} className='w-100 rounded-2xl'/> 
                </nav>
            </section>
            <section className='flex justify-center items-center flex-col gap-5 w-[95%] md:w-[80%] m-auto mt-10'>
             <h2 className='font-extrabold text-3xl text-[#16553C] text-start uppercase'>Pourquoi anticiper aujourd’hui ?</h2>
              <nav className=' rounded-2xl h-auto w-full mt-10 grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 py-10'>
                    <Image src={"/prob_pic5.png"} alt='btn' width={200} height={100} className='w-[80%] h-full relative left-0 md:left-20 object-cover bg-center'/> 
                   <div className='pl-2 md:pl-10 flex flex-col gap-4 relative'>
                        <h1 className='text-xl '>Espérance de vie en Belgique (projection 2080)</h1>
                        <div className='flex flex-col gap-2 mt-5'>
                            <div className='flex items-center gap-2 text-3xl'>
                                <h3 className='font-extrabold'>Femmes :</h3> 
                                <p className='font-bold text-[#16553C]'>90 ans</p>
                            </div>
                            <div className='flex items-center gap-2 text-3xl'>
                               <h3 className='font-extrabold'>Hommes :</h3> 
                                <p className='font-bold text-[#16553C]'>89.2 ans</p>
                            </div>
                        </div>
                        <p className='mt-5'>
                            Nous vivons plus longtemps, mais cela implique aussi une augmentation des situations de dépendance, des maladies graves et des coûts liés à la fin de vie.
                            Anticiper aujourd’hui permet de protéger financièrement et humainement ses proches, le moment venu.
                        </p>
                        <h3 className='font-extrabold absolute bottom-0'>Source (en petit, discret) <br /> Source : Bureau fédéral du Plan – Belgique</h3>
                   </div>
                </nav>
            </section>
            <section className='flex justify-center items-center flex-col gap-5 w-[95%] md:w-[80%] m-auto mt-10'>
                <h1 className='font-bold text-[#16553C] text-2xl md:text-4xl'>SIMULATEUR & DÉMARCHES SIMPLIFIÉES</h1>
                <nav className=' rounded-2xl h-auto w-full grid grid-cols-1 md:grid-cols-2 py-10 relative'>
                    <div  className='h-[60%] w-[90%] absolute top-1/2 -translate-y-1/2 bg-[#EEEDED]/40 rounded-3xl -z-10'/>
                   <div className='pl-3 md:pl-10 flex flex-col gap-4 justify-center'>
                        <h1 className='text-xl'>Calculez votre prime en toute simplicité</h1>
                        <p className='mt-5'>
                            Grâce à notre simulateur gratuit en ligne, vous pouvez découvrir votre tarif  et avancer dans votre demande en toute autonomie, sans intermédiaire
                        </p>
            <a href="https://cares.innogarant.com/index.php/funeralCares/quotation/index?language=fr&brokernumber=20389" target="_blank"><button className='hover w-62.5 h-14 rounded-full  text-white font-extrabold bg-[#16553C]'>Calculer Ma Prime</button></a>
                        
                   </div>
                    <Image src={"/prob_pic6.png"} alt='btn' width={200} height={100} className='w-100 h-full rounded-2xl relative mt-4 md:mt-0 left-0 md:left-20 object-cover bg-center'/> 

                </nav>
            </section>
            <section className='flex justify-center items-center flex-col gap-5 w-[95%] md:w-[80%] m-auto mt-10 mb-10'>
                <h1 className='font-bold text-[#16553C] text-xl md:text-2xl'>pour compléter votre demande veuillez télécharger votre carte d'identité , Voici les étapes à suivre :</h1>
                <div className='h-15 bg-[#EEEDED]/70 rounded-4xl flex items-center justify-center gap-2 w-full'>
                  <p className='text-black font-bold text-[15px] md:text-xl uppercase'>la carte d’identité doit impérativement être téléchargée :</p>
                </div>
                <nav className='w-full'>
                    <div className='h-15 bg-[#16553C] rounded-4xl flex items-center justify-center gap-1 md:gap-3 text-white uppercase px-1 md:px-10 w-full'>
                        <p className='text-[13px] md:text-[16px]'>RECTO + VERSO</p>
                        <p>|</p>
                        <p className='text-[13px] md:text-[16px]'>Sur une seule page</p>
                        <p>|</p>
                        <p className='text-[13px] md:text-[16px]'>Au format PDF</p>
                    </div>
                    <div className='relative h-auto md:h-150 flex justify-center items-center py-12 px-5 md:px-15 xl:px-44'>
                      <Image src={"/shape_green5.png"} alt='btn' width={200} height={150} className='w-full rounded-4xl h-full absolute top-0 left-0 -z-10'/>
                      <div className='w-full h-full flex flex-col gap-8'>
                        <div className='border-b border-neutral-600/60 pb-3 space-y-4'>
                            <h1 className='text-2xl uppercase font-bold'>Comment faire simplement</h1>
                            <p>Vous pouvez utiliser un logiciel gratuit :</p>
                            
                            <a href="https://tools.pdf24.org/fr" target='_blank'><button className='hover2 w-70 md:w-90 h-14 rounded-full text-white font-extrabold bg-[#008BA2]'>https://tools.pdf24.org/fr</button></a>
                        </div>
                        <div className='border-b border-neutral-600/60 pb-3 space-y-3'>
                            <p className='font-extrabold'>Étapes :</p>
                            <ul className='list-disc pl-6'>
                                <li>Cliquer sur Fusionner</li>
                                <li>Choisir les fichiers</li>
                                <li>Pour ajouter la deuxième photo, cliquer sur le + bleu</li>
                                <li>Télécharger le PDF final</li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='font-bold'>En cas de difficulté</h3>
                            <p>En cas de problème, n’hésitez pas à envoyer les deux photos par email :</p>
                            <a href="mailto:atlasmontana.global@gmail.com"><button className='hover w-90 h-14 rounded-full  text-white font-extrabold bg-[#16553C]'>atlasmontana.global@gmail.com</button></a>
                        </div>
                      </div>
                    </div>
                </nav>
            </section>
            <section className='flex justify-center items-center flex-col gap-5 w-[95%] md:w-[80%] m-auto mt-10 mb-30'>
                <h1 className='font-bold text-[#16553C] text-3xl md:text-4xl self-start'>ÉVOLUTION DES COÛTS (1978 → 2038)</h1>
                <nav className='grid grid-cols-1 md:grid-cols-2 justify-center items-center relative pt-15 px-5 md:px-20 pb-10'>
                    <div className='absolute h-24 bg-[#EEEDED]/60 rounded-4xl w-full top-0 flex items-center pl-6 font-bold -z-10'>Une augmentation continue des coûts depuis plusieurs décennies</div>
                    <div className='space-y-3 order-2 md:order-1 mt-5 md:mt-0'>
                        <p>Depuis <span className='text-[#16553C] font-bold'>1978</span>, nous avons constaté que les coûts des obsèques</p>
                        <p>ont augmenté tous les <span className='text-[#16553C] font-bold'>10 ans</span>, avec une moyenne de <span className='text-[#16553C] font-bold'>+6,4 %</span>. </p>
                        <p>Si cette tendance se poursuit, <br /> en 2038, les coûts des obsèques pourraient atteindre :</p>
                    </div>
                    <div className='flex justify-center md:justify-end order-1 md:order-2'>
                         <Image src={"/up.webp"} alt='btn' width={200} height={150} className='w-50 scale-110 rounded-4xl h-full self-end'/>
                    </div>
                </nav>

                <nav className='h-auto md:h-40 bg-[#EEEDED]/70 rounded-4xl grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 w-full px-5 md:px-15 xl:px-32'>
                   <div className='flex flex-col items-center gap-1 border-r-0 md:border-r border-b-2 md:border-b-0 border-neutral-500/50 pr-4 pb-4 md:pb-0'>
                        <h1 className='font-extrabold text-[#16553C] text-2xl md:text-4xl xl:text-6xl'>12.500 €</h1>
                        <p className='font-bold text-xl md:text-3xl'>en moyenne</p>
                   </div>
                   <div className='flex flex-col items-center gap-1'>
                      <p className='font-bold text-xl md:text-3xl'>Jusqu’à </p>
                      <h1 className='font-extrabold text-[#16553C] text-2xl md:text-4xl xl:text-6xl'>19.800 € </h1>
                      <p className='font-bold text-xl md:text-2xl'>selon les prestations</p>
                   </div>
                </nav>
                <Link href={"/contact"} className='hover w-65 h-14 rounded-full text-white font-extrabold bg-[#16553C] relative bottom-0 md:bottom-5 flex justify-center items-center'>Vérifier mon éligibilité</Link>
                
                <h3 className='font-bold italic'>Sans engagement • Informations claires</h3>

            </section>
            
    </>
  )
}

export default page