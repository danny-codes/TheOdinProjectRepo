const name = document.querySelector("#username");
const greetMeBtn = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting");

greetMeBtn.addEventListener("click", (event) => {
    greetingOutput.innerText = `Hello ${name.value}`;
});

/* saving the scroll position */

window.addEventListener("scroll", () => {
    localStorage.setItem("scrollPosition", window.scrollY);
});

window.addEventListener("load", () => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition), 10);
    }
});

/* for the slider*/
const slider = document.getElementById("price");
const output = document.querySelector(".price-output");

slider.addEventListener("input", function () {
    output.textContent = this.value;
});

output.textContent = slider.value;
//second slider

const slider_invite = document.getElementById("max-invite");
const output_invite = document.querySelector(".invite-output");

slider_invite.addEventListener("input", function () {
    output_invite.textContent = this.value;
});

output_invite.textContent = slider_invite.value;

// Wait for the page to finish loading
document.addEventListener(
    "DOMContentLoaded",
    () => {
        // Attach `change` event listener to checkbox
        document
            .getElementById("billing-checkbox")
            .addEventListener("change", toggleBilling);
    },
    false
);

function toggleBilling() {
    // Select the billing text fields
    const billingItems = document.querySelectorAll('#billing input[type="text"]');
    // Select the billing text labels
    const billingLabels = document.querySelectorAll(".billing-label");

    // Toggle the billing text fields and labels
    for (let i = 0; i < billingItems.length; i++) {
        billingItems[i].disabled = !billingItems[i].disabled;

        if (
            billingLabels[i].getAttribute("class") === "billing-label disabled-label"
        ) {
            billingLabels[i].setAttribute("class", "billing-label");
        } else {
            billingLabels[i].setAttribute("class", "billing-label disabled-label");
        }
    }
}
