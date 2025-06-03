import { Swiper } from "swiper";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";

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