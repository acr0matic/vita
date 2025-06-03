// history.scrollRestoration = 'manual';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { OverlayScrollbars } from 'overlayscrollbars';
import { StyleClass, breakpoint } from "../global/settings";
import { MediaQuery } from "../global/func";

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

  pagination: {
    el: '#s-brands .swiper-pagination',
  },

  breakpoints: {
    540: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2.5,
    },

    1200: {
      slidesPerView: 4,
    }
  }
});

if (MediaQuery(breakpoint.tablet)) {
  new Swiper('#s-blog .swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,

    pagination: {
      el: '#s-blog .swiper-pagination',
    },

    breakpoints: {
      540: {
        slidesPerView: 1.6
      }
    }
  });
}