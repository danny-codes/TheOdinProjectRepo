export {saveProjects, loadProjects};
import {Project, Todo} from './app.js';

function saveProjects(projects) {
    const data = JSON.stringify(projects);
    localStorage.setItem('projects', data);
    console.log(`${data}`);
}

function loadProjects() {
    const data = localStorage.getItem('projects');
    if (!data) return [];
    try {
        const parsed = JSON.parse(data);
        Project.instances = [];
        return parsed.map(projectData => {
            const project = new Project(projectData.name, projectData.color);
            project.todos = projectData.todos.map(todoData => {
                const todo = new Todo(
                    todoData.title,
                    todoData.description,
                    todoData.dueDate,
                    todoData.priority,
                    todoData.notes
                );
                todo.complete = todoData.complete;
                return todo;
            });
            return project;
        });
    } catch (e) {
        console.error('Failed to load projects from localStorage', e);
        return [];
    }
}