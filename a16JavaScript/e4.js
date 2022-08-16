const close = document.querySelector(".close");
const btnModal = document.querySelector("button");
const modalWrap = document.querySelector(".modal-wrap");
const article = document.querySelector(".article");

function activeModal() {
  modalWrap.classList.toggle("active");
  article.classList.toggle("activeBlur");
}

btnModal.addEventListener("click", activeModal);

close.addEventListener("click", activeModal);
