import { io } from "socket.io-client";

export const socket = io(`https://chatiee.dev`, {
  path: "/api/personalchat/socket.io",
//   autoConnect: false,
});

socket.onAny((event, ...args) => {
  console.log(event);
});
