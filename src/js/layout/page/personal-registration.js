import { Swiper } from "swiper";

if (document.querySelector('#pp-registration')) {
  const controls = document.querySelectorAll('#pp-registration .content__action .button');

  const slider = new Swiper('#pp-registration-content .swiper', {
    speed: 800,
    spaceBetween: 100,
    slidesPerView: 1,
    autoHeight: true,
    simulateTouch: false,
    allowTouchMove: false,
  });

  for (const [index, control] of controls.entries()) {
    control.addEventListener('click', () => {
      const currentActive = document.querySelector('#pp-registration .content__action .is-active');
      if (currentActive) currentActive.classList.remove('is-active');

      control.classList.add('is-active');
      slider.slideTo(index);
    });
  }
}