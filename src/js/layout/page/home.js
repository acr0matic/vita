import { Swiper } from "swiper";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";

import { breakpoint } from "../../global/settings";
import { MediaQuery } from "../../global/func";

new Swiper('#cp-home-hero .swiper', {
  modules: [Navigation, Autoplay, EffectFade],
  speed: 1000,

  navigation: {
    prevEl: '#cp-home-hero .swiper-button-prev',
    nextEl: '#cp-home-hero .swiper-button-next'
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 5000,
  }
});




if (MediaQuery(breakpoint.mobile)) {
  new Swiper('#s-blog .swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,

    breakpoints: {
      540: {
        slidesPerView: 1.6
      }
    }
  });
}