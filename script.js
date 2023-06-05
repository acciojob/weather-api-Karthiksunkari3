//your JS code here. If required.
// Function to fetch weather data from the API
async function fetchWeatherData() {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=your-location`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display the weather data
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to display weather data on the webpage
function displayWeatherData(data) {
    const weatherDataElement = document.getElementById('weather-data');

    // Extract the necessary information from the API response
    const location = data.location.name;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    // Create HTML markup for displaying the weather data
    const markup = `
        <h1>Weather Data</h1>
        <p>Location: ${location}</p>
        <p>Temperature: ${temperature} &#8451;</p>
        <p>Condition: ${condition}</p>
    `;

    // Insert the markup into the weatherDataElement
    weatherDataElement.innerHTML = markup;
}

// Call the fetchWeatherData function to initiate the API request
fetchWeatherData();
