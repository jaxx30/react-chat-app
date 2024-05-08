const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");

const User = require("./user");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());

app.get("/", (req, res, next) => {
  res.send({ response: "Server is up and running." }).status(200);
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    socket.join(room);
    console.log("connection made");
    User.addUsers({ id: socket.id, name, room });
    callback();
  });

  socket.on("messageIn", ({ name, room }, message) => {
    io.to(room).emit("messageOut", name, message);
  });
});

server.listen(8080);
