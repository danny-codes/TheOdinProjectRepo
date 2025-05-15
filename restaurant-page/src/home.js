import cafe_logo from './cafe-logo.png';
export function load() {
    const div = document.querySelector('#content');
    let image = document.createElement('img');
    image.src = cafe_logo;
    image.classList.add('cafe_logo');
    div.appendChild(image);
    let name = document.createElement('h1');
    name.textContent = 'The DOM Café — JavaScript Roasted';
    name.classList.add('name');
    div.appendChild(name);
    let pOpening = document.createElement('p')
    // pOpening.textContent = 'Delicious Soy Lattes';
    div.appendChild(pOpening);
    let mainH1 = document.createElement('h1');
    mainH1.textContent = 'Made with handcrafted elements and semantically sourced ingredients';
    mainH1.classList.add("h1-about");
    div.appendChild(mainH1);
    let pClosing = document.createElement('p')
    pClosing.textContent = 'Come with your coder friends & enjoy spaghetti code together';
    div.appendChild(pClosing);
}