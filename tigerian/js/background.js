const images = ["0.jpg", "1.jpg", "2.jpg"];

chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
// document.createElement("img")
// img라는 요소를 html에 생성시킴!
bgimage.src = `img/${chosenImage}`;
// bgimage의 속성 src 지정 => bgimage = <img src=img/1.jpg">
bgimage.classList.add("bgimg");

document.body.appendChild(bgimage);
// body에 element를 추가(append:맨 뒤에 prepend:맨 앞에)
