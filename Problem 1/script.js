document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cityName = document.getElementById('cityInput').value;
    getWeather(cityName);
});

function getWeather(cityName) {
    const apiKey = 'a795314b9a34417080d54910240304'; 
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data.current);
            displayForecast(data.forecast.forecastday);
        })
        .catch(error => console.log('Error fetching weather:', error));
}

function displayCurrentWeather(currentWeather) {
    const currentWeatherDiv = document.getElementById('currentWeather');
    currentWeatherDiv.innerHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${currentWeather.temp_c}°C</p>
        <p>Condition: ${currentWeather.condition.text}</p>
        <p>Humidity: ${currentWeather.humidity}%</p>
        <img src="${currentWeather.condition.icon}" alt="Weather icon">
    `;
}

function displayForecast(forecast) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = `<h2>5-Day Forecast</h2>`;
    
    forecast.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <p>${day.date}</p>
            <p>Max Temp: ${day.day.maxtemp_c}°C</p>
            <p>Min Temp: ${day.day.mintemp_c}°C</p>
            <img src="${day.day.condition.icon}" alt="Weather icon">
        `;
        forecastDiv.appendChild(forecastItem);
    });
}
