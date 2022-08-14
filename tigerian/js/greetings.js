const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const loginButton = document.querySelector("#login-form button");
// html에서 input, button 가져와서 변수에 할당하기
/* const loginForm=document.querySelector("#login-form)을 지정해두고
 이미 있는 loginForm에서 input과 button찾아와도 됨 
 ex) const loginInput=loginForm.querySelector("input")
 */

const HIDDEN_CLASSNAME = "hidden";
//일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const USERNAME_KEY = "username";
//반드시 같아야만 하는 string이 반복되면 변수로 지정(그래야 오타났는지 알 수 있음)
function onLoginSubmit(event) {
  event.preventDefault();
  //브라우저가 기본 동작을 실행하지 못하게 막아주는 것 (form을 submit해도
  //새로고침하지 못하게 함)(a의 link에서는 이동하지 못하게 함)
  // enter를 누르면 자동으로 form이 submit되지만 이건 우리가 원하는 게 아님
  // form이 submit되면 페이지가 새로고침되기 때문에 이를 막고 싶음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // element에 class 추가
  const username = loginInput.value;
  //loginInput.value => Input된 문자열   username 이라는 변수에 할당
  localStorage.setItem(USERNAME_KEY, username);
  //localStorage에 username저장
  paintGreetings(username);
  /*
  greeting.innerText = `Hello ${username}!`;
  // h1에 username출력
  // "Hello "+username으로 해도 되나 변수+문자열 띄어쓰기 신경 안 쓰고 편하게 쓰는 법
  // `string ${변수}`
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // h1 : shown
  */

  //localStorage는 우리가 브라우저에 뭔가를 저장할 수 있게 해줌(검사-응용프로그램-저장소)
  //localStorage.setItem("key","value"); 키: key 값:value
  //localStorage.getItem("key") => "value" (만약 해당key값이 없다면 null출력)
  //localStorage.removeItem("key") => key없앰(출력:undefined)

  /*      아래 방법은 쓸 수 있으나 html에서 바로 form-input에서 
  required,maxlength 등으로 더 간단히 해결 가능
  
  if (username === "") {
    alert("Please wirte your name");
    // username(input값)가 empty일 경우 문구 출력
  } else if (username.length > 15) {
    alert("Your name is too long");
    // string.lenth => string의 길이
    // username의 길이가 15초과일 때 문구 출력
  }  */
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
//위 두 줄이 반복되므로 함수로 만들자! (onLoginSubmit과 savedUsername쓸 때 반복)

loginForm.addEventListener("submit", onLoginSubmit);
// submit event => enter를 누르거나 click 하면 실행
// 중요!!!!!  브라우저는 onLoginSubmit을 첫 번째 argument로써 추가적인 정보를
//           가진 채로 함수를 호출하게 될 거야.(event가 언제 실행되었는지 마우스를 어디를 눌러서 event가 실행되었는지 등 )

//  loginButton.addEventListener("click", onLoginBtnClick);
//  loginButton을 click하면 function을 실행시키겠다!

const savedUsername = localStorage.getItem(USERNAME_KEY);
//localStorage.getItem("key") => "value" (만약 해당key값이 없다면 null출력)
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);

  /*
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //문제점 : 새로고침했을 때 greeting의 class="hidden"은 없어지지만 greeting의
  //내용도 사라짐 => greeting.innerText는 또 추가해줘야함(새로고침 시 유지하기위해)
  greeting.innerText = `Hello ${savedUsername}!`;
  //여기서는 username변수 존재x(새로고침했으므로)따라서 savedUsername을 지정
  */
}
