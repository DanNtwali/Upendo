import Link from 'next/link'
import React from 'react'

function Product({title, subtitle, description, imagesrc, icons, link}: any) {
  return (
    <div className=' px-32 py-6'>
        <h4 className="text-violet-400 text-xl">{title}</h4>
        <div className="flex flex-row">
            <div className='w-1/2'>
                <h2 className="text-orange-400 text-4xl">{subtitle}</h2>
                <p className="text-white">{description}</p>
            </div>
            <div className='w-1/2 flex flex-col items-center'>
                <img src={imagesrc} alt={title} />
                <div className='items-center'>
                    <Link href={link} className='bg-blue-400 px-4 py-2 text-white'>Learn more</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product