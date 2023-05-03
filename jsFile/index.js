// 마우스 따라오는 이벤트
const mouseCursor1 = document.querySelector(".mouseCursor");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  mouseCursor1.style.left = mouseX + 15 + "px";
  mouseCursor1.style.top = mouseY + 15 + "px";
});

// 타이핑 이벤트
const content = "Hi. I'm YuBeen, Front-End Developer.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
  if (i < content.length) {
  let txt = content.charAt(i);
  text.innerHTML += txt;
  i++;
  }
}
setInterval(typing, 150);
