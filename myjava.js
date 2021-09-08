// Working Clock
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("displayclock").innerText = time;
  document.getElementById("displayclock").textContent = time;

  setTimeout(showTime, 1000);

}

// Date Real-time
showTime();

n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

var degrees = 0;
$(".circle").click(function() {
  degrees += 90;
  $(this).css("transform", "rotate(" + degrees + "deg)");
});

// Animation

// google analytics


jQuery(document).ready(function($) {
  var deviceAgent = navigator.userAgent.toLowerCase();
  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $("html").addClass("ios");
    $("html").addClass("mobile");
  }
  if (navigator.userAgent.search("MSIE") >= 0) {
    $("html").addClass("ie");
  } else if (navigator.userAgent.search("Chrome") >= 0) {
    $("html").addClass("chrome");
  } else if (navigator.userAgent.search("Firefox") >= 0) {
    $("html").addClass("firefox");
  } else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    $("html").addClass("safari");
  } else if (navigator.userAgent.search("Opera") >= 0) {
    $("html").addClass("opera");
  }
});

// Selector

$('select').on('change', function(){
    $('body,html').animate({ scrollTop: $('#' + $(this).val()).position().top });

});


// // Counter for Images
// $(window).scroll(function () {
//   if ($(window).scrollTop() > 100) {
//       $(".hero").addClass("blur");
//   } else {
//       $(".hero").removeClass("blur");
//   }
// });