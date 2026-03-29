(function () {
  const toast = document.querySelector('[data-toast]');
  if (!toast) return;

  const closeBtn = toast.querySelector('[data-toast-close]');
  const storageKey = 'coinspe.toast.dismissed';

  if (window.localStorage && localStorage.getItem(storageKey)) {
    toast.style.display = 'none';
    return;
  }

  toast.classList.add('toast--visible');

  closeBtn?.addEventListener('click', () => {
    toast.classList.remove('toast--visible');
    toast.style.display = 'none';
    if (window.localStorage) {
      localStorage.setItem(storageKey, '1');
    }
  });
})();
