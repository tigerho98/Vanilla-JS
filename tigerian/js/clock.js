const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const padHours = String(date.getHours()).padStart(2, "0");
  const padMinutes = String(date.getMinutes()).padStart(2, "0");
  const padSeconds = String(date.getSeconds()).padStart(2, "0");
  /* 
  String(숫자) => 숫자를 문자열로 바꾼다.
  "1".padStart(2,"0")
  이 문자열은 길이가 2인데 부족할시 앞을 "0"으로 채운다 */
  clock.innerText = (`${padHours}:${padMinutes}:${padSeconds}`)
  // ``안에 ${변수} 써주면 다른string과 함께 편하게 출력가능
}

getClock();
// 1초 공백 없이 바로 시계가 실행되도록
setInterval(getClock, 1000);

// setInterval(function,몇ms간격으로);
// 매 Nms초마다 function이 일어나게 하는 기능
// 처음 Nms초도 쉬었다가 함수 실행됨!!!!
// setTimeout(function,ms);
// ms초 후에 function을 실행

/*
new Date() => 오늘 날짜와 시간을 가져옴
const date = new Date();
date.getDate() => 일
date.getDay() => 요일 (일요일:0)
date.getFullYear() => 연도(4자리)
date.getHours() => 시
date.getMinutes() => 분
date.getSeconds() => 초
*/
