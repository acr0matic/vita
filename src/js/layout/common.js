// history.scrollRestoration = 'manual';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { OverlayScrollbars } from 'overlayscrollbars';
import { StyleClass } from "../global/settings";

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