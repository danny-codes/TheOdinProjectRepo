export function contactLoad() {
    const div = document.querySelector('#content');

    div.innerHTML = `
    <h1 style="text-align:center;">Contact Us</h1>
    <p>Have questions, feedback, or feature requests?<br>
    We’d love to hear from you.</p>

    <p>📍 127.0.0.1 Dev Street, Stack City<br>
    📧 <a href="mailto:contact@domcafe.dev">contact@domcafe.dev</a><br>
    📞 <a href="tel:1234567890">(123) 456-7890</a></p>

    <p>Open daily from <strong>08:00</strong> to <strong>22:00</strong>.<br>
    Come grab a byte!</p>
    `;
}