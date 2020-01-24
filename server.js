const express = require("express");

const Projects = require("./model.js");

const server = express();

server.use(express.json());

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ mesage: "something went wrong" });
});

//GET for all projects -- tested and working

server.get("/api/projects", async (req, res, next) => {
  try {
    res.json(await Projects.findProjects());
  } catch (err) {
    next(err);
  }
});

//GET for all tasks on a project --tested and working

server.get("/api/projects/:id/tasks", async (req, res, next) => {
  try {
    res.json(await Projects.findTasksByProject(req.params.id));
  } catch (err) {
    next(err);
  }
});

//GET for all resources --tested and working

server.get("/api/resources", async (req, res, next) => {
  try {
    res.json(await Projects.findResources());
  } catch (err) {
    next(err);
  }
});

//POST for a new project -- tested and working

server.post("/api/projects", async (req, res, next) => {
  try {
    res.json(await Projects.addProject(req.body));
  } catch (err) {
    next(err);
  }
});

//POST for a new task on a project --tested and working

server.post("/api/projects/:id/tasks", async (req, res, next) => {
  try {
    res.json(await Projects.addTask(req.body, req.params.id));
  } catch (err) {
    next(err);
  }
});

//POST for a new resource --tested and working

server.post("/api/resources", async (req, res, next) => {
  try {
    res.json(await Projects.addResource(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = server;
