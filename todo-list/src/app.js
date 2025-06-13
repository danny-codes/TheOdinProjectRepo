export { Project, defaultProject, createNewProject, createNewTodo, Todo };

class Todo {
    constructor(title, description, dueDate, priority, notes = '', complete){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.complete = complete;
    }

    toggleComplete () {
        this.complete = !this.complete;
    }
}

class Project {
    static instances = [];
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.todos = [];
        Project.instances.push(this);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(index) {
        this.todos.splice(index, 1)
    }
}

const defaultProject = new Project('Default');

function createNewProject(name, color) {
    return new Project(name, color);
};

function createNewTodo(title, description, dueDate, priority, notes = '', complete) {
    return new Todo(title, description, dueDate, priority, notes, complete);
};