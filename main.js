const btn = document.querySelector(".switch");
const light = document.querySelector("div");
const bg = document.querySelector("body");

btn.addEventListener("click", function () {
  light.classList.toggle("switchon");
  bg.classList.toggle("bgc");

  console.log("działa");
  // light.style.backgroundColor = "yellow"
  // light.style.color = 'white'
});
