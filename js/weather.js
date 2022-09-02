//user의 위치(geolocation)을 줌
const API_KEY = "a3b071afb7548407bea12601439d9061";

function onGeoOK(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
  //js가 url을 불러줄거임(검사-네트워크에서 확인가능)
  //js가 geolocationPosition을 position에 넣어줄 거임
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
//wifi,위치,gps 등을 주는 함수
//two arguments (성공했을 때 함수, 실패했을 때 함수)
