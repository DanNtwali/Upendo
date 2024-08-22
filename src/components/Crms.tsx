import React from 'react'

function Crms({title, description, imagesrc}:any) {
  return (
    <div className="flex even:flex-row-reverse">
        <div className='w-1/2'>
            <div className='flex'>
                <div className='bg-blue-400 rounded p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
                    </svg>
                </div>
                <div className='px-4'>
                    <p className="text-gray-600 text-2xl text-bold">{title}</p>
                </div>
            </div>
            <p className="text-gray-300">
            {description}
            </p>
        </div>
        <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
            <img className="rounded-3xl w-full"
                src={imagesrc}
                alt=""></img>
        </div>
    </div>
  )
}

export default Crms