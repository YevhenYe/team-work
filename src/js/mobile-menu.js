// Находим элементы меню
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtnBurger = document.querySelector(".mob-menu");
const mobileMenuBtnClose = document.querySelector(".mob-menu-close");

// Открытие по бургеру
mobileMenuBtnBurger.addEventListener("click", () => {
  mobileMenu.classList.add("is-open-mobile-menu");
});

// Закрытие по крестику
mobileMenuBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open-mobile-menu");
});

// Закрытие меню по клику на ссылку + плавный scroll
const menuLinks = document.querySelectorAll(".mobile-menu-btn");

menuLinks.forEach((link) => {
  const isModalTrigger = link.hasAttribute("data-modal-open");

  // Если это НЕ Order Service (не открывает модалку)
  if (!isModalTrigger) {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Остановим стандартную прокрутку

      const targetId = link.getAttribute("href").substring(1); // убираем #
      const targetElement = document.getElementById(targetId);

      // Закрываем меню
      mobileMenu.classList.remove("is-open-mobile-menu");

      // Плавно скроллим к нужной секции
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 300); // Даем анимации меню закрыться
      }
    });
  }
});