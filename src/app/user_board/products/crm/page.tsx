import Crms from '@/components/Crms'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar_user'
import React from 'react'

function Crm() {
    const crms = [
        {
            title: 'Pipelines',
            description: 'Our CRM helps you keep track of your leads, deals and clients by categorizing them into different pipelines. This makes it easy to see which salesperson is responsible for each lead, or what product category each deal falls into.',
            imagesrc: "https://upendotech.com/wp-content/uploads/2023/11/crm-pipelines-1024x559.png"
        },
        {
            title: 'Leads',
            description: 'Our CRM is an easy-to-use lead capture tool that helps you qualify and track your leads. It’s perfect for sales teams who want to be able to keep track of their pipelines, leads status and make sure they’re always moving forward. It makes it easy to capture leads from any source, including your website, events, trade shows etc. It also, automatically builds a database of your leads’ information, including contact details, notes, and communication history. This way, you can always have the most up-to-date information on hand when you need it. Get started today and start building your sales pipeline!',
            imagesrc: "https://upendotech.com/wp-content/uploads/2023/11/crm-leads-1024x559.png"
        },
        {
            title: 'Keep track of all related activities',
            description: 'Don’t let another lead fall through the cracks! Our CRM helps you log every phone call, email and event or interaction for your lead to ensure you know exactly where you left off. This allows you to provide better customer service and follow up more effectively.',
            imagesrc: "https://upendotech.com/wp-content/uploads/2023/11/crm-keep-track-of-all-related-activities-1024x559.png"
        },
        {
            title: 'Record all qualifying information',
            description: 'Our CRM helps you keep track of key information like contact info, lead values, quotes, products, source, status, dates, renewal anniversaries, and more. This way, you can focus on what’s important: building relationships and closing deals.',
            imagesrc: "https://upendotech.com/wp-content/uploads/2023/11/crm-record-all-qualifying-information-1024x559.png"
        },
    ]
  return (
  <>
  <Navbar />
    <div className="relative px-6 lg:px-8 bg-white">
    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-center sm:text-6xl">
                    CRM
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Our CRM system is the perfect tool for sales professionals who need to keep track of their deals and leads.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a href="#"
                        className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                        Book a demo
                        <span aria-hidden="true" className="text-indigo-200">→</span>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<div className="bg-gray-100">
    <p className="text-center animate:marquee text-black">A Customer Relationship Management platform that organises your Sales Pipeline so that you can close more deals!</p>
</div>
<div className="px-32 py-8 bg-white">
    {crms.map((crm, index) => (
        <Crms 
            key={index}
            title={crm.title}
            description={crm.description}
            imagesrc={crm.imagesrc}
        />
    ))}
</div>
<Footer />
</>
  )
}

export default Crm