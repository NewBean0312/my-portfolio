// Slick : 슬라이드 배너
$(".slide-show").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slide-show",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: true,
  prevArrow: ".arrows > .btn-arrow-left",
  nextArrow: ".arrows > .btn-arrow-right",
});

// 마우스 따라오는 이벤트
const mouseCursor1 = document.querySelector(".mouseCursor");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  mouseCursor1.style.left = mouseX + 15 + "px";
  mouseCursor1.style.top = mouseY + 15 + "px";
});

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
