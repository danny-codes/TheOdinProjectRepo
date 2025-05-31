import { Project, defaultProject, createNewProject, createNewTodo, Todo } from "./app.js";

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

    Project.instances.forEach(instance => {
        let div = document.createElement('div');
        div.classList.add('projectDiv');

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

function renderTodos() {}