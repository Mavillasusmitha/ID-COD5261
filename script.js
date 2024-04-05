function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            showWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function showWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
