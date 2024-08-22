import React from 'react'

function GettingStarted() {
  return (
    <section className="flex  flex-col py-16 bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
      <div>
        <h1 className="mb-4 text-4xl px-32 font-extrabold tracking-tight leading-none text-blue-600 md:text-4xl lg:text-4xl text-center py-4">Getting Started</h1>
        <p className="mb-8 text-lg px-32 font-normal text-white lg:text-xl sm:px-16 xl:px-48  text-center">We pride ourselves on our customer service and support and no matter how big your company is, we are here to assist you in getting the most out of our software in the most efficient and pleasant way.</p>

        <div className="flex flex-row px-32 gap-4">

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-7 h-7 text-blue-500 mb-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"/>
                </svg>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Call Us</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">Book a session with us so that we can understand your requirements and get you set up quickly.</p>
                
            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-7 h-7 text-blue-500 mb-3" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                </svg>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">We will assist</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">We will not leave you on your own, our dedicated helpful team will be with you all the way on your journey of getting familiar with UpendoDesk and getting the most out of the platform.</p>
                
            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-7 h-7 text-blue-500 mb-3" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">That's it!</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">Once you are happy with the setup, get your team working and remember that we are still always an email or phone call away to assist you with anything you need.</p>
                
            </div>

        </div>
      </div>
    </section>
  )
}

export default GettingStarted