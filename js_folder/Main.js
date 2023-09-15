// 마우스 따라오는 이벤트
const mouseCursor1 = document.querySelector(".mouse-cursor");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  mouseCursor1.style.left = mouseX + 15 + "px";
  mouseCursor1.style.top = mouseY + 15 + "px";
});

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

// 화면 전환 이벤트
jQuery(function ($) {
  $("body").css("display", "none");
  $("body").fadeIn(2000);
  $("a.transition").click(function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });
  function redirectPage() {
    window.location = linkLocation;
  }
});
