import React from 'react'
import pic1 from "@/public/pic1.png"
import pic2 from "@/public/pic22.png"
import Review from './Review'

const Reviews = () => {
  return (
    <section className='h-auto md:h-200 shape2 w-full flex justify-center items-center'>
        <div className='h-full md:h-[70%] w-[95%] md:w-[85%]'>
          <div className='space-y-2'>
            <h2 className='text-center font-extrabold text-4xl'>Ce que nos clients disent de nous</h2>
            <p className='text-center'>Nous sommes fiers de la confiance que nos clients nous accordent.</p>
          </div>
          <nav className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-11'>
            <Review title={"Martin R."} pic={pic1} desc={" « Grâce à notre courtier Monsieur Costa, qui nous a conseillé et recommandé cette compagnie, nous avons pu nous concentrer sur le deuil sans nous inquiéter des frais. Une véritable bénédiction en ces moments difficiles. »"}/>
            <Review title={"Sophie L."} pic={pic2} desc={" « Leur équipe a été incroyablement empathique et professionnelle. Ils ont pris soin de tout ce qui est attrait au décès depuis le début de notre appel téléphonique, comme stipulé exactement dans les termes des conditions du contrat. »"}/>
          </nav>
        </div>
    </section>
  )
}

export default Reviews