(() => {
  const closeMenu = document.querySelectorAll('.mob-menu-list__link');
  const menu = document.querySelector('.overlay');

  closeMenu.forEach(closeMenu => {
    closeMenu.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    menu.classList.toggle('is-hidden');
  }
})();
