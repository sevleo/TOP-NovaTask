import './styles.css';
import { DOMModule } from './DOMModule';
import { ProjectModule } from './ProjectModule';
import { TaskModule } from './TaskModule';
import { switchLocalStorageStatus } from './LocalStorageModule';


DOMModule.createMainDiv();
DOMModule.createDialogs.newProjectDialogHandler();
DOMModule.createDialogs.newTaskDialogHandler();
DOMModule.createDialogs.createProjectDeleteDialog();
DOMModule.createDialogs.createTaskDeleteDialog();
DOMModule.createDialogs.addEscEvenListener();
DOMModule.createLeftDiv.createStructure();
DOMModule.createLeftDiv.createProjects(ProjectModule.getProjectObjects());
DOMModule.createRightDiv.createStructure();
DOMModule.createRightDiv.createTasks(TaskModule.getTodayTasks());
DOMModule.createFooterDiv.createStructure();
DOMModule.createFooterDiv.createButtons();
switchLocalStorageStatus();



document.addEventListener('keydown', function(event) {
    if (event.key === "5") {
        // console.log(ProjectModule.getProjectObjects());
        // console.log(TaskModule.getTodayTasks());
        // console.log(TaskModule.getTomorrowTasks());
        // console.log(TaskModule.getAllTasks());
        // console.log(TaskModule.getProjectTasks('Math', TaskModule.getTodayTasks()));
        // console.log(TaskModule.getActiveProject());
        // console.log(TaskModule.getActiveView());
    }
})



