var currentIdx = 0;
var slideLength = $("movies-flex-container > a > li").length;

function goingleft() {
  if (currentIdx !== slideLength - 1) {
    currentIdx += 1;
  } else {
    currentIdx = 0;
  }
}
function goingright() {
  if (slideLength - 1 !== currentIdx) {
    currentIdx -= 1;
  } else {
    currentIdx = slideLength - 1;
  }
}
$(".goingleft").click(function () {
  goingleft();
});
$(".goingright").click(function () {
  goingright();
});
