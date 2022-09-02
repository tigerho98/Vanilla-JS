const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];
// 명언 10개가 든 Array (그냥 text가 아님!)
// array => [ :  ,  :  ,  :  ] 로 지정

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.random() => 0~1 사이 랜덤값  Math.random()*10 =>0~10 사이 랜덤값
// Math.round() => 반올림    Math.ceil=> 올림      Math.floor => 내림
// Math.floor(Math.random()*10)   => 0~9 사이 정수값
// 여기선 quotes의 개수만큼 정수값이 필요하므로 quotes.length 이용

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
// array.key값 => value값 출력  todaysQuote.quote => 내용(value)