// serverı buraya yazın ve index.js require yazın

const express = require("express");

const projectRouter = require("./project/router.js");
const resourceRouter = require("./resource/router.js");
const taskRouter = require("./task/router.js");

const server = express();

server.use(express.json());
server.use("/api/project", projectRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/task", taskRouter);

module.exports = server;
