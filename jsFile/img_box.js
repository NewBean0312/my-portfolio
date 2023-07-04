// hover 시, 이미지 나타나기
const spanElement1 = document.getElementById("imgSpan1"); // span 태그 요소
const imgBox1 = document.getElementById("img-box1"); // 이미지박스 요소

// 마우스 진입 이벤트 핸들러를 추가.
spanElement1.addEventListener("mouseenter", function () {
  // display: block;
  imgBox1.style.display = "block";
});

// 마우스 이탈 이벤트 핸들러를 추가합니다.
spanElement1.addEventListener("mouseleave", function () {
  // display: none;
  imgBox1.style.display = "";
});

const spanElement2 = document.getElementById("imgSpan2");
const imgBox2 = document.getElementById("img-box2");

spanElement2.addEventListener("mouseenter", function () {
  imgBox2.style.display = "block";
});
spanElement2.addEventListener("mouseleave", function () {
  imgBox2.style.display = "";
});

const spanElement3 = document.getElementById("imgSpan3");
const imgBox3 = document.getElementById("img-box3");

spanElement3.addEventListener("mouseenter", function () {
  imgBox3.style.display = "block";
});
spanElement3.addEventListener("mouseleave", function () {
  imgBox3.style.display = "";
});

const spanElement4 = document.getElementById("imgSpan4");
const imgBox4 = document.getElementById("img-box4");

spanElement4.addEventListener("mouseenter", function () {
  imgBox4.style.display = "block";
});
spanElement4.addEventListener("mouseleave", function () {
  imgBox4.style.display = "";
});

const spanElement5 = document.getElementById("imgSpan5");
const imgBox5 = document.getElementById("img-box5");

spanElement5.addEventListener("mouseenter", function () {
  imgBox5.style.display = "block";
});
spanElement5.addEventListener("mouseleave", function () {
  imgBox5.style.display = "";
});

const spanElement6 = document.getElementById("imgSpan6");
const imgBox6 = document.getElementById("img-box6");

spanElement6.addEventListener("mouseenter", function () {
  imgBox6.style.display = "block";
});
spanElement6.addEventListener("mouseleave", function () {
  imgBox6.style.display = "";
});

const spanElement7 = document.getElementById("imgSpan7");
const imgBox7 = document.getElementById("img-box7");

spanElement7.addEventListener("mouseenter", function () {
  imgBox7.style.display = "block";
});
spanElement7.addEventListener("mouseleave", function () {
  imgBox7.style.display = "";
});