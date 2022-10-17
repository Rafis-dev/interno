new WOW().init();

const iconMenu = document.querySelector('.icon-menu');
const body = document.body;
if (iconMenu) {
  const menuBody = document.querySelector('.header__list');
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('icon-menu_active');
    menuBody.classList.toggle('header__list_active');
    body.classList.toggle('_lock');
  });
}