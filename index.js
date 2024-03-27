// Luam valoarea cheii City din Local Storage
let currentCityFromLS = localStorage.getItem("city");

// Pasul urmator este sa actualizam orasul afisat pe ecrean daca avem cheia city in localStorage
const currentCityTag = document.querySelector(".current-city");
if (currentCityFromLS) {
    currentCityTag.innerHTML = currentCityFromLS;
}
// Daca nu avem cheia 'city' in local Storage, atunci setam ca valoare default Bucuresti - atat pentru localStorage cat si pentru variabila currentCityFromLs.
if (!currentCityFromLS) {
    localStorage.setItem("city", "București");
    currentCityFromLS = "București";
}
// AAfisam vremea curenta folosind o functie din alt fisier

displayCurrentWeather(currentCityFromLS);
// Afisam vremea pe urmatoarele 5 zile 
displayWeatherForecast(currentCityFromLS);