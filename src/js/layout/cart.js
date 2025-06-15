import { StyleClass } from "../global/settings";

const cart = document.querySelector('#cart');

if (cart) {
  const toggleMenu = (isOpen) => {
    cart.classList.toggle(StyleClass.state.open, isOpen);
    document.body.classList.toggle(StyleClass.body.scroll, isOpen);
  };

  window.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.header__cart')) {
      const isMenuOpen = cart.classList.contains(StyleClass.state.open);
      toggleMenu(!isMenuOpen);
    }

    else if (!target.closest('.cart__wrapper')) {
      toggleMenu(false);
    }

    else if (target.closest('.cart__close')) {
      toggleMenu(false);
    }
  });
}
