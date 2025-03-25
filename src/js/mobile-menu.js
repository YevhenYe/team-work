const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtnBurger = document.querySelector(".mob-menu");
const mobileMenuBtnClose = document.querySelector(".mob-menu-close");

mobileMenuBtnBurger.addEventListener("click", () => {
  mobileMenu.classList.add("is-open-mobile-menu");
});

mobileMenuBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open-mobile-menu");
});

const menuLinks = document.querySelectorAll(".mobile-menu-btn");

menuLinks.forEach((link) => {
  const isModalTrigger = link.hasAttribute("data-modal-open");

  if (!isModalTrigger) {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1); 
      const targetElement = document.getElementById(targetId);

      mobileMenu.classList.remove("is-open-mobile-menu");

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    });
  }
});