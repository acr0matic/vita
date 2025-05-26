/* Все объекты конфигураций для скриптов */

// Повторяющиеся стили
export const StyleClass = {
  mobile: {
    open: 'menu--open',
  },

  body: {
    scroll: 'scroll-lock'
  },

  state: {
    open: 'is-open',
    active: 'is-active',
  }
};

// Для адаптивности скриптов
export const breakpoint = {
  mobile: '(max-width: 800px)',
};

// Базовые настройки для MicroModal.js
export const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
  disableScroll: true,

  onShow: modal => {
    window.currentModal = modal.id;
  },

  onClose: () => {
    window.currentModal = undefined;
  }
};
