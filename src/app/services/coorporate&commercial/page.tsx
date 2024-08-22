import React from 'react'
import Image from 'next/image'
import Vision from '../../../assets/images/vision.png'
import Mission from '../assets/images/mission.png'

function Approach() {
    return (
        <div className="h-full items-center bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
            <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-2 xl:gap-0 lg:py-4 lg:grid-cols-12">             
                <h2 className="mr-auto place-self-center text-4xl ml-20 lg:col-span-7 text-blue-600 flex font-extrabold pl-8">Our Services</h2>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Image
                    src={Vision}
                    width={100}
                    height={20}
                    alt="mockup"/>
                </div>
            </div>
            <div>
                <h3 className='text-2xl pl-10 pr-10 mt-6 text-blue-600 font-bold'>Trust & Corporate Service Providers</h3>
                <p className='text-white p-10 mt-2'>Our trust and corporate services offer comprehensive solutions for individuals and businesses seeking to establish and manage trusts, foundations, and corporate entities. We provide expert guidance on structuring, administration, and compliance, ensuring your assets and interests are safeguarded and optimized according to your unique goals and requirements.</p>
            </div>
        </div> 
  )
}

export default Approach