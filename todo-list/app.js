export { Project, defaultProject, createNewProject, createNewTodo, Todo };

class Todo {
    constructor(title, description, dueDate, priority, notes = ''){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.complete = false;
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
const todo1 = new Todo('Clean your room', 'Vacuum, organize desk', '2025-06-01', 'high');
defaultProject.addTodo(todo1);
// const testProject = new Project('Test');

function createNewProject(name, color) {
    return new Project(name, color);
};

function createNewTodo(title, description, dueDate, priority) {
    return new Todo(title, description, dueDate, priority);
};