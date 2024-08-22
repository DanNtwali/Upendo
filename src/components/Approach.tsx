import React from 'react'
import Image from 'next/image'
import Vision from '../assets/images/vision.png'
import Mission from '../assets/images/mission.png'

function Approach() {
  return (
    <section className=" h-full items-center bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
        <h2 className='text-blue-600 flex font-extrabold flex-col text-center text-4xl'>Our Vision</h2>
        <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-2 xl:gap-0 lg:py-4 lg:grid-cols-12">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
                src={Vision}
                width={500}
                height={100}
                alt="mockup"/>
            </div>                
            <div className="mr-auto place-self-center lg:col-span-7 text-white pl-8">
                Our vision is an empowered Africa where innovative entrepreneurs and micro, small and medium enterprises have seamless access to cutting-edge technology solutions, comprehensive business guidance, skills development opportunities, and flexible funding options.
                <br /><br />
                We envision an ecosystem that fosters sustainable growth, enabling African founders to scale their ventures into globally influential and competitive enterprises.
                <br /><br />
                Through our integrated solutions, we are fostering an empowered entrepreneurial ecosystem that unlocks Africa's boundless potential, driving economic growth, creating opportunities, and shaping a prosperous future led by homegrown innovation and expertise, one happy customer at a time.
            </div>
        </div>
        <h2 className='text-blue-600 flex font-extrabold flex-col text-center text-4xl'>Our Mission</h2>
        <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-2 xl:gap-0 lg:py-4 lg:grid-cols-12">                
            <div className="mr-auto place-self-center lg:col-span-7 text-white pl-8">
                Our mission is to catalyze the growth and global success of African entrepreneurs and businesses. 
                <br /><br />
                We provide an integrated ecosystem of cutting-edge technology solutions, strategic guidance, skills training, and smart capital investments that empower micro, small and medium enterprises (MSMEs) and technology startups across the continent.
                <br /><br />
                Through our holistic approach spanning Technology, Techniques, Tools, and Transactions, we equip African founders with the innovative resources, industry expertise, and funding opportunities required to build sustainable, scalable ventures that drive economic impact and compete on the global stage.
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
                src={Mission}
                width={500}
                height={100}
                alt="mockup"/>
            </div>
        </div>
    </section>
  )
}

export default Approach