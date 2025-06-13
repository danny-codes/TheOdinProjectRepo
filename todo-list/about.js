export {renderAbout};

// About page content

function renderAbout() {
    let header = document.createElement('h1');
    header.textContent = '📝 About this todo app';
    header.classList.add('.projectHeader');
    content.appendChild(header);

    let p = document.createElement("p");
        p.innerHTML = `
    <strong>This project</strong> is part of <em>The Odin Project</em> JavaScript curriculum.<br>
    It is a simple to-do list application designed to practice <strong>DOM manipulation</strong>, 
    <strong>event handling</strong>, <strong>modular JavaScript code</strong>, and 
    <strong>composition over inheritance</strong>.<br>
    The app allows users to <strong>create projects</strong>, <strong>add and manage tasks</strong>, 
        <strong>mark tasks as complete</strong>, and <strong>organize their to-dos visually</strong>.
    `;
    p.classList.add('aboutText');

    content.appendChild(p);
}