const modal = document.querySelector("[data-modal]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const mobileMenu = document.querySelector(".mobile-menu");

document.querySelectorAll("[data-modal-open]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("is-open");

    if (mobileMenu) {
      mobileMenu.classList.remove("is-open-mobile-menu");
    }
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});