import Image from 'next/image'
import React from 'react'

const Review = ({pic,title,desc}) => {
  return (
    <div className='w-[95%] md:w-[90%] h-75 bg-white rounded-[50px] p-6'>
        <div className='h-auto w-full grid grid-cols-2 justify-center items-center'>
            <div className='flex items-center gap-2'>
                <Image src={pic} alt='client' height={60} width={100} />
                <p className='font-extrabold text-2xl underline text-[#16553C]'>{title}</p>
            </div>
                <div className='w-full flex justify-end'>
                    <Image src={"/stars.png"} className='' alt='stars' height={50} width={130} />
                </div>
            </div>
            <div className='pt-5 font-bold'>
                <p>
                    {desc}
                </p>
         </div>
    </div>
  )
}

export default Review