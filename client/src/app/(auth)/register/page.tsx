"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Register() {

  const router = useRouter();


  const formSumbmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const body = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await fetch("http://chatiee.dev/api/auth/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res.ok) {
      console.log("Register successfully");
      router.push("/login")
      
    } else {
      console.log("Error try again later.");
    }
  };

  return (
    <div className="relative flex justify-center items-center bg-gray-300 min-h-screen px-2">
      <div className="absolute bg-orange-300 rounded-full w-40 h-40 -top-6 right-0 filter blur-2xl opacity-30"></div>
      <div className="absolute bg-purple-400 rounded-full w-32 h-32 top-10 -left-8 filter blur-2xl opacity-40"></div>
      <div className="absolute bg-red-500 rounded-full md:w-32 w-40 md:h-32 h-40 bottom-0 filter blur-2xl opacity-30"></div>

      <div className="flex flex-col w-full max-w-[400px] bg-gray-200 border-2 border-white rounded-lg backdrop-blur-md opacity-50 my-12 px-4 py-6 z-[99999]">
        <div className="flex flex-col text-black py-4 items-center">
          <h2 className="font-catamaran font-[800] text-2xl">Hi there,</h2>
          <p className="font-poppins w-[60%] text-center font-medium text-lg">
            Welcome to Chatiee
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-evenly">
          <form onSubmit={formSumbmitHandler}>
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
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-black py-2 px-4 ring-red-200 ring-2 rounded-md backdrop-blur-sm opacity-90 focus:outline-red-400"
                />
              </div>
              <div className="py-2">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full text-black py-2 px-4 ring-red-200 ring-2 rounded-md backdrop-blur-sm opacity-90 focus:outline-red-400"
                />
              </div>
              <div className="py-2">
                <input
                  name="confirm-password"
                  placeholder="Confirm your password"
                  className="w-full text-black py-2 px-4 ring-red-200 ring-2 rounded-md backdrop-blur-sm opacity-90 focus:outline-red-400"
                />
              </div>
            </div>
            <div>
              <button className="bg-[#ff0700] py-2 rounded-lg w-full">
                Register
              </button>
            </div>
            <div className="py-4 text-black">
              <p className="text-center">
                Have account?{" "}
                <Link className="font-semibold text-blue-600" href={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
