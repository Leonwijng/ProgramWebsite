let apiKey = "e513f8f350bd40b44869979a19213b16";
let city = "Amsterdam";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=nl`;

async function getWeather() {
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        let temperature = data.main.temp;
        let weatherDescription = data.weather[0].description;
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;

        document.getElementById("city").innerText = `Het weer in ${city}`;
        document.getElementById("temperature").innerText = `Temperatuur: ${temperature}°C`;
        document.getElementById("description").innerText = `Beschrijving: ${weatherDescription}`;
        document.getElementById("humidity").innerText = `Luchtvochtigheid: ${humidity}%`;
        document.getElementById("windSpeed").innerText = `Windsnelheid: ${windSpeed} m/s`;
    } catch (error) {
        console.error("Fout bij het ophalen van weerdata:", error);
    }
}
getWeather();

let rotate = false;

function HandleRotate() {
    rotate = !rotate;

    const md = document.getElementById("mdl-34");
    if (!md) return;

    console.log(rotate);

    md.innerHTML = loadModel(rotate);
}

function loadModel(rotate) {
    if (rotate) {
        return `
        <model-viewer 
            id="modelViewer"
            src="./models/glr/scene.gltf" 
            alt="Retro Computer" 
            camera-controls 
            auto-rotate
            loading="lazy"
            class="w-full h-[300px] mt-4">
        </model-viewer>
        `;
    }

    return `
        <model-viewer 
            id="modelViewer"
            src="./models/glr/scene.gltf" 
            alt="Retro Computer" 
            loading="lazy"
            auto-rotate
            class="w-full h-[300px] mt-4">
        </model-viewer>
        `;
}

function toggleWeather() {
    let weatherBox = document.getElementById('weather');
    let toggleBtn = document.getElementById('toggle-btn');

    if (weatherBox.classList.contains('hidden')) {
        weatherBox.classList.remove('hidden'); 
        toggleBtn.innerText = "✖"; 
    } else {
        weatherBox.classList.add('hidden'); 
        toggleBtn.innerHTML = '<img width="24" height="24" src="https://img.icons8.com/material-outlined/24/minus.png" alt="minus"/>';
    }
}

function toggleModel() {
    let modelBox = document.getElementById('model-content');
    let toggleBtn = document.getElementById('toggle-model-btn');

    if (modelBox.classList.contains('hidden')) {
        modelBox.classList.remove('hidden'); 
        toggleBtn.innerText = "✖"; 
    } else {
        modelBox.classList.add('hidden'); 
        toggleBtn.innerHTML = '<img width="24" height="24" src="https://img.icons8.com/material-outlined/24/minus.png" alt="minus"/>';
    }
}

function toggleFrameworks() {
    let frameworksBox = document.getElementById('frameworks-content');
    let toggleBtn = document.getElementById('toggle-frameworks-btn');

    if (frameworksBox.classList.contains('hidden')) {
        frameworksBox.classList.remove('hidden'); 
        toggleBtn.innerText = "✖"; 
    } else {
        frameworksBox.classList.add('hidden'); 
        toggleBtn.innerHTML = '<img width="24" height="24" src="https://img.icons8.com/material-outlined/24/minus.png" alt="minus"/>';
    }
}
