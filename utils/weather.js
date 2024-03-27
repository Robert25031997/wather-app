// Imi definesc o functie care sa imi returneze inconita de la Open Weather pe baza codului primit de la API
function getWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
}

// Primi viteza vantului in metri/secunda, iar noi vrem sa ii convertim in km/h
function windToKmPerHour(meterPerSec){
    return (meterPerSec * 3600) / 1000;
}