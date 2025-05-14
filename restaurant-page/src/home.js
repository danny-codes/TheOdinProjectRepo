export function load() {
    const div = document.querySelector('#content');
    let pOpening = document.createElement('p')
    pOpening.textContent = 'Delicious Soy Lattes';
    div.appendChild(pOpening);
    let mainH1 = document.createElement('h1');
    mainH1.textContent = 'Made with handcrafted elements and semantically sourced ingredients'
    div.appendChild(mainH1);
    let pClosing = document.createElement('p')
    pClosing.textContent = 'Come with your coder friends & enjoy spaghetti code together';
    div.appendChild(pClosing);
}