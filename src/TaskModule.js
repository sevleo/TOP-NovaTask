import format from "date-fns/format";
import { ProjectModule } from "./ProjectModule";
import {
  checkTasksInLocalStorage,
  deleteTaskFromLocalStorage,
  saveTaskToLocalStorage,
} from "./LocalStorageModule";

export { TaskModule };

// Task module
const TaskModule = (function () {
  // This should be in different module (DOM module perhaps)
  let active_view = "today";
  let active_project = "";

  // This should be in different module (DOM module perhaps)
  function changeActiveView(view) {
    active_view = view;
  }

  // This should be in different module (DOM module perhaps)
  function getActiveView() {
    return active_view;
  }

  // This should be in different module (DOM module perhaps)
  function changeActiveProject(project) {
    active_project = project;
  }

  // This should be in different module (DOM module perhaps)
  function getActiveProject() {
    return active_project;
  }

  // Retrieve the object that matches the provided ID
  function findObjectById(taskId) {
    const taskObject = tasks.find((task) => task.id === taskId);
    return taskObject || null;
  }

  function deleteTaskById(taskId) {
    tasks.forEach((taskObject) => {
      if (taskObject.id === taskId) {
        deleteTaskFromLocalStorage(taskObject);
      }
    });

    tasks = tasks.filter((task) => task.id !== taskId);
  }

  function deleteTaskByProjectId(projectId) {
    tasks.forEach((taskObject) => {
      if (taskObject.projectId === projectId) {
        deleteTaskFromLocalStorage(taskObject);
      }
    });

    tasks = tasks.filter((task) => task.projectId !== projectId);
  }

  // const today = new Date();
  // const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  // const dayAfterTomorrow = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);

  let tasks = [];

  const storedTasks = checkTasksInLocalStorage();
  if (storedTasks) {
    tasks = storedTasks;
  } else {
    // Mock projects
    tasks = [
      {
        id: 1,
        projectId: 1,
        projectName: "Sport",
        projectColor: "#dab8de",
        title: "Jogging in the park",
        notes: "Aim for a 5 km run. Focus on breathing techniques.",
        priority: "High",
        date: format(new Date(), "yyyy-MM-dd"),
        completed: "true",
      },
      {
        id: 2,
        projectId: 2,
        projectName: "Math",
        projectColor: "#93c7b4",
        title: "Solving Linear Equations",
        notes: "Work through exercises 3.1 to 3.5 in the textbook.",
        priority: "Medium",
        date: format(new Date(), "yyyy-MM-dd"),
        completed: "false",
      },
      {
        id: 3,
        projectId: 3,
        projectName: "Programming",
        projectColor: "#e8ceb5",
        title: "Algorithm Optimization",
        notes:
          "Refactor code for efficiency. Focus on reducing time complexity.",
        priority: "Medium",
        date: format(new Date(), "yyyy-MM-dd"),
        completed: "false",
      },
      {
        id: 4,
        projectId: 4,
        projectName: "Leisure",
        projectColor: "#a6b5ff",
        title: "Painting a Scenery",
        notes: "Gather art supplies and start painting a landscape.",
        priority: "Low",
        date: format(new Date(), "yyyy-MM-dd"),
        completed: "false",
      },
      {
        id: 5,
        projectId: 1,
        projectName: "Sport",
        projectColor: "#dab8de",
        title: "Morning Yoga Session",
        notes: "Practice sun salutations and meditation for 20 minutes.",
        priority: "Medium",
        date: format(
          new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          "yyyy-MM-dd",
        ),
        completed: "false",
      },
      {
        id: 6,
        projectId: 2,
        projectName: "Math",
        projectColor: "#93c7b4",
        title: "Understanding Calculus Concepts",
        notes:
          "Review derivatives and integrals to grasp fundamental concepts.",
        priority: "High",
        date: format(
          new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          "yyyy-MM-dd",
        ),
        completed: "false",
      },
      {
        id: 7,
        projectId: 3,
        projectName: "Programming",
        projectColor: "#e8ceb5",
        title: "Debugging Complex Functions",
        notes:
          "Identify and fix bugs in the core functionalities of the application.",
        priority: "High",
        date: format(
          new Date(new Date().getTime() + 48 * 60 * 60 * 1000),
          "yyyy-MM-dd",
        ),
        completed: "false",
      },
      {
        id: 8,
        projectId: 4,
        projectName: "Leisure",
        projectColor: "#a6b5ff",
        title: "Cooking a New Recipe",
        notes: "Try out a new recipe for a three-course meal.",
        priority: "Medium",
        date: format(
          new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          "yyyy-MM-dd",
        ),
        completed: "false",
      },
      // {
      //     id: 35,
      //     projectId: 1,
      //     projectName: 'Sport',
      //     projectColor: '#dab8de',
      //     title: 'Swimming Practice',
      //     notes: 'Focus on improving stroke techniques and endurance in the pool.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 36,
      //     projectId: 2,
      //     projectName: 'Math',
      //     projectColor: '#93c7b4',
      //     title: 'Mathematics Problem Solving',
      //     notes: 'Solve complex mathematical problems involving algebra and geometry.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 48 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 37,
      //     projectId: 3,
      //     projectName: 'Programming',
      //     projectColor: '#e8ceb5',
      //     title: 'Learning New Coding Languages',
      //     notes: 'Start learning Python and its libraries for data analysis.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 48 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 38,
      //     projectId: 4,
      //     projectName: 'Leisure',
      //     projectColor: '#a6b5ff',
      //     title: 'Gardening Day',
      //     notes: 'Plant new flowers and herbs in the garden.',
      //     priority: 'Low',
      //     date: format(new Date(), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 39,
      //     projectId: 1,
      //     projectName: 'Sport',
      //     projectColor: '#dab8de',
      //     title: 'Cycling Adventure',
      //     notes: 'Plan and embark on a scenic cycling route around the city outskirts.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 48 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 40,
      //     projectId: 2,
      //     projectName: 'Math',
      //     projectColor: '#93c7b4',
      //     title: 'Mathematics Quiz Prep',
      //     notes: 'Prepare for the upcoming quiz by revising previous chapters.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 41,
      //     projectId: 3,
      //     projectName: 'Programming',
      //     projectColor: '#e8ceb5',
      //     title: 'Creating Interactive Web Design',
      //     notes: 'Implement CSS animations and JavaScript interactivity on a webpage.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 42,
      //     projectId: 4,
      //     projectName: 'Leisure',
      //     projectColor: '#a6b5ff',
      //     title: 'Book Reading Time',
      //     notes: 'Start a new novel and aim to finish the first five chapters.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 43,
      //     projectId: 1,
      //     projectName: 'Sport',
      //     projectColor: '#dab8de',
      //     title: 'Basketball Skills Practice',
      //     notes: 'Work on dribbling, shooting, and defensive techniques.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 44,
      //     projectId: 2,
      //     projectName: 'Math',
      //     projectColor: '#93c7b4',
      //     title: 'Understanding Trigonometry',
      //     notes: 'Study trigonometric functions and their applications.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 45,
      //     projectId: 3,
      //     projectName: 'Programming',
      //     projectColor: '#e8ceb5',
      //     title: 'Database Optimization',
      //     notes: 'Optimize database queries for faster response times.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 46,
      //     projectId: 4,
      //     projectName: 'Leisure',
      //     projectColor: '#a6b5ff',
      //     title: 'Photography Walk',
      //     notes: 'Capture interesting shots around the neighborhood.',
      //     priority: 'Low',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 47,
      //     projectId: 1,
      //     projectName: 'Sport',
      //     projectColor: '#dab8de',
      //     title: 'Hiking Trail Exploration',
      //     notes: 'Discover and explore new hiking trails in the nearby forest.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 48,
      //     projectId: 2,
      //     projectName: 'Math',
      //     projectColor: '#93c7b4',
      //     title: 'Advanced Algebra Revision',
      //     notes: 'Review advanced algebraic concepts like matrices and determinants.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 49,
      //     projectId: 3,
      //     projectName: 'Programming',
      //     projectColor: '#e8ceb5',
      //     title: 'Implementing Data Structures',
      //     notes: 'Code different data structures - stacks, queues, and linked lists.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 50,
      //     projectId: 4,
      //     projectName: 'Leisure',
      //     projectColor: '#a6b5ff',
      //     title: 'DIY Craft Day',
      //     notes: 'Create handmade crafts using recycled materials.',
      //     priority: 'Low',
      //     date: format(new Date(new Date().getTime() + 120 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
    ];

    tasks.forEach((task) => {
      saveTaskToLocalStorage(task);
    });
  }

  let tasksCount = tasks.length;

  // Add new task object
  function createTask(projectName, title, notes, date) {
    const task = {};
    tasksCount += 1;
    task.id = tasksCount;
    task.projectId = ProjectModule.findIdByName(projectName);
    task.projectName = projectName;
    task.projectColor = ProjectModule.findColorByName(projectName);
    task.title = title;
    task.notes = notes;
    // task.priority = priority;
    task.date = date;

    tasks.push(task);
    saveTaskToLocalStorage(task);

    return task;
  }

  // Update an existing task object
  function updateTask(projectName, title, notes, date, taskId) {
    const task = {};
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.projectName = projectName;
        task.projectId = ProjectModule.findIdByName(projectName);
        task.projectColor = ProjectModule.findColorByName(projectName);
        task.title = title;
        task.notes = notes;
        task.date = date;
        return task;
      }
    });
  }

  // Retrieve all tasks
  function getAllTasks() {
    changeActiveView("all");
    const sortedTasks = tasks
      .slice()
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    return sortedTasks;
  }

  // Retrieve today's tasks
  function getTodayTasks() {
    const today = new Date();
    const tasksToReturn = [];
    let taskDate = "";
    tasks.forEach((task) => {
      const dateString = task.date;
      if (task.date instanceof Date) {
        taskDate = task.date;
      } else {
        const dateParts = dateString.split("-");

        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const date = parseInt(dateParts[2]);

        taskDate = new Date(year, month - 1, date);
      }

      const isSameYear = taskDate.getFullYear() === today.getFullYear();
      const isSameMonth = taskDate.getMonth() === today.getMonth();
      const isSameDay = taskDate.getDate() === today.getDate();

      if (isSameYear && isSameMonth && isSameDay) {
        tasksToReturn.push(task);
      }
    });

    changeActiveView("today");
    return tasksToReturn;
  }

  // Retrieve tomorrow's tasks
  function getTomorrowTasks() {
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const tasksToReturn = [];
    let taskDate = "";
    tasks.forEach((task) => {
      const dateString = task.date;
      if (task.date instanceof Date) {
        taskDate = task.date;
      } else {
        const dateParts = dateString.split("-");

        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const date = parseInt(dateParts[2]);

        taskDate = new Date(year, month - 1, date);
      }

      const isSameYear = taskDate.getFullYear() === tomorrow.getFullYear();
      const isSameMonth = taskDate.getMonth() === tomorrow.getMonth();
      const isSameDay = taskDate.getDate() === tomorrow.getDate();

      if (isSameYear && isSameMonth && isSameDay) {
        tasksToReturn.push(task);
      }
    });

    changeActiveView("tomorrow");
    return tasksToReturn;
  }

  // Retrieve tasks from active view
  function getTasksFromActiveView() {
    if (getActiveView() === "today") {
      return getTodayTasks();
    }
    if (getActiveView() === "tomorrow") {
      return getTomorrowTasks();
    }
    if (getActiveView() === "all") {
      return getAllTasks();
    }
  }

  // Retrieve a project's tasks
  function getProjectTasks(project, tasks) {
    if (project == "") {
      return tasks;
    }

    const tasksToReturn = [];

    tasks.forEach((task) => {
      if (task.projectName == project) {
        tasksToReturn.push(task);
      }
    });

    changeActiveProject(project);

    return tasksToReturn;
  }

  return {
    createTask,
    updateTask,
    getAllTasks,
    getTodayTasks,
    getTomorrowTasks,
    changeActiveView,
    getActiveView,
    changeActiveProject,
    getActiveProject,
    getProjectTasks,
    getTasksFromActiveView,
    deleteTaskById,
    deleteTaskByProjectId,
    findObjectById,
  };
})();
