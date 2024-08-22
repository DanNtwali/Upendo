'use client'
import React, { useState } from 'react'

function Solution({imagesrc, title, description, description2}:any) {
const [fulldesc, setFulldesc] = useState(false)
  return (
    <div
  className="block rounded-lg bg-white shadow-secondary-1 w-1/3 shadow-md">
  <a href="#!">
    <img
      className="rounded-t-lg"
      src={imagesrc}
      alt={title} />
  </a>
  <div className="p-6 text-surface">
    <h5 className="mb-2 text-xl font-medium text-gray-600 leading-tight">{title}</h5>
    <p className="mb-4 text-gray-400">
      {description}
      {fulldesc?" "+description2:''}
    </p>
    <button
      type="button"
      className="inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
      data-twe-ripple-init
      onClick={()=>setFulldesc(!fulldesc)}
      data-twe-ripple-color="light">
      {fulldesc?"See less":"See more"}
    </button>
  </div>
</div>
  )
}

export default Solution