import React, { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        role: 'user' 
    });
    const [message, setMessage] = useState(null);
    const [isVerified, setIsVerified] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleEmailVerification = async () => {
        try {
            const response = await axios.post('/Emailverification', { email: formData.email });
            if (response.data.success) {
                setIsVerified(true);
                setMessage({ type: 'success', text: 'Email verified successfully!' });
            } else {
                setIsVerified(false);
                setMessage({ type: 'error', text: 'Email verification failed.' });
            }
        } catch (error) {
            setIsVerified(false);
            setMessage({
                type: 'error',
                text: error.response?.data?.message || 'Email verification failed. Please try again.'
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isVerified) {
            setMessage({ type: 'error', text: 'Please verify your email before signing up.' });
            return;
        }

        try {
            const response = await axios.post('/register', formData);
            console.log(response.data);
            setMessage({ type: 'success', text: 'Signup successful!' });
        } catch (error) {
            setMessage({
                type: 'error',
                text: error.response?.data?.message || 'Signup failed. Please try again.'
            });
        }
    };

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6 p-6 sm:p-10 justify-center">
                <h1 className="text-black font-medium text-2xl sm:text-3xl">Get Started Now</h1>
                
                {message && (
                    <p className={message.type === 'success' ? 'text-green-500' : 'text-red-500'}>
                        {message.text}
                    </p>
                )}

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col font-medium">
                        <label htmlFor="username" className="text-sm">Name</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="flex flex-col font-medium relative">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 pr-24 text-sm placeholder-gray-400 relative"
                            placeholder="Enter your email"
                        />
                        <span
                            onClick={handleEmailVerification}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-xs cursor-pointer underline"
                        >
                            Verify Email
                        </span>
                    </div>
                    <div className="flex flex-col font-medium">
                        <label htmlFor="phone" className="text-sm">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
                            placeholder="Enter your phone number (format: +91XXXXXXXXXX)"
                        />
                    </div>
                    <div className="flex flex-col font-medium">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex flex-col font-medium">
                        <label htmlFor="role" className="text-sm">Role</label>
                        <select
                            name="role"
                            id="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
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
                        <button type="submit" className="p-3 font-bold text-white bg-green-700 border border-green-700 text-sm rounded-lg">Sign Up</button>
                        <div className="flex items-center mt-4">
                            <div className="border-t border-gray-200 flex-grow"></div>
                            <h2 className="px-2 text-xs font-medium">Or</h2>
                            <div className="border-t border-gray-200 flex-grow"></div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center gap-2 rounded-lg border p-2 sm:px-4 border-gray-300 text-sm font-medium text-black">
                                <FcGoogle className="text-2xl" />Sign in with Google
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <h2 className="font-medium text-sm">Have an account? <a href="/login"><span className="text-blue-600">Sign in</span></a></h2>
                    </div>
                </form>
            </div>

            <div className="hidden lg:block w-full h-[50vh] lg:h-auto">
                <img src="/images/authImg.jpeg" className="w-full h-full object-cover rounded-s-lg" alt="authimg" />
            </div>
        </div>
    );
};

export default Signup;
