"use client";

import Link from "next/link";
import { useLoginForm } from "@/hooks/useLoginForm";

export default function Login() {
  const { submitHandler } = useLoginForm();

  return (
    <div className="relative flex justify-center items-center bg-gray-300 min-h-screen px-2">
      <div className="absolute bg-orange-300 rounded-full w-40 h-40 -top-6 right-0 filter blur-2xl opacity-30"></div>
      <div className="absolute bg-purple-400 rounded-full w-32 h-32 top-10 -left-8 filter blur-2xl opacity-40"></div>
      <div className="absolute bg-red-500 rounded-full md:w-32 w-40 md:h-32 h-40 bottom-0 filter blur-2xl opacity-30"></div>

      <div className="flex flex-col w-full max-w-[400px] bg-gray-200 border-2 border-white rounded-lg backdrop-blur-md opacity-50 my-12 px-4 py-6 z-[99999]">
        <div className="flex flex-col text-black py-4 items-center">
          <h2 className="font-catamaran font-[800] text-2xl">Hi again,</h2>
          <p className="font-poppins w-[60%] text-center font-medium text-lg">
            Welcome back you've been missed!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-evenly">
          <form onSubmit={submitHandler}>
            <div className="flex-1 flex flex-col gap-3 justify-center">
              <div className="py-2">
                <input
                  name="username"
                  placeholder="Username"
                  className="w-full text-black py-2 px-4 ring-red-200 ring-2 rounded-md backdrop-blur-sm opacity-90 focus:outline-red-400"
                />
              </div>
              <div className="py-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full text-black py-2 px-4 ring-red-200 ring-2 rounded-md backdrop-blur-sm opacity-90 focus:outline-red-400"
                />
              </div>
            </div>
            <div>
              <button className="bg-[#ff0700] py-2 rounded-lg w-full">
                Login
              </button>
            </div>
            <div className="py-4 text-black">
              <p className="text-center">
                Create Account?{" "}
                <Link
                  className="font-semibold text-blue-600"
                  href={"/register"}
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
