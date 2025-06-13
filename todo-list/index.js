import { Project, defaultProject, createNewProject, createNewTodo, Todo } from "./app.js";
import {renderAbout} from './about.js';

// DOM stuff

console.log(defaultProject.todos);

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    addProjectListeners();
    addProjectButtonListener();
});

function addProjectButtonListener() {
    let addProject = document.querySelector('.addProject');
    addProject.addEventListener('click', addNewProject);
}

function addTodoButtonListener(index) {
    const oldButton = document.querySelector('.addTodo');
    const newButton = oldButton.cloneNode(true);
    oldButton.replaceWith(newButton);

    newButton.addEventListener('click', () => {
        openTodoCreateModal();
        createTodoButtonListener(index);
    });
}

function renderProjects() {
    // for each Project instance, create div,
    // & insert the Project name into p inside div
    // append all of it to #content

    let content = document.querySelector('#content');

    let header = document.createElement('h1');
    header.textContent = 'Your projects';
    header.classList.add('.projectHeader');

    content.appendChild(header);

    let addProject = document.createElement('button');
    addProject.classList.add('addProject');
    addProject.textContent = 'Add project';
    content.appendChild(addProject);

    Project.instances.forEach((instance, index) => {
        let div = document.createElement('div');
        div.classList.add('projectDiv');
        div.setAttribute('data-index', index);

        let nameP = document.createElement('p');
        let projectText = instance.name;
        nameP.textContent = projectText;
        nameP.classList.add("projectName");

        div.style.backgroundColor = instance.color;

        content.appendChild(div);
        div.appendChild(nameP);
    });
    addProjectButtonListener();
}

function addProjectListeners() {
    document.querySelectorAll(".projectDiv").forEach((project) => {
    project.addEventListener("click", function(e) {
        clearContent();
        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        renderTodos(index);
    });
})};

function clearContent() {
    let content = document.querySelector('#content');
    content.replaceChildren();
}

let aboutBtn = document.querySelector('#aboutBtn');
aboutBtn.addEventListener('click', () => {
    clearContent();
    renderAbout();
});

let projectsBtn = document.querySelector('#projectsBtn');
projectsBtn.addEventListener('click', () => {
    clearContent();
    renderProjects();
    addProjectListeners();
    let addProject = document.querySelector('.addProject');
    addProject.addEventListener('click', addNewProject);
});

function addNewProject(){
    let content = document.querySelector("#content");
    // create the div and the inputs and confirm button
    let div = document.createElement("div");
    div.classList.add("addProjectDiv");
    let input = document.createElement('input');
    let name = input.value;

    let colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = '#ff0000';

    let button = document.createElement('button');
    button.classList.add('createBtn');
    button.textContent = 'Create';

    button.addEventListener('click', createProject);
    function createProject() {
        const name = input.value.trim();
        const colorValue = colorPicker.value;

        if (!name) return;

        createNewProject(name, colorValue);
        clearContent();
        renderProjects();
        addProjectListeners();
        colorPicker.blur();
    }
    
    div.appendChild(input);
    div.append(colorPicker);
    div.appendChild(button);
    content.appendChild(div);
};

function renderTodos(index) {
    clearContent();

    const project = Project.instances[index];
    console.log("Project.instances:", Project.instances);
    console.log("index:", index);

    let content = document.querySelector('#content');

    let header = document.createElement('h1');
    header.textContent = `${project.name} project's todos`;
    header.classList.add('projectHeader');

    content.appendChild(header);

    let addTodo = document.createElement('button');
    addTodo.classList.add('addTodo');
    addTodo.textContent = 'Add todo';
    content.appendChild(addTodo);

    project.todos.forEach((todo, index) => {
        let div = document.createElement("div");
        div.classList.add("todoDiv");
        div.setAttribute("data-index", index);

        switch (todo.priority) {
            case 'high':
                div.style.backgroundColor = 'red';
                break;
            case 'medium':
                div.style.backgroundColor = 'orange';
                break;
            case 'low':
                div.style.backgroundColor = 'green';
                break;
            default:
                div.style.backgroundColor = 'gray';
        }

        let name = document.createElement("p");
        name.textContent = todo.title
        name.classList.add("todoName");

        let duedate = document.createElement('p');
        duedate.textContent = `Due: ${todo.dueDate}`;
        duedate.classList.add('todoDue');

        content.appendChild(div);
        div.appendChild(name);
        div.appendChild(duedate);
    });
    addTodoButtonListener(index);
    todoListeners(index);
};

function openTodoCreateModal() {
    document.getElementById('todoName').value = '';
    document.getElementById('description').value = '';
    document.getElementById('duedate').value = '';
    document.getElementById('priority').value = 'medium';
    document.getElementById('notes').value = '';

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

function addNewTodo(index) {
    const project = Project.instances[index];

    if (!project) {
        console.error("❌ Project is undefined at index:", index);
        return;
    }

    let todoName = document.getElementById('todoName');
    let description = document.getElementById('description');
    let duedate = document.getElementById('duedate');
    let priority = document.getElementById('priority');
    let notes = document.getElementById("notes");
    let newTodo = createNewTodo(
        todoName.value,
        description.value,
        duedate.value,
        priority.value,
        notes.value
    );
    project.addTodo(newTodo);
    
    renderTodos(index);
    // close modal
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Modal stuff

const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

function createTodoButtonListener(index) {
    let oldCreate = document.querySelector("#createTodo");
    const newCreate = oldCreate.cloneNode(true);
    oldCreate.replaceWith(newCreate);
    newCreate.addEventListener("click", () => addNewTodo(index));
}

function todoListeners(projectIndex) {
    document.querySelectorAll(".todoDiv").forEach((project) => {
    project.addEventListener("click", function(e) {
        const todoIndex = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        expandTodo(projectIndex, todoIndex);
    });
})};

function expandTodo(projectIndex, todoIndex) {
    const project = Project.instances[projectIndex];
    const todo = project.todos[todoIndex];

    document.getElementById('todoName').value = todo.title;
    document.getElementById('description').value = todo.description;
    document.getElementById('duedate').value = todo.dueDate;
    document.getElementById('priority').value = todo.priority;
    document.getElementById('notes').value = todo.notes;

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    let oldButton = document.querySelector('#createTodo');
    const newButton = oldButton.cloneNode(true);
    oldButton.replaceWith(newButton);

    newButton.addEventListener('click', function(e) {
        todo.title = document.getElementById('todoName').value;
        todo.description = document.getElementById('description').value;
        todo.dueDate = document.getElementById('duedate').value;
        todo.priority = document.getElementById('priority').value;
        todo.notes = document.getElementById('notes').value;

        // close modal
        modal.classList.add("hidden");
        overlay.classList.add("hidden");

        renderTodos(projectIndex);
    });
    let modalActionBar = document.querySelector('#modalActionBar');

    let existingDeleteBtn = modalActionBar.querySelector('.deleteBtn');
    if (existingDeleteBtn) {
        existingDeleteBtn.remove();
    }

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    modalActionBar.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(e) {
        project.removeTodo(todoIndex);
        renderTodos(projectIndex);
        // close modal
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
}