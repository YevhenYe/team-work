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

