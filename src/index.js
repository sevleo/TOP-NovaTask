import './styles.css';


// Project module 
const ProjectModule = (function() {

    let projects = [];
    
    function createProject(name) {
        const project = {};
        project.name = name;

        projects.push(project);

        return project;
    }

    function getProjects() {
        return projects.slice();
    }

    return {
        createProject,
        getProjects,
    }
    
})();


// Task module 
const TaskModule = (function() {

    let tasks = [];
    
    function createTask(project, title, notes, priority, date) {
        const task = {};
        task.project = project;
        task.title = title;
        task.notes = notes;
        task.priority = priority;
        task.date = date;

        tasks.push(task);

        return task;
    }

    function getTasks() {
        return tasks.slice();
    }

    return {
        createTask,
        getTasks,
    }
    
})();


// DOM module
const DOMModule = (function () {
    function createMainDiv() {
        const body = document.querySelector('body');
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main');
        body.append(mainDiv);
    }

    function createContainerDiv() {
        const mainDiv = document.querySelector('.main');
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container');
        mainDiv.append(containerDiv);
    }

    return {
        createMainDiv,
        createContainerDiv,
    }

})();


DOMModule.createMainDiv();
DOMModule.createContainerDiv();
ProjectModule.createProject('test');