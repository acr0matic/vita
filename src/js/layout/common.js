// history.scrollRestoration = 'manual';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { OverlayScrollbars } from 'overlayscrollbars';
import { StyleClass } from "../global/settings";

import { Swiper } from "swiper";
import { Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector('.page');
if (body) {
  const bodyScroll = OverlayScrollbars(body, {});
  const classObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      const isScrollDisabled = mutation.target.classList.contains(StyleClass.body.scroll);
      const overflow = isScrollDisabled ? 'hidden' : 'scroll';

      bodyScroll.options({
        overflow: {
          y: overflow,
        },
      });
    }
  });

  classObserver.observe(document.body, { attributes: true });
}

new Swiper('#s-brands .swiper', {
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
