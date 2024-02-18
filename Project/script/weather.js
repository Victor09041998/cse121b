// Define API key and base URL for OpenWeatherMap API
const apiKey = '6a1a3d12e180e7afea531388e72b95c0'; // 'YOUR_API_KEY'
const apiUrl = 'https://api.openweathermap.org/data/2.5/';

// Function to fetch weather data from the API
async function getWeather() {
  // Get the location input from the user
  const location = document.getElementById('location').value;
  // Construct the API URL with the location and API key
  const url = `${apiUrl}weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    // Fetch weather data from the API
    const response = await fetch(url);
    // Parse the JSON response
    const data = await response.json();
    // Log the fetched data to the console
    console.log(data);

    // Call the function to display the current weather
    displayCurrentWeather(data);
  } catch (error) {
    // Handle errors if fetching weather data fails
    console.error('Error fetching current weather:', error);
  }
}

// Function to display current weather information on the webpage
function displayCurrentWeather(data) {
  // Get the div element where the weather information will be displayed
  const currentWeatherDiv = document.getElementById('currentWeather');
  // Clear any existing content in the div
  currentWeatherDiv.innerHTML = 'getWeather';

  // Destructure the data object to extract relevant weather information
  const { name, main, weather } = data;
  // Extract weather description, temperature, and humidity
  const weatherDescription = weather[0].description;
  const temperature = main.temp;
  const humidity = main.humidity;

  // Create HTML content to display weather information
  const weatherInfo = `
    <h2>Current Weather in ${name}</h2>
    <p>Description: ${weatherDescription}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
  `;

  // Update the div with the weather information
  currentWeatherDiv.innerHTML = weatherInfo;
}
