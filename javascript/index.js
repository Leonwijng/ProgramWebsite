const apiKey = "e513f8f350bd40b44869979a19213b16"; // Vervang met je eigen API-sleutel
const city = "Amsterdam"; // Stel de stad in waarvoor je het weer wilt ophalen
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=nl`;

//weer te halen en weer te geven
async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Haal de benodigde informatie uit de API-respons
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        // Maak een tekst die het weer samenvat
        const weatherContent = `
            <h1> Ik kan api gebruiken</h1>
            <h2>Het weer in ${city}</h2>
            <p>Temperatuur: ${temperature}°C</p>
            <p>Beschrijving: ${weatherDescription}</p>
            <p>Luchtvochtigheid: ${humidity}%</p>
            <p>Windsnelheid: ${windSpeed} m/s</p>
        `;

        // Toon de weerinformatie op de pagina
        document.getElementById("weather").innerHTML = weatherContent;
    } catch (error) {
        console.error("Fout bij het ophalen van weerdata:", error);
    }
}

// Haal het weer op bij het laden van de pagina
getWeather();