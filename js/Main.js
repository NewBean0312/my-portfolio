// 타이핑 이벤트
const firstContent = "Hi. I'm YuBeen, Front-End Developer.";
const firstText = document.querySelector(".text-1");
let i = 0;

function FirstTyping() {
  if (i < firstContent.length) {
    let txt = firstContent.charAt(i);
    firstText.innerHTML += txt;
    i++;
  }
}
setInterval(FirstTyping, 120);

const secondContent = "My dream is to become a creative developer.";
const secondText = document.querySelector(".text-2");
let j = 0;

function SecondTyping() {
  if (j < secondContent.length) {
    let txt = secondContent.charAt(j);
    secondText.innerHTML += txt;
    j++;
  }
}
setInterval(SecondTyping, 100);