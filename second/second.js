var container = document.querySelector(".container");
var love = document.querySelector("i");
var check = 0;

container.addEventListener("dblclick", function () {
  if (check == 0) {
    love.style.transform = "translate(-50px, -50px) scale(1)";
    love.style.opacity = 0.8;
    check = 1;
  }
  setTimeout(function () {
    love.style.transform = "translate(-50px, -50px) scale(0)";
  }, 2000);
  setTimeout(function () {
    love.style.opacity = 0;
    check = 0;
  }, 1000);
});
