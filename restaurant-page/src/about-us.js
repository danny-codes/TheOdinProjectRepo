export function loadAboutUs() {
    const div = document.querySelector('#content');
    div.innerHTML = `
    <h1 class='header' style="text-align: center;">About Us</h1>
    <p>
    Welcome to <strong>The DOM Café</strong> — where the JavaScript flows as smoothly as the coffee. 
    We’re a cozy virtual spot built by devs, for devs. Whether you’re debugging over a dark roast 
    or brainstorming your next big idea over a matcha latte, we’ve got the perfect table for you.
    <br><br>
    Handcrafted with HTML, CSS, and a splash of JavaScript, our café serves up a menu of creativity, 
    caffeine, and clean code. Pull up a seat, open the console, and stay awhile.
    </p>
    `;

}