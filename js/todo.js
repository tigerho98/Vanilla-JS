const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
//form과 ul,input을 js로 불러내기
//const toDoInput = document.querySelector("#todo-form input");도 동일
let toDos = [];
//toDos 목록을 localStorage에 저장하기 위해 빈 array 생성
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify() => string으로 바꾸어줌
  //JSON.stringify쓰기전 저장된 value -> a,b,c
  //JSON.stringify쓴 후 -> ["a","b","c"]
  //JSON.parse("[1,2,3,4]") = [1,2,3,4]
}
//toDos array를 text(array형태가아님!)로 localStorage에 저장
//JSON.parse()를 이용 =>array로 바꾸기

function deleteToDo(event) {
  const li = event.target.parentElement;
  //event.target.parentElement => target :button , parentElement:li(클릭된 element의 부모)
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //클릭한 li.id와 다른 toDO는 남겨두고 나머진 삭제하는 array
  //typeof li.id =>string   typeof toDo.id =>number
  //parseInt(li.id) => li.id를 int(number)로 바꿔줌
  li.remove();
  //todo삭제
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  //li에 id추가 (newTodo의 id)
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  //li와 span생성 후 li안에 span넣기
  //span의 내용에 newTodo 할당(newTodo는 input값)
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  //Todo를 지우는 button 생성
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  //li안에 span,button 넣기
  //toDoList(ul)안에 li넣기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //이 시점에선 newTodo는 input의 value를 비우기 전의 값
  toDoInput.value = "";
  //input칸 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  //text가 아니라 object를 만들고 싶음(각 todo에 random id를 부여하기 위해)
  toDos.push(newTodoObj);
  //toDos array에 항목을 추가
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // parsedToDos.forEach(sayHello);
  // parsedToDos의 각각의 element에 대해서 sayHello함수 실행
  // parse=["a","b","c"] => sayHello("a"), sayHello("b"), sayHello("c") 등을 수행
  toDos = parsedToDos;
  //toDos가 새로고침 후에도 빈 array로 시작되면 새로고침 전 toDos를 유지할 수 없음
  //따라서 toDos를 업데이트 해 주기 위해 써줌
  parsedToDos.forEach(paintToDo);
  //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
  // =>화살표함수
  //이렇게 해도 되고 위에 sayHello함수로 해도 됨
}

//지우고 싶은 item을 제외한 새로운 array를 만든다 => .filter()
/* 
function sexyFilter() {}

[1, 2, 3, 4].filter(sexyFilter)

sexyFilter(1) = 1
sexyFilter(2) = 2
sexyFilter(3) = 3
sexyFilter(4) = 4

!!!만약 새 array에도 1, 2, 3, 4를 포함하고 싶으면
sexyFilter 함수는 반드시 true를 return해야함
만약false를 리턴하면 그item은 새array에 포함되지 않음!!!
*/
