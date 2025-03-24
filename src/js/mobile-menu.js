(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття

    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();

// import './mobile-menu.js'

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtnBurger = document.querySelector('.mob-menu');
const mobileMenuBtnClose = document.querySelector('.mob-menu-close');

function f1() {
  mobileMenu.classList.add('is-open-mobile-menu')
}

function f2() {
  mobileMenu.classList.toggle('is-open-mobile-menu')
}
mobileMenuBtnBurger.addEventListener('click', f1);
mobileMenuBtnClose.addEventListener('click', f2);

(() => {
  const refs = {
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    mobileMenu: document.querySelector('.mobile-menu'),
  };
  // Открытие модалки по всем кнопкам с data-modal-open
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // если это <a href="#">
      refs.modal.classList.add('is-open');         // открыть модалку
      refs.mobileMenu.classList.remove('is-open-mobile-menu'); // закрыть мобильное меню, если открыто
    });
  });
  // Закрытие модалки
  refs.closeModalBtn.addEventListener("click", () => {
    refs.modal.classList.remove("is-open");
  });
  // Мобильное меню логика
  const mobileMenuBtnBurger = document.querySelector('.mob-menu');
  const mobileMenuBtnClose = document.querySelector('.mob-menu-close');
  function openMobileMenu() {
    refs.mobileMenu.classList.add('is-open-mobile-menu');
  }
  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle('is-open-mobile-menu');
  }
  mobileMenuBtnBurger.addEventListener('click', openMobileMenu);
  mobileMenuBtnClose.addEventListener('click', toggleMobileMenu);
  // При клике на любую ссылку в мобильном меню — закрываем его
  const menuLinks = document.querySelectorAll('.mobile-menu-btn');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.mobileMenu.classList.remove('is-open-mobile-menu');
    });
  });
})();