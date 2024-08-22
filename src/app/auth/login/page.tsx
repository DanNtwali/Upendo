'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
 
function Home() {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('');
  };
  return (
    <main className="flex flex-row h-screen w-full bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
      <div className='w-full'>
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center mt-10">
          <h1 className="text-white text-3xl sm:text-lg lg:text-3xl xl:text-3xl text-center mt-20">Welcome Back</h1>
          <div className='mt-14 ml-20 w-full min-w-[400px]'>
            <div className="flex flex-col gap-6 ml-20 pl-20 w-2/3">
              <div className="relative h-11">
                  <input placeholder="" required
                    type="email"
                    className="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white" />
                  <label
                    className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                    Email
                  </label>
              </div>
              <div className="relative h-11 w-full">
                <input placeholder="" required
                    type="password"
                    className="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-white" />
                  <label
                    className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                    Password
                  </label>
              </div>
            </div>
          </div> 
          <div className="text-center mt-4">
              <button 
               type='submit'
               className="bg-black hover:bg-blur-700 text-white font-semibold mt-8 min-w-[100px] py-2 rounded-xl">
                 SIGN IN
              </button>
          </div>
          <div className="text-center mt-4">
            <Link href="/auth/forgot/reset" className="text-center text-red-500 font-extrabold leading-tight">Forgot Password?</Link>
            <p className="mt-4 text-white">Don't have an account? <Link href="/auth/signup" className="text-center text-white font-extrabold leading-tight">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Home