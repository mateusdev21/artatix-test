"use client";
import Image from "next/image";
import { mdiEyeOutline, mdiEyeOffOutline, mdiLogin } from "@mdi/js";
import Icon from "@mdi/react";
import { useState, useEffect } from "react";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");

  useEffect(() => {
    setInputType(isPasswordVisible ? "text" : "password");
  }, [isPasswordVisible]);

  return (
    <>
      <h2 className="text-3xl text-black font-semibold mb-4">Welcome back!</h2>
      <p className="text-gray-600 text-md mb-4">
        Sign in to access your dashboard, settings, and projects.
      </p>
      <form action="POST" className="my-0">
        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="username"
              id="username"
              className="w-full rounded-md px-3 py-2 text-sm text-black border border-gray-400 focus:outline-2 focus:outline-[#3259E8]"
            />
          </div>
        </div>
        <div className="sm:col-span-3 mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <div className="mt-2 relative">
            <input
              type={inputType}
              name="password"
              id="password"
              className="w-full rounded-md px-3 py-2 text-sm text-gray-900 border border-gray-400 focus:outline-2 focus:outline-[#3259E8]"
            />
            <Icon
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              path={isPasswordVisible ? mdiEyeOffOutline : mdiEyeOutline}
              size={1}
              className="absolute text-gray-900 right-4 top-2 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-between py-4">
          <div className="order-1 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-600 text-md">
              Keep me signed in
            </label>
          </div>
          <a href="" className="order-2 text-[#3259E8] text-md">
            Forgot password?
          </a>
        </div>
        <div className="py-2">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#3259E8] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:opacity-75"
          >
            <Icon
              path={mdiLogin}
              size={1}
              className="inline text-white mr-2 hover:cursor-pointer"
            />
            <span>Sign in</span>
          </button>
        </div>
      </form>
      <button
        type="submit"
        className="mb-8 block w-full rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs border border-gray-400 hover:border-[#3259E8]"
      >
        <Image
          className="inline mr-2"
          src="/google-icon.svg"
          alt="Next.js logo"
          width={14}
          height={14}
          priority
        />
        <span>Sign in with Google</span>
      </button>
      <div className="flex place-content-center text-gray-600 text-md">
        Don't have an account?
        <a href="/auth/register" className="text-[#3259E8] text-md align-center ml-1">
          Sign Up
        </a>
      </div>
    </>
  );
}
