import './styles/styles.css';
import gifImage from './img/loading-animation.gif';
const form = document.querySelector('form');
const locationInput = document.querySelector('#location');
const btn = document.querySelector('button');
const apiKey = 'WJRKYHPYQK6DN2FABYSQEBNL7';
let weatherData = null;
let loader = document.querySelector('#gif');
loader.src = gifImage;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (locationInput.checkValidity()) {
        console.log('Input is valid.')
        console.log(`User queried location: ${locationInput.value}`);
        weatherData = null;
        getWeather()
    } else {
        alert('Input is invalid', locationInput.validationMessage);
    }
});

function checkInput() {
    locationInput.setCustomValidity('');
    if (locationInput.checkValidity()) {
        console.log('Input is valid.');;
    } else if (locationInput.validity.valueMissing) {
        locationInput.setCustomValidity('Please enter a place (e.g. Berlin)');
    } else if (locationInput.validity.patternMismatch) {
        locationInput.setCustomValidity('Only letters, spaces, and hyphens are allowed.');
    } 
    locationInput.reportValidity();
};

window.onload = () => {
    locationInput.oninput = checkInput;
};

locationInput.addEventListener('blur', checkInput);

async function updateIcon(weather) {
    import(`./icons/${weather}.svg`)
      .then((module) => {
        console.log(module.default); // URL to your bundled SVG
        document.getElementById("weather-icon").src = module.default;
      })
      .catch((err) => {
        console.error("Failed to load icon, using fallback");
        document.getElementById("weather-icon").src = "./icons/default.svg";
      });
}

async function getWeather() {
    document.getElementById('weatherDiv').classList.add('hidden');
    if (weatherData) {
        console.log('Returning cached weather data.');
        return weatherData;
    }
    try {
        loader.classList.remove('hidden');
        let placeName = encodeURIComponent(locationInput.value.trim());
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${placeName}/today/today?key=${apiKey}`,{mode: 'cors'});
        const data = await response.json();
        weatherData = data;
        console.log(data);
        processWeather();
        return data;
    } catch(e) {
        console.log(e);
    } finally {
        loader.classList.add('hidden');
    }
};

function processWeather() {
    //process the JSON data, return an object
    if (!weatherData) {
        console.warn('No weather data available yet');
        return;
    }
    // process relevant data here
    console.log('City: '+ weatherData.address);
    console.log('Temperature in F: '  + weatherData.currentConditions.temp);
    console.log('Condition: ' + weatherData.currentConditions.conditions);
    console.log('Description: ' + weatherData.description);
    console.log('Time: ' + weatherData.currentConditions.datetime);
    let iconName = weatherData.days[0].icon;
    console.log(iconName);
    updateIcon(iconName);

    document.getElementById('locationName').textContent = weatherData.address;
    document.getElementById('temperature').textContent = `${weatherData.currentConditions.temp} °F`;
    document.getElementById('condition').textContent = weatherData.currentConditions.conditions;
    document.getElementById('description').textContent = weatherData.description;
    document.getElementById('time').textContent = weatherData.currentConditions.datetime;

    document.getElementById('weatherDiv').classList.remove('hidden');
};