// 타이핑 이벤트
const firstContent = "안녕하세요! 저는 프론트엔드 개발자 전유빈입니다.";
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

const secondContent = "성실하고 창의적인 개발자가 되는 것이 목표입니다!";
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

// 피아노 건반 사운드 이벤트
function playSound(soundFile) {
  var audio = document.getElementById("audio");
  audio.src = soundFile;
  audio.play();
}