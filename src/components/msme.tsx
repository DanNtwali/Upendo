import React from 'react'
import Image from 'next/image'
import MSME from '../assets/images/msme.png'
import MSME1 from '../assets/images/msme1.png'
import Link from 'next/link'


function Msme() {
  return (
    <section className=" h-full items-center bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
        <h2 className="text-blue-600 flex font-extrabold flex-col text-center text-4xl ">MSME Support Ecosystem</h2>
        <div className=" grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-2 xl:gap-0 lg:py-4 lg:grid-cols-12">
            <div className=" hidden lg:mt-0 lg:col-span-5 lg:flex">
                <div>
                <Image
                src={MSME}
                width={700}
                height={100}
                alt="mockup"/>
                <div className="mt-20">
                <p className="text-red-800 mt-10 text-2xl font-['Helvetica'] -rotate-45 font-bold ">Turning Passion Into Impact</p>
                </div>
                </div>
            </div>                
            <div className="mr-auto place-self-center lg:col-span-7 text-white pl-8">
                <div className="flex flex-row w-full justify-between mt-2">
                <div>
                <div className="flex flex-row">
                    <span className="text-slate-600 text-xl font-bold leading-tight mt-1 ">98%</span>
                </div>
                <p className="text-white text-xs font-bold leading-[18px]">Rwanda Economy Consists of MSME’s</p>
                </div>
                <div>
                <div className="flex flex-row">
                    <span className="text-slate-600 text-xl font-bold leading-tight mt-1 ">41%</span>
                </div>
                <p className="text-white text-xs font-bold leading-[18px] mr-8">MSME’s Contribution to Jobs in Private Sector</p>
                </div>
                </div>
                <div className="flex flex-row w-full justify-between mt-2">
                <div>
                <div className="flex flex-row">
                    <span className="text-slate-600 text-xl font-bold leading-tight mt-1 ">33%</span>
                </div>
                <p className="text-white text-xs font-bold leading-[18px]">MSME’s Contribution to National GDP & Fiscus</p>
                </div>
                <div>
                <div className="flex flex-row">
                    <span className="text-slate-600 text-xl font-bold leading-tight mt-1 ">40%</span>
                </div>
                <p className="text-white text-xs font-bold leading-[18px]">pendo Tech Membership Fees Invested into MSME’s</p>
                </div>
                </div>
                
                <Image
                src={MSME1}
                width={700}
                height={100}
                alt="mockup"
                className='mt-6'/>
            </div>
        </div>
        <p className='mt-10 text-white text-center text-3xl' >Click <Link href="https://www.google.com" className='text-blue-400'>Here</Link> to download the Value Proposition document</p>

    </section>
  )
}

export default Msme