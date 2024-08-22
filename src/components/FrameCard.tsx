import React from 'react'

function FrameCard({title, description, imagesrc}:any) {
  return (
    <div className="flex w-90 mb-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
    <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imagesrc} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
    </div>
</div>
  )
}

export default FrameCard