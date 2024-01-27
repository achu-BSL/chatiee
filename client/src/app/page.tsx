"use client"

import { useEffect, useState } from "react";
import { loginBg } from "./../../public/index";
import io from 'socket.io-client';

export default function Main() {

  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const socket = io('ws://chatiee.dev', {withCredentials: true});

    socket.on('message', (msgs) => {
      setMessages(msgs);
    });

    return () => {
      socket.disconnect();
    };

  }, []);


  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex h-screen">
        <div className="px-12 py-8">
          <div className="flex justify-center my-2">
            <h1 className="font-semibold text-lg">Chatiee</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="border  border-gray-400 rounded-md bg-gray-300 backdrop-blur-md bg-opacity-50 w-full flex gap-3 px-3 py-2 min-w-[220px]">
              <div className="flex justify-center items-center">
                <img className="w-[50px] h-[50px] rounded-full border border-gray-600" src={loginBg.src} alt="" />
              </div>
              <div>
                <h2 className="text-">name</h2>
                <p className="text-gray-800">message...</p>
              </div>
            </div>
            <div className="border  border-gray-400 rounded-md bg-gray-300 backdrop-blur-md bg-opacity-50 w-full flex gap-3 px-3 py-2 min-w-[220px]">
              <div className="flex justify-center items-center">
                <img className="w-[50px] h-[50px] rounded-full border border-gray-600" src={loginBg.src} alt="" />
              </div>
              <div>
                <h2 className="text-">name</h2>
                <p className="text-gray-800">message...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-5 bg-slate-300">
          <div className="bg-gray-200 w-full h-full rounded-lg backdrop-blur-md bg-opacity-50">
            <div className="flex justify-end p-10">
              <p>message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
