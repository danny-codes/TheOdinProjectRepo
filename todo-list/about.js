export {renderAbout};

// About page content

function renderAbout() {
    let header = document.createElement('h1');
    header.textContent = 'About this todo app';
    header.classList.add('.projectHeader');
    content.appendChild(header);

    let p = document.createElement('p');
    p.textContent = 'This project is part of The Odin Project JavaScript Curriculum';
    content.appendChild(p);
}