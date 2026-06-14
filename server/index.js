const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  socket.emit("server:message", {
    message: "Conectado ao monitoramento IoT",
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

setInterval(() => {
  io.emit("sensor:update", {
    temperature: Number((22 + Math.random() * 8).toFixed(1)),
    humidity: Number((40 + Math.random() * 30).toFixed(1)),
    occupancy: Math.floor(Math.random() * 100),
    status: "online",
    updatedAt: new Date().toLocaleTimeString("pt-BR"),
  });
}, 3000);

server.listen(3001, () => {
  console.log("Servidor Socket.IO rodando na porta 3001");
});