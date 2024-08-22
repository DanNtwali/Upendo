'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
 
function forgot() {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/');
  };
  return (
    <main className="flex flex-row h-screen w-full bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
      <div className='w-full'>
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center mt-10">
            <h1 className="text-white text-3xl sm:text-lg lg:text-3xl xl:text-3xl font-bold text-center mt-20">Forgot Password</h1>
            <p className="mt-10 text-center font-light text-white">Please enter a new password, should be at least 8 character long and a mixture of two of these:<br/> capital letter, small letter, number or symbols.</p>
          <div className="flex flex-row px-8 w-full pt-10 m-8">
           <div className="flex flex-col gap-6 ml-20 pl-20">
             <div className="relative h-11 w-[300px] ml-10">
               <input placeholder="" required
                 type="password"
                 className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
               <label
                 className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                 New Password
               </label>
             </div>
           </div>
           <div className="flex flex-col gap-6 pl-20 ml-20">
             <div className="relative h-11 w-[300px]">
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
            <div className='flex flex-row px-12 m-8 justify-center item-center'>
            <div className="text-center mt-8">
                <button 
                 type='submit'
                 className="bg-black hover:bg-blur-700 text-white font-semibold min-w-[100px] py-2 px-4 rounded-xl">
                   Confirm
                </button>
            </div>
            </div>
        </form>
      </div>
    </main>
  )
}

export default forgot