import './styles.css';


// Project module 
const ProjectModule = (function() {

    // Projects in default configuration
    let projects = [
        {
            id: 1,
            name: 'Sport',
        },
        {
            id: 2,
            name: 'Math',
        },
        {
            id: 3,
            name: 'Programming',
        },
        {
            id: 4,
            name: 'Leisure',
        },
    ];

    let projectsCount = projects.length;
    
    // Add new project
    function createProject(name) {
        const project = {};
        projectsCount = projectsCount + 1;
        project.id = projectsCount;
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

    let tasks = [
        {
            id: 0,
            project: 0,
            title: 'Complete Exercise 1',
            notes: 'Remember to focus on the key concepts',
            priority: 'High',
            date: '2023-11-15',
        },
        {
            id: 1,
            project: 1,
            title: 'Study Algebra',
            notes: 'Review chapters 3 and 4 for the upcoming test',
            priority: 'Medium',
            date: '2023-11-17',
        },
        {
            id: 2,
            project: 2,
            title: 'Code Review for Project X',
            notes: 'Check for code quality and potential optimizations',
            priority: 'High',
            date: '2023-11-18',
        },
        {
            id: 3,
            project: 3,
            title: 'Buy groceries',
            notes: 'Milk, eggs, bread, and fruits',
            priority: 'Low',
            date: '2023-11-20',
        },
        {
            id: 4,
            project: 4,
            title: 'Read "The Great Gatsby"',
            notes: 'Complete chapters 1-3 by the end of the week',
            priority: 'Medium',
            date: '2023-11-22',
        },
        {
            id: 5,
            project: 0,
            title: 'Prepare presentation slides',
            notes: 'Incorporate feedback from team members',
            priority: 'High',
            date: '2023-11-25',
        },
        {
            id: 6,
            project: 1,
            title: 'Practice guitar',
            notes: 'Learn new chords and practice scales',
            priority: 'Medium',
            date: '2023-11-28',
        },
        {
            id: 7,
            project: 2,
            title: 'Write documentation',
            notes: 'Document the new API endpoints',
            priority: 'High',
            date: '2023-11-30',
        },
        {
            id: 8,
            project: 3,
            title: 'Plan weekend hike',
            notes: 'Check weather forecast and pack essentials',
            priority: 'Low',
            date: '2023-12-02',
        },
        {
            id: 9,
            project: 4,
            title: 'Watch coding tutorial',
            notes: 'Focus on advanced JavaScript concepts',
            priority: 'Medium',
            date: '2023-12-05',
        },
        {
            id: 10,
            project: 0,
            title: 'Review meeting notes',
            notes: 'Prepare action items for follow-up',
            priority: 'High',
            date: '2023-12-08',
        },
        {
            id: 11,
            project: 1,
            title: 'Create flashcards',
            notes: 'For memorizing important math formulas',
            priority: 'Medium',
            date: '2023-12-10',
        },
        {
            id: 12,
            project: 2,
            title: 'Refactor code',
            notes: 'Address code smells and improve readability',
            priority: 'High',
            date: '2023-12-12',
        },
        {
            id: 13,
            project: 3,
            title: 'Water the plants',
            notes: 'Check soil moisture and water accordingly',
            priority: 'Low',
            date: '2023-12-15',
        },
        {
            id: 14,
            project: 4,
            title: 'Practice mindfulness meditation',
            notes: 'Take a break and clear the mind',
            priority: 'Medium',
            date: '2023-12-18',
        },

    ];
    
    // Add new task object
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
        newProjectDialogHandler();
        newTaskDialogHandler();

        function newProjectDialogHandler() {
            const newProjectDialog = createProjectDialog();
            const newProjectDialogForm = createProjectDialogForm();

            function createProjectDialog() {
                const newProjectDialog = document.createElement('dialog');
                newProjectDialog.classList.add('new-project', 'hidden');
                body.append(newProjectDialog);
                return newProjectDialog;
            }

            function createProjectDialogForm() {
                const newProjectDialogForm = document.createElement('form');
                newProjectDialog.append(newProjectDialogForm);
                newProjectDialogForm.addEventListener('submit', () => {
                    const projectName = document.querySelector('dialog.new-project > form input#project-name');
                    ProjectModule.createProject(projectName.value);
                    DOMModule.createLeftDiv.createProjects(ProjectModule.getProjects());
                    });

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

                // Add close animation on Save and Close
                handleCloseAnimation(newProjectDialogForm, newProjectDialog, 'submit', newProjectDialogForm);
                handleCloseAnimation(closeProjectDialogSpan, newProjectDialog, 'click', newProjectDialogForm);

                return newProjectDialogForm;
            }
        }

        function newTaskDialogHandler() {
            const newTaskDialog = createTaskDialog();
            const newTaskDialogForm = createTaskDialogForm();

            function createTaskDialog() {
                const newTaskDialog = document.createElement('dialog');
                newTaskDialog.classList.add('new-task', 'hidden');
                body.append(newTaskDialog);
                return newTaskDialog;
            }

            function createTaskDialogForm() {
                const newTaskDialogForm = document.createElement('form');
                newTaskDialog.append(newTaskDialogForm);
    
                const newTaskDialogFieldsTemplate = [
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
    
                newTaskDialogFieldsTemplate.forEach(element => {
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
    
                // Add close animation on Save and Close
                handleCloseAnimation(newTaskDialogForm, newTaskDialog, 'submit', newTaskDialogForm);
                handleCloseAnimation(closeTaskDialogSpan, newTaskDialog, 'click', newTaskDialogForm);
            }   
        }
        
        // Close animation on ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                event.preventDefault();
                const openDialog = document.querySelector('dialog[open]');
                if (openDialog) {
                    closeDialog(openDialog);
                }
            }
        });

        // Close animation handler
        function handleCloseAnimation(eventElement, dialog, eventType, form) {
            eventElement.addEventListener(eventType, function handleSubmit(event) {
                event.preventDefault();
                form.reset();
                closeDialog(dialog);
            });
        }

        // Close dialog
        function closeDialog(dialog) {
            dialog.classList.add('hidden');
            dialog.classList.remove('displayed');
            dialog.addEventListener('transitionend', function handleTransitionEnd() {
                dialog.close();
                dialog.removeEventListener('transitionend', handleTransitionEnd);
            });
        }
    }
    

    // Handler for left div
    const createLeftDiv = (function () {

        // Create layout structure
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
                newProjectDialog.classList.add('displayed');
                newProjectDialog.classList.remove('hidden');
            })
        }

        // Render projects
        function createProjects(projects) {
            const projectLineItems = document.querySelectorAll('.project');
            if (projectLineItems) {
                projectLineItems.forEach(item => {
                    item.remove();
                });
            }

            projects.forEach(element => {
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

    // Handler for right div
    const createRightDiv = (function createRightDiv() {

        // Create layout structure
        function createStructure() {
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
                newTaskDialog.classList.add('displayed');
                newTaskDialog.classList.remove('hidden');
            })
        }

         // Render tasks
        function createTasks(tasks) {
            tasks.forEach(element => {
                const rightFirstSection = document.querySelector('.right-first-section');
                const taskLineItem = document.createElement('div');
                taskLineItem.classList.add('task');
                rightFirstSection.append(taskLineItem);

                const taskFieldsTemplate = [
                    {
                        div_class: 'task-project-field',
                        textContent: element.project,
                    },
                    {
                        div_class: 'task-title-field',
                        textContent: element.title,
                    },
                    {
                        div_class: 'task-notes-field',
                        textContent: element.notes,
                    },
                    {
                        div_class: 'task-priority-field',
                        textContent: element.priority,
                    },
                    {
                        div_class: 'task-date-field',
                        textContent: element.date,
                    },
                ];

                taskFieldsTemplate.forEach(field => {
                    const taskField = document.createElement('div');
                    taskField.classList.add(field.div_class);
                    taskField.textContent = field.textContent;
                    taskLineItem.append(taskField);

                });
            });
        }
        
        return {
            createStructure,
            createTasks,
        }
    })();

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
DOMModule.createLeftDiv.createProjects(ProjectModule.getProjects());
DOMModule.createRightDiv.createStructure();
DOMModule.createRightDiv.createTasks(TaskModule.getTasks());