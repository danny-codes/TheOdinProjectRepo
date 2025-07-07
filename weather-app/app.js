const form = document.querySelector('form');
const locationInput = document.querySelector('#location');
const btn = document.querySelector('button');

// btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     if (!locationInput.value == '') {
//         getForecast();
//     }
// });
// or
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if (form.checkValidity()) {
    // alert("Input is valid. You are now going to get your weather forecast displayed!");
    // // getForecast();
    // } else {
    // form.reportValidity();
    // }
    if (!locationInput.value == '') {
        // getForecast();
        alert('Input is valid. You are now going to get your weather forecast displayed!');
    }
});

function checkInput() {
    locationInput.setCustomValidity('');
    if (locationInput.validity.valueMissing) {
        locationInput.setCustomValidity('Please enter a place (e.g. Leon');
    } else if (locationInput.validity.typeMismatch) {
        locationInput.setCustomValidity('You need to enter a name of a city, town, place');
    }
    locationInput.reportValidity();
};

window.onload = () => {
    locationInput.oninput = checkInput;
};

// form.onsubmit = func();
locationInput.addEventListener('blur', checkInput);

async function getForecast() {
    let input = locationInput.value;
    const response = await fetch(`visual cross api${input}`,{mode: cors});
    const weatherData = await response.json();
    // need to get specific data and display it.
};