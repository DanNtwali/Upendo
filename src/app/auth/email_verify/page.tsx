'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
 
function Signup() {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('');
  };
  return (
    <main className="flex flex-row h-screen w-full bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
      <div className='w-full'>
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center mt-10">
            <h1 className="text-white text-3xl sm:text-lg lg:text-3xl xl:text-3xl font-bold text-center mt-20">Email Verification</h1>
            <p className="mt-10 text-center font-light text-white">We have sent you an email with a verification code<br/> on you@gmail.com please type the 6 digit code here</p>
            <div className="flex justify-center flex-row px-8 w-full pt-8 space-x-4 rtl:space-x-reverse">
                <div className='item-center'>
                    <label htmlFor="code-1" className="sr-only">First code</label>
                    <input type="text" maxLength={1} data-focus-input-init data-focus-input-next="code-2" id="code-1" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-white bg-transparent border border-[2px] border-primary rounded-lg focus:ring-primary focus:border-[4px]" required />
                </div>
                <div>
                    <label htmlFor="code-2" className="sr-only">Second code</label>
                    <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-white bg-transparent border border-[2px] border-primary rounded-lg focus:ring-primary focus:border-[4px]" required />
                </div>
                <div>
                    <label htmlFor="code-3" className="sr-only">Third code</label>
                    <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3" className="block w-9 h-9 py-3 text-sm font-extrabold text-center bg-transparent text-white border border-[2px] border-primary rounded-lg focus:ring-primary focus:border-[4px]" required />
                </div>
                <div>
                    <label htmlFor="code-4" className="sr-only">Fourth code</label>
                    <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4" className="block w-9 h-9 py-3 text-sm font-extrabold text-center bg-transparent text-white border border-[2px] border-primary rounded-lg focus:ring-primary focus:border-[4px]" required />
                </div>
                <div>
                    <label htmlFor="code-5" className="sr-only">Fifth code</label>
                    <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-4" id="code-5" className="block w-9 h-9 py-3 text-sm font-extrabold text-center bg-transparent text-white border border-[2px] border-primary rounded-lg focus:ring-primary focus:border-[4px]" required />
                </div>
            </div>
            <div className='flex flex-row px-12 m-8 justify-center item-center'>
            <div className="text-center mt-4">
                <button 
                 type='submit'
                 className="bg-primary hover:bg-blur-700 text-secondary font-semibold mt-8 min-w-[100px] py-2 px-4 rounded-xl">
                   Resend Code
                </button>
            </div>
            <div className="text-center ml-20 mt-4">
                <button 
                 type='submit'
                 className="bg-black hover:bg-blur-700 text-white font-semibold mt-8 min-w-[100px] py-2 rounded-xl">
                   Verify
                </button>
            </div>
            </div>
        </form>
      </div>
    </main>
  )
}

export default Signup