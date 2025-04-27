document.addEventListener("DOMContentLoaded", () => {

  // ==== Бургер меню ====
  const menuBurger = document.querySelector('.menu-burger');
  const menuIcon = document.querySelector('.menu-burger_icon');
  const menu = document.querySelector('.menu');

  menuBurger.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // ==== Выпадающие меню ====
  const menuArrows = document.querySelectorAll('.menu-arrow');

  function closeAllSubmenus(exceptSubmenu = null) {
    document.querySelectorAll('.menu_sub.open').forEach(openSubmenu => {
      if (openSubmenu !== exceptSubmenu) {
        openSubmenu.style.height = openSubmenu.scrollHeight + 'px';
        requestAnimationFrame(() => {
          openSubmenu.style.height = '0px';
        });
        openSubmenu.classList.remove('open');

        const openArrowSvg = openSubmenu.closest('.menu-item').querySelector('.menu-arrow_svg');
        openArrowSvg.classList.remove('active');
      }
    });
  }

  function toggleSubmenu(submenu, arrowSvg) {
    const isOpen = submenu.classList.contains('open');

    if (isOpen) {
      submenu.style.height = submenu.scrollHeight + 'px';
      requestAnimationFrame(() => {
        submenu.style.height = '0px';
      });
      submenu.classList.remove('open');
      arrowSvg.classList.remove('active');
    } else {
      closeAllSubmenus(submenu);
      submenu.style.height = submenu.scrollHeight + 'px';
      submenu.classList.add('open');
      arrowSvg.classList.add('active');

      submenu.addEventListener('transitionend', function handler() {
        submenu.style.height = 'auto';
        submenu.removeEventListener('transitionend', handler);
      });
    }
  }

  menuArrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
      e.stopPropagation();
      const menuItem = arrow.closest('.menu-item');
      const menuArrowSvg = menuItem.querySelector('.menu-arrow_svg');
      const submenu = menuItem.querySelector('.menu_sub');

      toggleSubmenu(submenu, menuArrowSvg);
    });
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.menu_sub') && !target.closest('.menu-arrow')) {
      closeAllSubmenus();
    }
  });

  // ==== Инициализация Swiper ====
  new Swiper('.header-markitplaces', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 1.5 },
      768: { slidesPerView: 3.5 },
      1024: { slidesPerView: 4.5 },
    }
  });

  // ==== Инициализация маски телефона ====
  const phoneInput = document.querySelector('.form-number');
  if (phoneInput) {
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(phoneInput);
  }

});
