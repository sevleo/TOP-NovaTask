// Local Storage Logic
let localStorageStatus = {
    loaded: 'false',
}



function switchLocalStorageStatus() {
    if (storageAvailable("localStorage")) {
        if (localStorageStatus.loaded === 'false') {
            localStorageStatus.loaded = 'true';
            localStorage.setItem('localStorageLoaded', localStorageStatus.loaded);
        }
    }
}


// Local storage for tasks
function saveTaskToLocalStorage(taskObject) {
    if (storageAvailable("localStorage")) {
        localStorage.setItem('task ' + taskObject.id, JSON.stringify(taskObject));
        // console.log(JSON.parse(localStorage.getItem('task ' + taskObject.id)));
    }
}

function deleteTaskFromLocalStorage(taskObject) {
    if (storageAvailable("localStorage")) {
        localStorage.removeItem('task ' + taskObject.id);
    }
}



function checkTasksInLocalStorage() {
    if (storageAvailable("localStorage")) {
        if (localStorage.getItem('localStorageLoaded')) {  

            let tasks = [];

            const keys = Object.values(localStorage);
            keys.forEach((key) => {
                const parsedKey = JSON.parse(key);
                if (parsedKey.title) {
                    tasks.push(parsedKey);
                }
            })
            return tasks;
        }
    }
}


// Local sotrage for projects
function saveProjectToLocalStorage(projectObject) {
    if (storageAvailable("localStorage")) {
        localStorage.setItem('project ' + projectObject.id, JSON.stringify(projectObject));
        // console.log(JSON.parse(localStorage.getItem('task ' + taskObject.id)));
    }
}

function deleteProjectFromLocalStorage(projectObject) {
    if (storageAvailable("localStorage")) {
        localStorage.removeItem('project ' + projectObject.id);
    }
}



function checkProjectsInLocalStorage() {
    if (storageAvailable("localStorage")) {
        if (localStorage.getItem('localStorageLoaded')) {  

            let projects = [];

            const keys = Object.values(localStorage);
            keys.forEach((key) => {
                const parsedKey = JSON.parse(key);
                if (parsedKey.name) {
                    projects.push(parsedKey);
                }
            })
            return projects;
        }
    }
}


// Check if local storage is available
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}

export {
    switchLocalStorageStatus,
    saveTaskToLocalStorage,
    deleteTaskFromLocalStorage,
    checkTasksInLocalStorage,
    saveProjectToLocalStorage,
    deleteProjectFromLocalStorage,
    checkProjectsInLocalStorage,
}