export { Project, defaultProject, createNewProject, createNewTodo, Todo };

class Project {
    constructor(type) {
        this.type = type;
    }
}

let defaultProject = new Project('default');

function createNewProject() {

};

function createNewTodo() {

};

class Todo extends Project{
    constructor(title, description, dueDate, priority, difficulty, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.difficulty = difficulty;
        this.notes = notes;
    }
}