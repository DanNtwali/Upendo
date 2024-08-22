'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function Signup() {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/auth/email_verify');
  };
  return (
    <main className="flex flex-row w-full bg-cover bg-[url('../assets/images/signup.png')] ">
      <div className=''>
        <form onSubmit={handleSubmit} className="w-full h-screen ml-20 flex flex-col justify-center">
         <h1 className="text-white text-3xl sm:text-lg lg:text-3xl xl:text-3xl text-center">Create Your Account</h1>
         <div className=''>
          <div className="flex flex-row px-8 w-full pt-8 m-8">
           <div className="flex flex-col gap-6 w-full">
             <div className="relative h-11 w-full min-w-[300px]">
               <input placeholder="" required
                 type="name"
                 className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
               <label
                 className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                 First Name
               </label>
             </div>
           </div>
           <div className="flex flex-col gap-6 ml-20 w-full">
             <div className="relative h-11 w-full min-w-[200px]">
               <input placeholder="" required
                 type="name"
                 className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
               <label
                 className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                 Last Name
               </label>
             </div>
           </div>
          </div>
          <div className="flex flex-row px-8 w-full pt-4 m-8">
           <div className="flex flex-col gap-6 w-full">
             <div className="relative h-11 w-full min-w-[400px]">
               <input placeholder=""
                 type="email"
                 className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" required/>
               <label
                 className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                 Email
               </label>
             </div>
           </div>
           <div className="flex flex-col gap-6 ml-20 w-full">
             <div className="relative h-11 w-full min-w-[400px]">
               <input placeholder=""
                 type="number"
                 className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" required/>
               <label
                 className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                 Phone Number
               </label>
             </div>
           </div>
          </div>
          <div className="flex flex-row px-8 w-full pt-4 m-8">
           <div className="flex flex-col gap-6 w-full">
             <div className="relative h-11 w-full min-w-[400px]">
               <input placeholder="" required
                 type="password"
                 className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
               <label
                 className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                 Password
               </label>
             </div>
           </div>
           <div className="flex flex-col gap-6 ml-20 w-full">
             <div className="relative h-11 w-full min-w-[400px]">
               <input placeholder="" required
                 type="password"
                 className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
               <label
                 className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                 Confirm Password
               </label>
             </div>
           </div>
          </div>
         </div> 
          <div className="text-center ml-16 mt-4">
              <button 
               type='submit'
               className="bg-black hover:bg-blur-700 text-white font-semibold min-w-[100px] py-2 rounded-xl">
                 Register
              </button>
          </div>
          <div className="ml-12 text-center mt-4">
            <p className="text-white">By registering you agree to all our <Link href="" className="text-center text-white font-extrabold leading-tight">Privacy Policies</Link></p>
            <p className="mt-2 text-white">Already have an account? <Link href="/auth/login" className="text-center text-white font-extrabold leading-tight">Login</Link></p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Signup