import { Swiper } from "swiper";
import { Pagination } from "swiper/modules";

import { breakpoint } from "../../global/settings";
import { MediaQuery } from "../../global/func";

if (MediaQuery(breakpoint.mobile)) {
  new Swiper('#cp-catalog-brands .brands__content .swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,

    pagination: {
      el: '#cp-catalog-brands .swiper-pagination',
    },

    breakpoints: {
      540: {
        slidesPerView: 2,
      },
    }
  });
}
