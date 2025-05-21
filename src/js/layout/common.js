// history.scrollRestoration = 'manual';

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { OverlayScrollbars } from 'overlayscrollbars';
import { StyleClass } from "../global/settings";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const bodyScroll = OverlayScrollbars(document.querySelector('.page'), {});
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

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  content: document.querySelector('.smooth-content'),
});