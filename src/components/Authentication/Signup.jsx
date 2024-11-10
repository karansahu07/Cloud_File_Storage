import React from 'react'
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    return (
        <div className='w-full grid grid-cols-2   '>
            <div className=" w-1/2 mx-auto flex flex-col gap-12  justify-center ">
                <h1 className='text-black font-medium text-[32px] '>Get Started Now</h1>
                <form className='flex flex-col gap-5' >
                    <div className='flex flex-col  font-medium'>
                        <label htmlFor='username' className='text-sm '>Name</label>
                        <input type="text" name="username" id="username" className="border-[1px] border-[#D9D9D9] rounded-[10px] p-[10px] text-[10px] text-[#D9D9D9]" placeholder='Enter your username' />
                    </div>
                    <div className="flex flex-col  font-medium">
                        <label htmlFor='email' className='text-sm '>Email </label>
                        <input type="email" name="email" id="email" className="border-[1px]  border-[#D9D9D9] rounded-[10px] p-[10px]  text-[10px]  " placeholder='Enter your email' />
                    </div>
                    <div className="flex flex-col  font-medium ">
                        <label htmlFor='password' className='text-sm' name="password">Password</label>
                        <input type="password" id="password" className="border-[1px]  border-[#D9D9D9] rounded-[10px] p-[10px] text-[10px] " placeholder='Enter your password' />
                    </div>
                    <div className='flex gap-1  '>
                        <input type='checkbox' id="terms" name="terms" className=' border-black border-[1px] rounded-sm' />
                        <label htmlFor="terms" className='text-[9px]'>I agree to <span className='underline'>terms and policy</span></label>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <button className=' p-[10px] font-bold text-white bg-[#3A5B22] border-1 border-[#3A5B22] text-sm rounded-[10px]'>Sign Up</button>
                        <div className='flex justify-center items-center mt-4'>
                            <div className='border-[2px] border-[#F5F5F5] flex-grow'></div>
                            <h2 className=' pr-[3px] pl-[3px] text-[9px] font-medium'>Or</h2>
                            <div className='border-[2px] border-[#F5F5F5] flex-grow'></div>

                        </div>
                        <div className='flex flex-col  lg:flex-row gap-4 '>
                            <div className='flex gap-1 items-center rounded-[10px] border-[1px] p-1 sm:pl-5 sm:pr-5 sm:pt-1 sm:pb-1 border-[#D9D9D9] text-[12px] font-medium text-black'><FcGoogle className=' text-2xl ' />Sign in with Google</div>
                            <div className='flex gap-1 items-center rounded-[10px] border-[1px] p-1 sm:pl-5 sm:pr-5 sm:pt-1 sm:pb-1 border-[#D9D9D9] text-[12px] font-medium text-black'><FaApple className='text-2xl' />Sign in with Apple</div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6 '>
                        <h2 className='font-medium text-sm'>Have an account? <a href='/login'><span className='text-[#0F3DDE]
'>Sign in</span></a></h2>
                    </div>
                </form>
            </div>
            <div className='h-[1042px] w-[781.5px]  '>
                <img src="/images/authImg.jpeg" className='rounded-s-[45px]  object-cover' alt="authimg" />
            </div>
        </div>


    )
}

export default Signup
