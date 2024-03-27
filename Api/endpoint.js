// Api key in general nu ar fi bine sa le stocam in format text in codul nostru - pentru ca oricine ar putea sa le vada si sa le foloseasca. E bine ca ele sa stea pe server, dar in cazul nostru, fiind un API gratuit o sa le stocam aici.
const API_KEY = "a27b59c7fc8328566c6a91efc2648cf4";

// Construim link-urile (endpoint-urile) catre care noi o sa facem request-uri cu JS

function getCurrentWeatherEndpoint(city){
return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

// Declaram a doua functie pe care o vom folosi pentru a lua URL-ul catre API-ul ce ne returneaza date despre vremea pe 5 zile.
function getForecastWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}