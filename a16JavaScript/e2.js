const btnDecrease = document.querySelector(".smaller");
const btnIncrease = document.querySelector(".bigger");

const text = document.querySelector("p");

let size = 16;

btnDecrease.addEventListener("click", () => {
  size -= 1;
  text.style.fontSize = size + "px";
});

btnIncrease.addEventListener("click", () => {
  size += 1;
  text.style.fontSize = `${size}px`;
});
