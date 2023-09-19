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

