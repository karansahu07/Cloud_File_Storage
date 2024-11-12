import React from 'react';
// import { FaApple } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Form */}
            <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6 p-6 sm:p-10 justify-center">
                <h1 className="text-black font-medium text-2xl sm:text-3xl">Get Started Now</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col font-medium">
                        <label htmlFor="username" className="text-sm">Name</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="flex flex-col font-medium">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col font-medium">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className="border-gray-300 rounded-sm"
                        />
                        <label htmlFor="terms" className="text-xs">I agree to <span className="underline">terms and policy</span></label>
                    </div>
                    <div className="flex flex-col gap-6">
                        <button className="p-3 font-bold text-white bg-green-700 border border-green-700 text-sm rounded-lg">Sign Up</button>
                        <div className="flex items-center mt-4">
                            <div className="border-t border-gray-200 flex-grow"></div>
                            <h2 className="px-2 text-xs font-medium">Or</h2>
                            <div className="border-t border-gray-200 flex-grow"></div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center gap-2 rounded-lg border p-2 sm:px-4 border-gray-300 text-sm font-medium text-black">
                                <FcGoogle className="text-2xl" />Sign in with Google
                            </div>
                            {/* <div className='flex gap-1 items-center rounded-lg border p-2 sm:px-4 border-gray-300 text-sm font-medium text-black'><FaApple className='text-2xl' />Sign in with Apple</div> */}
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <h2 className="font-medium text-sm">Have an account? <a href="/login"><span className="text-blue-600">Sign in</span></a></h2>
                    </div>
                </form>
            </div>
            {/* Right Column: Image */}
            <div className="hidden lg:block w-full h-[50vh] lg:h-auto">
                <img src="/images/authImg.jpeg" className="w-full h-full object-cover rounded-s-lg" alt="authimg" />
            </div>
        </div>
    )
}

export default Signup;
