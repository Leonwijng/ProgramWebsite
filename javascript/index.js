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
            src="./models/office_computer.glb" 
            alt="Retro Computer" 
            auto-rotate 
            camera-controls
            class="w-full h-[300px] mt-4">
        </model-viewer>
        `;
    }

    return `
        <model-viewer 
            id="modelViewer"
            src="./models/office_computer.glb" 
            alt="Retro Computer" 
            camera-controls
            class="w-full h-[300px] mt-4">
        </model-viewer>
        `;
}