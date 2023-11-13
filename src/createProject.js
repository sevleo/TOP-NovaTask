
// Project module 
const ProjectModule = (function() {
    
    function createProject(name) {
        // The object to be returned
        const project = {};

        // Properties
        project.name = name;

        return project;
    }

    return {
        createProject,
    }
    
})();


export {ProjectModule};