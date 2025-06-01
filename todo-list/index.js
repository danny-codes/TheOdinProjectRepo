import { Project, defaultProject, createNewProject, createNewTodo, Todo } from "./app.js";
import {renderAbout} from './about.js';

// DOM stuff

console.log(defaultProject.todos);

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    addProjectListeners();
});

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

        content.appendChild(div);
        div.appendChild(nameP);
    });
    // 
    //
}

function addProjectListeners() {
    document.querySelectorAll(".projectDiv").forEach((project) => {
    project.addEventListener("click", clearContent);
    });
}

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
});

function addNewProject(){};

let addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addNewProject());

function renderTodos() {}