const Projects = require("./model.js");

// Projects.findById(1).then(res => {
//   console.log(res);
// });

// Projects.findProjects().then(res => {
//   console.log(res);
// });

// Projects.findResources().then(res => {
//   console.log(res);
// });

Projects.findTasksByProject(1).then(res => {
  console.log(res);
});
