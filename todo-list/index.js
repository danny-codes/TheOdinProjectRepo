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
    let addBtn = document.querySelector('.addBtn');
    addBtn.addEventListener('click', addNewProject);
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

    let addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    addBtn.textContent = 'Add project';
    content.appendChild(addBtn);

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
        const index = e.currentTarget.getAttribute('data-index');
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
    let addBtn = document.querySelector('.addBtn');
    addBtn.addEventListener('click', addNewProject);
});

function addNewProject(){
    let content = document.querySelector("#content");
    // create the div and the inputs and confirm button
    let div = document.createElement("div");
    div.classList.add("addProjectDiv");
    // div.setAttribute("data-index", index);
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
    const project = Project.instances[index];
    let content = document.querySelector('#content');

    let header = document.createElement('h1');
    header.textContent = `Your ${project.name} project's todos`;
    header.classList.add('projectHeader');

    content.appendChild(header);

    let addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    addBtn.textContent = 'Add todo';
    content.appendChild(addBtn);

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
                BroadcastChannel;
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
};