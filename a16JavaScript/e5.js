const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");

const txt = document.querySelector("p");

function changeText() {
  const scrollHight = window.scrollY;
  const heightS1 = s1.clientHeight;
  const heightS2 = s2.clientHeight;
  const heightS3 = s3.clientHeight;
  const heightS4 = s4.clientHeight;

  const offsetTopS1 = s1.offsetTop;
  const offsetTopS2 = s2.offsetTop;
  const offsetTopS3 = s3.offsetTop;
  const offsetTopS4 = s4.offsetTop;

  if (scrollHight < heightS1) {
    txt.textContent = "Me";
  } else if (scrollHight < heightS2 + offsetTopS2) {
    txt.textContent = "Portfolio";
  } else if (scrollHight < heightS3 + offsetTopS3) {
    txt.textContent = "Offer";
  } else if (scrollHight < heightS4 + offsetTopS4) {
    txt.textContent = "Contact";
  }
  console.log(offsetTopS3);
}

window.addEventListener("scroll", changeText);
