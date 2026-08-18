const btn = document.getElementById("btn");
const content = document.getElementById("content");
const vid = document.getElementById("vid");

const h1 = document.querySelector("h1");
const p = document.querySelector("p");

vid.hidden = true;
// content.hidden = true;

btn.addEventListener("click", () => {
  vid.hidden = false;
  content.hidden = true;
});

vid.addEventListener("ended", () => {
  vid.hidden = true;
  content.hidden = false;

  btn.remove();
  p.remove();
  h1.innerHTML = "YOU ARE BRAVE";
});
