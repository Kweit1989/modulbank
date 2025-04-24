document.addEventListener("DOMContentLoaded", function () {

    const menuBurger = document.querySelector('.menu-burger');

    menuBurger.addEventListener('click', function(){
        const menuIxon = document.querySelector('.menu-burger_icon');
        const menu = document.querySelector('.menu');
        menuIxon.classList.toggle('active');
        menu.classList.toggle('active');
    })











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
  });
  