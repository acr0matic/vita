import { Swiper } from "swiper";
import { Pagination } from "swiper/modules";

new Swiper('#sp-blog-related .swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,

  breakpoints: {
    540: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 4,
    }
  }
});