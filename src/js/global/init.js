/* eslint-disable no-undef */
/* Прописываются все инициализации и первичные параметры для скриптов */

import LazyLoad from 'vanilla-lazyload';
import HystModal from "../libs/hystmodal";
import "../libs/smoothscroll";
import { StyleClass } from '../global/settings';

/* Ленивая загрузка */

export const lazyImageController = new LazyLoad({
  elements_selector: '.lazy__item:not([data-custom-lazy])',

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    container.classList.remove('lazy--preloader');
  },
});

// Ленивая загрузка без прелоадера и обёртки
export const lazyBackgroundController = new LazyLoad({
  elements_selector: '.lazy-simple',
});

/* --------- */



/* Модальные окна */

window.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('[data-modal]')) document.body.classList.add(StyleClass.body.scroll);
});

export const modalManager = new HystModal({
  linkAttributeName: "data-modal",
  waitTransitions: true,
  backscroll: true,
  afterClose: function () {
    document.body.classList.remove(StyleClass.body.scroll);
  },
});

window.modalManager = modalManager;

/* --------- */
