import { Swiper } from "swiper";
import { Pagination } from "swiper/modules";

import { breakpoint } from "../../global/settings";
import { MediaQuery } from "../../global/func";

if (MediaQuery(breakpoint.mobile)) {
  const sliders = document.querySelectorAll('#cp-catalog-brands .brands__content .swiper');
  for (const slider of sliders) {
    new Swiper(slider, {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,

      pagination: {
        el: slider.parentNode.querySelector('#cp-catalog-brands .swiper-pagination'),
      },

      breakpoints: {
        540: {
          slidesPerView: 2,
        },
      }
    });
  }
}
