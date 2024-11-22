import React from "react";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Change Password Data: ", data);
    
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Form Section */}
      <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6 p-6 sm:p-10 justify-center">
        <div className="flex flex-col gap-2 font-medium text-black">
          <h1 className="text-2xl sm:text-3xl">Change Password</h1>
          <h2 className="text-base">Update your password securely</h2>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Old Password Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="oldPassword" className="text-sm">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              {...register("oldPassword", { required: "Old password is required" })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Enter old password"
            />
            {errors.oldPassword && (
              <p className="text-red-500 text-xs">{errors.oldPassword.message}</p>
            )}
          </div>

          {/* New Password Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="newPassword" className="text-sm">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              {...register("newPassword", {
                required: "New password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Enter new password"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-xs">{errors.newPassword.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col font-medium">
            <label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("newPassword") || "Passwords do not match",
              })}
              className="border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-400"
              placeholder="Confirm new password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-6">
            <button
              type="submit"
              className="p-3 font-bold text-white bg-green-700 border border-green-700 text-sm rounded-lg"
            >
              Change Password
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

export default ChangePassword;
