const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current');
const maxTemp = document.querySelector('#max-temp');
const minTemp = document.querySelector('#min-temp');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');

const forecastContainer = document.querySelector('#forecast-container');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.026&lon=-74.1&units=imperial&appid=4c8cba770a557b659bd55f45bc27eac8';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.026&lon=-74.1&units=imperial&appid=4c8cba770a557b659bd55f45bc27eac8';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    let desc = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));;

    maxTemp.innerHTML = `  ${data.main.temp_max}`;
    minTemp.innerHTML = `  ${data.main.temp_min}`;
    humidity.innerHTML = `  ${data.main.humidity}%`;
    wind.innerHTML = `  ${data.wind.speed.toFixed(1)}`;
}

//Forcast
async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {

    const forecastData = data.list.filter((item) => item.dt_txt.includes('12:00:00'));
  
    const slicedForecastData = forecastData.slice(0, 3);
  
    forecastContainer.innerHTML = '';
    slicedForecastData.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });
  
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecast-item');
      forecastItem.innerHTML = `
        <p>${day}: ${item.main.temp.toFixed(0)}&deg;F</p>
        <img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="${item.weather[0].description}">
      `;
  
      forecastContainer.appendChild(forecastItem);
    });
  }

forecastFetch();

document.addEventListener('DOMContentLoaded', function() {
    apiFetch();
    forecastFetch();
});