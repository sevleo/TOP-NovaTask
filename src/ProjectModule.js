import {
  checkProjectsInLocalStorage,
  deleteProjectFromLocalStorage,
  saveProjectToLocalStorage,
} from "./LocalStorageModule";

export { ProjectModule };

// Project module
const ProjectModule = (function () {
  let projects = [];

  const storedProjects = checkProjectsInLocalStorage();
  if (storedProjects) {
    projects = storedProjects;
  } else {
    // Mock projects
    projects = [
      {
        id: 1,
        name: "Sport",
        color: "#dab8de",
        active: "false",
      },
      {
        id: 2,
        name: "Math",
        color: "#93c7b4",
        active: "false",
      },
      {
        id: 3,
        name: "Programming",
        color: "#e8ceb5",
        active: "false",
      },
      {
        id: 4,
        name: "Leisure",
        color: "#a6b5ff",
        active: "false",
      },
    ];

    projects.forEach((project) => {
      saveProjectToLocalStorage(project);
    });
  }

  let projectsCount = projects.length;

  // Add new project
  function createProject(name, color) {
    const project = {};
    projectsCount += 1;
    project.id = projectsCount;
    project.name = name;
    project.color = color;

    projects.push(project);
    saveProjectToLocalStorage(project);

    return project;
  }

  // Retrieve list of projects (objects)
  function getProjectObjects() {
    return projects.slice();
  }

  // Retrieve list of project (values)
  function getProjectValues() {
    const projectValues = [];
    projects.forEach((p) => {
      projectValues.push(p.name);
    });

    return projectValues;
  }

  // Retrieve the id of a project that matches the provided name
  function findIdByName(name) {
    const project = projects.find((project) => project.name === name);
    return project ? project.id : null;
  }

  // Retrieve the color of a project that matches the provided name
  function findColorByName(name) {
    const project = projects.find((project) => project.name === name);
    return project ? project.color : null;
  }

  // Delete project
  function deleteProject(projectId) {
    projects.forEach((projectObject) => {
      if (projectObject.id === projectId) {
        deleteProjectFromLocalStorage(projectObject);
      }
    });

    projects = projects.filter((project) => project.id !== projectId);
  }

  return {
    createProject,
    getProjectObjects,
    getProjectValues,
    findIdByName,
    findColorByName,
    deleteProject,
  };
})();
