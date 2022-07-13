(() => {
  const refs = {
    openmodalBtn: document.querySelector('[data-modal-contacts-open]'),
    closemodalBtn: document.querySelector('[data-modal-contacts-close]'),
    modal: document.querySelector('[data-modal-contacts]'),
    body: document.querySelector(".body"),

  };

  refs.openmodalBtn.addEventListener('click', togglemodal);
  refs.closemodalBtn.addEventListener('click', togglemodal);

  function togglemodal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle("no-scroll");

  }
})();
