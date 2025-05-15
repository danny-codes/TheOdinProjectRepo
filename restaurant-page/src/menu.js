export function loadMenu() {
    const div = document.querySelector('#content');

    div.innerHTML = `
    <h1 style='text-align: center;'>Our Menu</h1>
    <ul>
    <li><strong>Console Coffee</strong> – Debug your brain with a bold espresso.</li>
    <li><strong>Syntax Latte</strong> – Smooth vanilla latte with extra semicolons.</li>
    <li><strong>DOM Mocha</strong> – Dark chocolate meets steamed milk and code.</li>
    <li><strong>CSS Chai</strong> – Spiced tea, styled to perfection.</li>
    <li><strong>Bug-Free Brownie</strong> – Rich, gooey, and guaranteed zero errors.</li>
    <li><strong>HTML Toast</strong> – Warm, simple, and always structured right.</li>
    </ul>
`;
}