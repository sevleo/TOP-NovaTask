import './styles.css';


// Project module 
const ProjectModule = (function() {

    let projects = ['Sport', 'Math', 'Programming', 'Other'];
    
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
    function drawMainDiv() {
        const body = document.querySelector('body');
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main');
        body.append(mainDiv);
    }

    function drawLeftDiv() {
        const mainDiv = document.querySelector('.main');
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('left');
        mainDiv.append(leftDiv);

            const leftFirstDiv = document.createElement('div');
            leftFirstDiv.classList.add('left-first-section');
            leftDiv.append(leftFirstDiv);

                const firstSectionLabel = document.createElement('p');
                firstSectionLabel.textContent = 'Tasks';
                leftFirstDiv.append(firstSectionLabel);

                const firstSectionList = document.createElement('ul');
                leftFirstDiv.append(firstSectionList);

                    const firstLineItem = document.createElement('li');
                    firstLineItem.textContent = 'Today';
                    firstSectionList.append(firstLineItem);

                    const secondLineItem = document.createElement('li');
                    secondLineItem.textContent = 'Tomorrow';
                    firstSectionList.append(secondLineItem);

            const leftSecondDiv = document.createElement('div');
            leftSecondDiv.classList.add('left-second-section');
            leftDiv.append(leftSecondDiv);

                const secondSectionLabel = document.createElement('p');
                secondSectionLabel.textContent = 'Projects';
                leftSecondDiv.append(secondSectionLabel);

                const secondSectionList = document.createElement('ul');
                leftSecondDiv.append(secondSectionList);

                ProjectModule.getProjects().forEach(element => {
                    drawProjects(element);
                });

                function drawProjects(item) {
                    const projectLineItem = document.createElement('li');
                    projectLineItem.textContent = item;
                    secondSectionList.append(projectLineItem);
                }

            const leftThirdDiv = document.createElement('div');
            leftThirdDiv.classList.add('left-third-section');
            leftDiv.append(leftThirdDiv);

    }

    function drawRightDiv() {
        const mainDiv = document.querySelector('.main');
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');
        mainDiv.append(rightDiv);

            const rightFirstDiv = document.createElement('div');
            rightFirstDiv.classList.add('left-first-section');
            rightDiv.append(rightFirstDiv);

            const rightSecondDiv = document.createElement('div');
            rightSecondDiv.classList.add('left-second-section');
            rightDiv.append(rightSecondDiv);
    }

    // function updateContainerDiv() {
    //     const navigationDiv = document.querySelector('.navigation');
    //     navigationDiv.textContent = ProjectModule.getProjects()[0].name;
    // }

    return {
        drawMainDiv,
        drawLeftDiv,
        drawRightDiv
    }

})();


DOMModule.drawMainDiv();
DOMModule.drawLeftDiv();
DOMModule.drawRightDiv();