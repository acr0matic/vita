import { Swiper } from "swiper";
import { EffectFade } from "swiper/modules";

export const footer = document.querySelector('#footer');

const authModal = document.querySelector('#modal-auth');

if (authModal) {
  const controls = document.querySelectorAll('#modal-auth .modal__action .button');

  const slider = new Swiper('#modal-auth .swiper', {
    modules: [EffectFade],

    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    autoHeight: true,
    simulateTouch: false,
    allowTouchMove: false,

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  for (const [index, control] of controls.entries()) {
    control.addEventListener('click', () => {
      const currentActive = document.querySelector('#modal-auth .modal__action .is-active');
      if (currentActive) currentActive.classList.remove('is-active');

      control.classList.add('is-active');
      slider.slideTo(index);
    });
  }
}