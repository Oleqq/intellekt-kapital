



document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Swiper.js для меню
    var menuSwiper = new Swiper('.menu-swiper', {
        slidesPerView: 1,
        slidesPerGroup: 3,
        speed: 500,
        simulateTouch: true,
        loop: true,
        
        spaceBetween: 0,
        watchOverflow: true,
        pagination: {
        el: '.promo-swiper-pagination',
        clickable: 'true',
        },
    });

    
  
});


// Обработчик события при клике на пункт меню в Swiper.js
// $('#menu').on('click', 'a', function(e) {
//     e.preventDefault(); // Отмена действия по умолчанию, чтобы избежать перехода по ссылке

//     var anchor = $(this).attr('href'); // Получение якоря из атрибута href ссылки
//     if (anchor.length > 1 && anchor.charAt(0) === '#') { // Проверка, что якорь не пустой и начинается с #
//         // Переключение слайда в Swiper.js по индексу соответствующему якорю
//         var index = $('#menu a').index(this); // Получаем индекс выбранной ссылки в меню
//         menuSwiper.slideTo(index); // Переключаем Swiper.js на соответствующий слайд
//         // Перемещение к нужному якорю в PagePiling.js
//         $.fn.pagepiling.moveTo(anchor.substring(1)); // Удаление символа # из якоря и передача его в метод moveTo
//     }
// });
