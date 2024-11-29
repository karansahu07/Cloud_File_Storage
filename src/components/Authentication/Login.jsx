import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data: ", data);

    
    const isLoginSuccessful = true; 
    if (isLoginSuccessful) {
      navigate("/home"); // Navigate to the Home page
    } else {
      console.error("Login failed"); 
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6 p-6 sm:p-10 justify-center">
        <div className="flex flex-col gap-2 font-medium text-black">
          <h1 className="text-2xl sm:text-3xl">Welcome Back</h1>
          <h2 className="text-base">Enter your credentials to access your account</h2>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col font-medium">
            <div className="flex flex-col sm:flex-row justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <span className="text-xs text-blue-700">Forgot password?</span>
            </div>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="border-gray-300 rounded-sm"
            />
            <label htmlFor="remember" className="text-xs">
              Remember for 30 days
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-6">
            <button
              type="submit"
              className="p-3 font-bold text-white bg-green-700 border border-green-700 text-sm rounded-lg"
            >
              Sign In
            </button>
            <div className="flex items-center mt-4">
              <div className="border-t border-gray-200 flex-grow"></div>
              <h2 className="px-2 text-xs font-medium">Or</h2>
              <div className="border-t border-gray-200 flex-grow"></div>
            </div>

            {/* Google Sign-In */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 rounded-lg border p-2 sm:px-4 border-gray-300 text-sm font-medium text-black">
                <FcGoogle className="text-2xl" />Sign in with Google
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="flex justify-center mt-6">
            <h2 className="font-medium text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register">
                <span className="text-blue-600">Sign Up</span>
              </Link>
            </h2>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block w-full h-[50vh] lg:h-auto">
        <img
          src="/images/authImg.jpeg"
          className="w-full h-full object-cover rounded-lg"
          alt="authimg"
        />
      </div>
    </div>
  );
};

export default Login;
