async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "183b6b7d5d00bb2277c8bedbdc9cb5c0"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.querySelector(".container").style.backgroundColor = "#f1f8e9";
            document.body.style.backgroundColor = "#fffde7";
            document.getElementById("weatherResult").style.color = "#2e7d32";

            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = `City not found. Please try again.`;
            document.getElementById("weatherResult").classList.add('error');
        }
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `Error fetching weather data. Please try again.`;
        document.getElementById("weatherResult").classList.add('error');
    }
}
