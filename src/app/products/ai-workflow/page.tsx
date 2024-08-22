import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function AiWorkflow() {
  return (
  <>
  <Navbar />
    <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video className="min-w-full min-h-full absolute object-cover" autoPlay muted loop>
                    <source src = "https://upendotech.com/wp-content/uploads/2024/01/657abec49d7ecad9cb2e4d6a_1b4c130e-50db-4dbc-bdca-cfdec440fbaa-transcode.webm" type="video/webm">
                        
                    </source>
                </video>
        </div>
        <div className="video-content space-y-2 z-10 bg-gray-400 py-4 mx-32 px-4 rounded bg-opacity-50">
            <h1 className="font-bold text-violet-500 text-6xl">AI Workflow</h1>
            <h3 className="font-semibold text-gray-600 text-xl ">At the core of our offering is the revolutionary AI Workflow Automation platform. Imagine providing a “private banker” experience to every customer, regardless of scale. With AI Workflow Automation, you define the job description and actions, enable communication channels like WhatsApp, Email, and SMS, and our AI assistants are ready to serve. This powerful platform allows fast iteration, real-time collaboration, and integration with over 200 systems. See what the AI sees on the collaborative canvas as it leverages large language models, task integrations, fields, notifications and context flows to deliver seamless experiences.</h3>
            <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">Book a Demo{" >"} </button>
        </div>
    </section>
    <div
    className="px-7 lg:px-32 mx-auto bg-white flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14">
    <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <h1
            className="text-4xl leading-[1.2] md:max-w-xl md:mx-auto text-gray-500 md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold">
                Automate & optimize
        </h1>
        <h1 
                    className="text-2xl leading-[1.2] md:max-w-xl md:mx-auto text-gray-500 md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold">
        Intuitive AI-business tools</h1>
        <p className="text-sm md:max-w-xl md:mx-auto text-gray-400 lg:mx-0 lg:max-w-full md:text-center lg:text-left">
        With a user-friendly interface, visually construct and perform processes seamlessly with the help of AI.
        </p>
    </div>
    <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
        <img className="rounded-3xl w-full"
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8c2VydmljZXxlbnwwfDB8fHwxNzEyMjIyNjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt=""></img>
    </div>
</div>
<div
    className="px-7 lg:px-32 mx-auto bg-white flex flex-col gap-y-10 bg-gray-200 items-left gap-x-10 justify-left py-10 lg:py-14">
    <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <h1
            className="text-4xl leading-[1.2] md:max-w-xl md:mx-auto text-gray-500 md:text-left lg:text-left lg:mx-0 lg:max-w-full font-semibold">
            Integrate & collaborate
        </h1>
        <h1 
                    className="text-2xl leading-[1.2] md:max-w-xl md:mx-auto text-gray-500 md:text-left lg:text-left lg:mx-0 lg:max-w-full font-semibold">
        Imagine processes and people as one.
        </h1>
        <p className="text-sm md:max-w-xl md:mx-auto text-gray-400 lg:mx-0 lg:max-w-full md:text-left lg:text-left">
        We understand the importance of keeping your existing processes in place, therefore we’ve built Stubber with this in mind, integrating directly into your suite of tools.
        </p>
    </div>
    <div className="grid grid-cols-4 gap-4">

    <div className='flex'>
        <div className='bg-blue-400 rounded p-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
        </div>
        <div className='px-4'>
            <p className="text-gray-600 text-md text-semibold">Whatsapp</p>
            <ul>
                <li className='text-gray-400'>- Bulk AI communication.</li>
            </ul>
        </div>
    </div>

    <div className='flex'>
        <div className='bg-blue-400 rounded p-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
            </svg>
        </div>
        <div className='px-4'>
            <p className="text-gray-600 text-md text-semibold">Asterix</p>
            <ul>
                <li className='text-gray-400'>-Click to dial anyone.</li>
                <li className='text-gray-400'>- Save call recordings</li>
            </ul>
        </div>
    </div>

    <div className='flex'>
        <div className='bg-blue-400 rounded p-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
            </svg>
        </div>
        <div className='px-4'>
            <p className="text-gray-600 text-md text-semibold">Asterix</p>
            <ul>
                <li className='text-gray-400'>-Click to dial anyone.</li>
                <li className='text-gray-400'>- Save call recordings</li>
            </ul>
        </div>
    </div>

    </div>
</div>
    <Footer />
</>

  )
}

export default AiWorkflow