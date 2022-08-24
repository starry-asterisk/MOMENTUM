//const API_KEY = '969201672b6d2f41e7cb7d4b56bb84d2'; //<- 활성화 된 이후에는 이걸 사용할것 아래는 임시임
const API_KEY = '8451d290dfcbd2e1f0d9f8377c651fc4';

function onGeoOk(position){
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url).then((response) => response.json()).then((data) => {
    console.log(data, data.name, data.weather[0].main);
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} │ ${data.main.temp} ℃`;
   });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
