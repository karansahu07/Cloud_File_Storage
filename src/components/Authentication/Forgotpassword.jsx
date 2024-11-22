import React from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi"; 

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Forgot Password Data: ", data);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Form Section */}
      <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6 p-6 sm:p-10 justify-center">
        <div className="flex flex-col gap-2 font-medium text-black">
          <h1 className="text-2xl sm:text-3xl">Forgot Password</h1>
          <h2 className="text-base">Enter your email to reset your password</h2>
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
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-6">
            <button
              type="submit"
              className="p-3 font-bold text-white bg-green-700 border border-green-700 text-sm rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Back to Login Link */}
        <div className="flex justify-center mt-6">
          <a href="/login" className="flex items-center gap-2 text-blue-600 text-sm font-medium">
            <FiArrowLeft /> Back to Login
          </a>
        </div>
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

export default ForgotPassword;
