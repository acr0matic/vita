import { StyleClass, breakpoint } from "../global/settings";
import { MediaQuery } from "../global/func";

const menu = document.querySelector('.menu');

if (menu) {
  const toggleMenu = (isOpen) => {
    menu.classList.toggle(StyleClass.state.open, isOpen);
    document.body.classList.toggle(StyleClass.body.scroll, isOpen);
  };

  window.addEventListener('click', (e) => {
    if (MediaQuery(breakpoint.tablet)) {
      const target = e.target;

      if (target.closest('.header__burger')) {
        const isMenuOpen = menu.classList.contains(StyleClass.state.open);
        toggleMenu(!isMenuOpen);
      }

      else if (!target.closest('.menu__wrapper')) {
        toggleMenu(false);
      }

      else if (target.closest('.menu__close')) {
        toggleMenu(false);
      }
    }
  });
}
