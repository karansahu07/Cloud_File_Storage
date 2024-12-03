import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const password = watch("password");


  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("https://cloudappbackend.onrender.com/api/auth/register", data);
      console.log("Registration successful: ", response.data);
      navigate("/confirmotp", { state: { email: data.email } });
    } catch (error) {
      console.error("Registration error: ", error.response?.data || error.message);
      
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6 p-6 sm:p-10 justify-center">
        <h1 className="text-black font-medium text-2xl sm:text-3xl">Get Started Now</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Role Dropdown Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="role" className="text-sm">Role</label>
            <select
              {...register("role", {
                required: "Role is required",
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col font-medium relative">
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          {/* Mobile Number Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="mobile" className="text-sm">Mobile Number</label>
            <input
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Mobile number must be exactly 10 digits",
                },
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Enter your mobile number"
            />
            {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile.message}</p>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="password" className="text-sm">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Password cannot exceed 20 characters",
                },
                pattern: {
                  value: /(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  message: "Password must contain at least one number and one special character",
                },
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                validate: (value) => value === password || "Passwords do not match",
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="border-gray-300 rounded-sm"
              {...register("terms", { required: "You must accept the terms and conditions" })}
            />
            <label htmlFor="terms" className="text-xs">
              I agree to <span className="underline">terms and policy</span>
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="p-3 font-bold text-white bg-green-700 border border-green-700 text-sm rounded-lg"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center mt-4">
            <div className="border-t border-gray-200 flex-grow"></div>
            <h2 className="px-2 text-xs font-medium">Or</h2>
            <div className="border-t border-gray-200 flex-grow"></div>
          </div>

          {/* Google Sign-In */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="flex items-center gap-2 rounded-lg border p-2 sm:px-4 border-gray-300 text-sm font-medium text-black cursor-pointer">
              <FcGoogle className="text-2xl" /> Sign with Google
            </div>
          </div>

          {/* Link to Login */}
          <div className="flex justify-center mt-6">
            <p className="text-sm">
              Have an account?{" "}
              <Link to="/login">
                <span className="text-blue-600">Sign in</span>
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block w-full h-[50vh] lg:h-auto">
        <img
          src="/images/authImg.jpeg"
          className="w-full h-full object-cover rounded-s-lg"
          alt="authimg"
        />
      </div>
    </div>
  );
};

export default Register;
