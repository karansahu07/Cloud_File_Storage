import React from "react";
import { useForm } from "react-hook-form";

const Confirmotp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("OTP Data: ", data);
  };

  const handleResend = () => {
    console.log("Resend OTP triggered");

  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Form Section */}
      <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6 p-6 sm:p-10 justify-center">
        <div className="flex flex-col gap-2 font-medium text-black">
          <h1 className="text-2xl sm:text-3xl">Verify OTP</h1>
          <h2 className="text-base">
            Enter the OTP sent to your registered email or phone number
          </h2>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* OTP Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="otp" className="text-sm">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              {...register("otp", {
                required: "OTP is required",
                minLength: { value: 6, message: "OTP must be 6 digits" },
                maxLength: { value: 6, message: "OTP must be 6 digits" },
                pattern: { value: /^[0-9]{6}$/, message: "Invalid OTP format" },
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Enter 6-digit OTP"
            />
            {errors.otp && <p className="text-red-500 text-xs">{errors.otp.message}</p>}
          </div>

          {/* Resend Button */}
          <button
            type="button"
            onClick={handleResend}
            className="text-blue-600 text-sm font-medium underline"
          >
            Resend OTP
          </button>

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

export default Confirmotp;
