import { io } from "socket.io-client";

export const socket = io("http://[SEU_IP_AQUI]:3001", {
  transports: ["websocket"],
});