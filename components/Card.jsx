import Image from 'next/image'
import React from 'react'


const Card = ({title,des,pic}) => {
  return (
     <nav className='bg-[#E6F1EC] rounded-4xl relative w-100 md:w-90 lg:w-100  h-62.5 px-5 text-center flex flex-col items-center justify-center gap-3'>
        <Image src={pic} alt='check' height={50} width={50} className='absolute -top-4 left-1/2 -translate-x-1/2'/> 
        <h1 className='text-[#063826] font-extrabold text-[22px]'>{title}</h1>
        <p>{des}</p>
    </nav>
  )
}

export default Card