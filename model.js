const db = require("./data/db-config.js");

module.exports = {
  findProjects,
  findResources,
  findById,
  findTasksByProject,
  addResource,
  addProject,
  addTask,
  findByTaskId,
  findByResourceId
};

//tested and working

function findProjects() {
  return db("projects");
}

//tested and working

function findResources() {
  return db("resources");
}

//tested and working

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function findByTaskId(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function findByResourceId(id) {
  return db("resources")
    .where({ id })
    .first();
}

//tested and working

function findTasksByProject(id) {
  return db("projects as p")
    .join("tasks as t", "p.id", "t.project_id")
    .where("p.id", id)
    .select(
      "p.prj_name",
      "p.prj_desc",
      "t.task_desc",
      "t.notes",
      "t.project_id",
      "t.task_completed"
    );
}

//tested and working, returns newly created item

function addResource(newRes) {
  return db("resources")
    .insert(newRes)
    .then(([id]) => {
      return findByResourceId(id);
    });
}

//tested and working, newly created item

function addProject(newPrj) {
  return db("projects")
    .insert(newPrj)
    .then(([id]) => {
      return findById(id);
    });
}

//tested and working, newly created item

function addTask(newTask, id) {
  return db("tasks")
    .insert(newTask)
    .where("tasks.project_id", id)
    .then(([id]) => {
      return findByTaskId(id);
    });
}
