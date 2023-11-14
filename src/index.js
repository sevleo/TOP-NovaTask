import './styles.css';


// Project module 
const ProjectModule = (function() {

    // Projects in default configuration
    let projects = [
        {
            id: 0,
            name: 'Sport',
        },
        {
            id: 1,
            name: 'Math',
        },
        {
            id: 2,
            name: 'Programming',
        },
        {
            id: 3,
            name: 'Leisure',
        },
    ];
    
    // Add new project
    function createProject(name) {
        const project = {};
        project.name = name;

        projects.push(project);

        return project;
    }

    // Retrieve projects
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
    
    // Add new task
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

    // Retrieve tasks
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

    function createDialogs() {
        const body = document.querySelector('body');

        // New Project dialog and its children
        const newProjectDialog = document.createElement('dialog');
        newProjectDialog.classList.add('new-project');
        body.append(newProjectDialog);

        const newProjectDialogForm = document.createElement('form');
        newProjectDialog.append(newProjectDialogForm);

        const nameFieldDiv = document.createElement('div');
        nameFieldDiv.classList.add('project-name-field-div');
        newProjectDialogForm.append(nameFieldDiv);

        const nameFieldLabel = document.createElement('label');
        nameFieldLabel.textContent = 'Name';
        nameFieldLabel.setAttribute('for', 'project-name');
        nameFieldDiv.append(nameFieldLabel);

        const nameFieldInput = document.createElement('input');
        nameFieldInput.textContent = 'Name';
        nameFieldInput.setAttribute('type', 'text');
        nameFieldInput.setAttribute('id', 'project-name');
        nameFieldDiv.append(nameFieldInput);

        const submitProjectButton = document.createElement('button');
        submitProjectButton.setAttribute('type', 'submit');
        submitProjectButton.textContent = 'Save';
        newProjectDialogForm.append(submitProjectButton);

        const closeProjectDialogDiv = document.createElement('div');
        closeProjectDialogDiv.classList.add('close-project-dialog');
        newProjectDialogForm.append(closeProjectDialogDiv);

        const closeProjectDialogSpan = document.createElement('span');
        closeProjectDialogSpan.classList.add('material-symbols-outlined');
        closeProjectDialogSpan.textContent = 'close';
        closeProjectDialogDiv.append(closeProjectDialogSpan);

        // New Task dialog and its children
        const newTaskDialog = document.createElement('dialog');
        newTaskDialog.classList.add('new-task');
        body.append(newTaskDialog);

        const newTaskDialogForm = document.createElement('form');
        newTaskDialog.append(newTaskDialogForm);

        const newTaskDialogFields = [
            {
                div_class: 'task-project-field-div',
                input_id: 'task-project',
                type: 'text',
                label: 'Project',
            },
            {
                div_class: 'task-title-field-div',
                input_id: 'task-title',
                type: 'text',
                label: 'Title',
            },
            {
                div_class: 'task-notes-field-div',
                input_id: 'task-notes',
                type: 'text',
                label: 'Notes',
            },
            {
                div_class: 'task-priority-field-div',
                input_id: 'task-priority',
                type: 'text',
                label: 'Priority',
            },
            {
                div_class: 'task-date-field-div',
                input_id: 'task-date',
                type: 'text',
                label: 'Date',
            },
        ];

        newTaskDialogFields.forEach(element => {
            const fieldDiv = document.createElement('div');
            fieldDiv.classList.add(element.div_class);
            newTaskDialogForm.append(fieldDiv);

            const fieldLabel = document.createElement('label');
            fieldLabel.textContent = element.label;
            fieldLabel.setAttribute('for', element.input_id);
            fieldDiv.append(fieldLabel);
    
            const fieldInput = document.createElement('input');
            fieldInput.textContent = element.label;
            fieldInput.setAttribute('type', element.type);
            fieldInput.setAttribute('id', element.input_id);
            fieldDiv.append(fieldInput);
        })

        const submitTaskButton = document.createElement('button');
        submitTaskButton.setAttribute('type', 'submit');
        submitTaskButton.textContent = 'Save';
        newTaskDialogForm.append(submitTaskButton);

        const closeTaskDialogDiv = document.createElement('div');
        closeTaskDialogDiv.classList.add('close-project-dialog');
        newTaskDialogForm.append(closeTaskDialogDiv);

        const closeTaskDialogSpan = document.createElement('span');
        closeTaskDialogSpan.classList.add('material-symbols-outlined');
        closeTaskDialogSpan.textContent = 'close';
        closeTaskDialogDiv.append(closeTaskDialogSpan);

        handleCloseAnimation(newProjectDialogForm, newProjectDialog, 'submit');
        handleCloseAnimation(closeProjectDialogSpan, newProjectDialog, 'click');
        handleCloseAnimation(newTaskDialogForm, newTaskDialog, 'submit');
        handleCloseAnimation(closeTaskDialogSpan, newTaskDialog, 'click');

        // Close animation
        function handleCloseAnimation(eventElement, dialog, eventType) {
            eventElement.addEventListener(eventType, function handleSubmit(event) {
                event.preventDefault();
                // eventElement.reset();
                dialog.classList.add('hide');
            
                dialog.addEventListener('webkitAnimationEnd', animationEndHandler, false);
    
                function animationEndHandler() {
                    dialog.classList.remove('hide');
                    dialog.close();
                    dialog.removeEventListener('webkitAnimationEnd', animationEndHandler, false);
                }
            });
        }
    }
    

    // Handler for left div
    const createLeftDiv = (function () {

        // create layout structure
        function createStructure () {
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
            secondSectionList.classList.add('second-section-list');
            leftSecondDiv.append(secondSectionList);
    
            const leftThirdDiv = document.createElement('div');
            leftThirdDiv.classList.add('left-third-section');
            leftDiv.append(leftThirdDiv);

            const createProjectButton = document.createElement('button');
            createProjectButton.classList.add('create-project');
            createProjectButton.textContent = 'Create Project';
            leftThirdDiv.append(createProjectButton);
            createProjectButton.addEventListener('click', () => {
                const newProjectDialog = document.querySelector('.new-project');
                newProjectDialog.showModal();
            })
        }

        // Render projects
        function createProjects() {
            const projectLineItems = document.querySelectorAll('.project');
            if (projectLineItems) {
                projectLineItems.forEach(item => {
                    item.remove();
                });
            }

            ProjectModule.getProjects().forEach(element => {
                const secondSectionList = document.querySelector('.second-section-list');
                const projectLineItem = document.createElement('li');
                projectLineItem.classList.add('project');
                projectLineItem.textContent = element.name;
                secondSectionList.append(projectLineItem);
            });
        }

        return {
            createStructure,
            createProjects,
        }

    })();

    // Handler for left div
    function createRightDiv() {
        const mainDiv = document.querySelector('.main');
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');
        mainDiv.append(rightDiv);

        const rightFirstDiv = document.createElement('div');
        rightFirstDiv.classList.add('right-first-section');
        rightDiv.append(rightFirstDiv);

        const rightSecondDiv = document.createElement('div');
        rightSecondDiv.classList.add('right-second-section');
        rightDiv.append(rightSecondDiv);

        const createTaskButton = document.createElement('button');
        createTaskButton.classList.add('create-task');
        createTaskButton.textContent = 'Create Task';
        rightSecondDiv.append(createTaskButton);

        createTaskButton.addEventListener('click', () => {
            const newTaskDialog = document.querySelector('.new-task');
            newTaskDialog.showModal();
        })
    }

    // function updateContainerDiv() {
    //     const navigationDiv = document.querySelector('.navigation');
    //     navigationDiv.textContent = ProjectModule.getProjects()[0].name;
    // }

    return {
        createMainDiv,
        createDialogs,
        createLeftDiv,
        createRightDiv
    }

})();


DOMModule.createMainDiv();
DOMModule.createDialogs();
DOMModule.createLeftDiv.createStructure();
DOMModule.createLeftDiv.createProjects();
DOMModule.createRightDiv();