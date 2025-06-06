import { Swiper } from "swiper";
import { EffectFade } from "swiper/modules";

const tabs = document.querySelectorAll('.b-tabs');

for (const tab of tabs) {
  const controls = tab.querySelectorAll('.b-tabs__action .button');

  for (const [index, control] of controls.entries()) {
    control.addEventListener('click', () => {
      const currentActive = tab.querySelector('.b-tabs__action .is-active');
      if (currentActive) currentActive.classList.remove('is-active');

      control.classList.add('is-active');
    });
  }
}