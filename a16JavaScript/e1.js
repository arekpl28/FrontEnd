// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   alert("dsadsa");
// });

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
// });

// function showScroll() {
//   console.log(window.scrollY);
// }

// window.addEventListener("scroll", showScroll);

const spanText = document.querySelector("span");

function scrollText() {
  spanText.textContent = window.scrollY.toFixed();
}

window.addEventListener("scroll", scrollText);
