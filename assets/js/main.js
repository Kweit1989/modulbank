document.addEventListener("DOMContentLoaded", function () {

    // Бургер меню 
    const menuBurger = document.querySelector('.menu-burger');
    menuBurger.addEventListener('click', function(){
        const menuIxon = document.querySelector('.menu-burger_icon');
        const menu = document.querySelector('.menu');
        menuIxon.classList.toggle('active');
        menu.classList.toggle('active');
    })


    // Выподающие меню
    const menuArrows = document.querySelectorAll('.menu-arrow');
    menuArrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        const menuItem = arrow.closest('.menu-item');
        const menuArrowSvg = menuItem.querySelector('.menu-arrow_svg');
        const submenu = menuItem.querySelector('.menu_sub');
  
        // Проверка: открыто ли меню
        const isOpen = submenu.classList.contains('open');
  
        if (isOpen) {
            submenu.style.height = submenu.scrollHeight + 'px';
            requestAnimationFrame(() => {
              submenu.style.height = '0px';
            });
            submenu.classList.remove('open');
            menuArrowSvg.classList.remove('rotated');
        
          } else {
            submenu.style.height = submenu.scrollHeight + 'px';
            submenu.classList.add('open');
            menuArrowSvg.classList.add('rotated');
            
            submenu.addEventListener('transitionend', function handler() {
              submenu.style.height = 'auto';
              submenu.removeEventListener('transitionend', handler);
            });
          }
      });
    });


    //  Инициализация Swiper
    const swiper = new Swiper('.header-markitplaces', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 3.5,
            },
            1024: {
                slidesPerView: 4.5,
            }
        }
    });


    // Инициализация маски телефона 
    const phoneInput = document.querySelector('.form-number');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(phoneInput);

});
  