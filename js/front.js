












// скрипт активации блока обратной связи в секции конатктов
document.addEventListener("DOMContentLoaded", function() {

    // кнопка триггер секции контактов для пк
    var formButtonDesktop = document.querySelector('.form__button.desktop');
    var fromButtonTextDesktop = document.querySelector('.form-text.desktop');

    var contactsTitle = document.querySelector('.contacts__title');
    var contactsContainer = document.querySelector('.contacts__container');
    var contactsForm = document.querySelector('.contacts__form');
    var contactsAdress = document.querySelector('.contacts__adress');
    var contactsWrapper = document.querySelector('.contacts__wrapper');
    var contactsTip = document.querySelector('.contacts__tip');
    var contactsScrollToTop = document.querySelector('.scroll-to-top');

    // кнопка триггер секции контактов для мобильных устройств
    var formButtonMobile = document.querySelector('.form__button.mobile');
    var fromButtonTextMobile = document.querySelector('.form-text.mobile');

    var contactsTitleMobile = document.querySelector('.contacts__title.mobile');
    var contactsContainerMobile = document.querySelector('.contacts__container.mobile');
    var contactsFormMobile = document.querySelector('.contacts__form.mobile');
    var contactsAdressMobile = document.querySelector('.contacts__adress.mobile');
    var contactsWrapperMobile = document.querySelector('.contacts__wrapper.mobile');
    var contactsTipMobile = document.querySelector('.contacts__tip.mobile');
    


    formButtonDesktop.addEventListener('click', function() {
    contactsTitle.classList.add('active');
    contactsContainer.classList.add('active');
    contactsForm.classList.add('active');
    formButtonDesktop.classList.add('active');
    contactsAdress.classList.add('active');
    contactsWrapper.classList.add('active');
    contactsTip.classList.add('active');
    contactsScrollToTop.classList.add('active');
    });

    fromButtonTextDesktop.addEventListener('click', function() {
        contactsTitle.classList.add('active');
        contactsContainer.classList.add('active');
        contactsForm.classList.add('active');
        formButtonDesktop.classList.add('active');
        contactsAdress.classList.add('active');
        contactsWrapper.classList.add('active');
        contactsTip.classList.add('active');
        contactsScrollToTop.classList.add('active');
    });

    formButtonMobile.addEventListener('click', function() {
    contactsTitleMobile.classList.add('active');
    contactsContainerMobile.classList.add('active');
    contactsFormMobile.classList.add('active');
    formButtonMobile.classList.add('active');
    contactsAdressMobile.classList.add('active');
    contactsWrapperMobile.classList.add('active');
    contactsTipMobile.classList.add('active');
    });

    fromButtonTextMobile.addEventListener('click', function() {
        contactsTitleMobile.classList.add('active');
        contactsContainerMobile.classList.add('active');
        contactsFormMobile.classList.add('active');
        formButtonMobile.classList.add('active');
        contactsAdressMobile.classList.add('active');
        contactsWrapperMobile.classList.add('active');
        contactsTipMobile.classList.add('active');
    });

    });













    		// скрипт табов в секции info
            document.addEventListener("DOMContentLoaded", function() {
                const tabs = document.querySelectorAll(".info__tabs p");
                const badges = document.querySelectorAll(".info__badge");
                const blocks = document.querySelectorAll(".info__blocks .block");
        
                tabs.forEach((tab, index) => {
                    tab.addEventListener("click", function() {
                        // Убираем класс active у всех табов
                        tabs.forEach(tab => tab.classList.remove("active"));
                        // Добавляем класс active только к выбранному табу
                        this.classList.add("active");
        
                        // Показываем соответствующий бейдж, скрывая остальные
                        badges.forEach(badge => badge.classList.remove("visible"));
                        badges[index].classList.add("visible");
        
                        // Показываем соответствующий блок, скрывая остальные
                        blocks.forEach(block => block.classList.add("hidden"));
                        blocks[index].classList.remove("hidden");
                    });
                });
            });
    


		// скрипт табов в секции проектов
		document.addEventListener("DOMContentLoaded", function() {
			const tabs = document.querySelectorAll(".projects__tabs p");
			const blocks = document.querySelectorAll(".projects__blocks");
			const backgroundImages = document.querySelectorAll(".projects__bg");
	
			tabs.forEach((tab, index) => {
				tab.addEventListener("click", function() {
					// Убираем класс active у всех табов
					tabs.forEach(tab => tab.classList.remove("active"));
					// Добавляем класс active только к выбранному табу
					this.classList.add("active");
	
					// Показываем соответствующий блок, скрывая остальные
					blocks.forEach(block => block.classList.add("hidden"));
					blocks[index].classList.remove("hidden");
	
					// Показываем соответствующий фон, скрывая остальные
					backgroundImages.forEach(bg => bg.classList.add("hidden"));
					backgroundImages[index].classList.remove("hidden");
				});
			});
		});













document.addEventListener("DOMContentLoaded", function() {
    // скрипт аккордеона в мобилке
(function(){
    var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = ('ontouchstart' in window),
    pointerSupported = ('pointerdown' in window);

    skipClickDelay = function(e){
      e.preventDefault();
      e.target.click();
    }

    setAriaAttr = function(el, ariaType, newProperty){
      el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function(el1, el2, expanded){
      switch(expanded) {
        case "true":
          setAriaAttr(el1, 'aria-expanded', 'true');
          setAriaAttr(el2, 'aria-hidden', 'false');
          break;
        case "false":
          setAriaAttr(el1, 'aria-expanded', 'false');
          setAriaAttr(el2, 'aria-hidden', 'true');
          break;
        default:
          break;
      }
    };
    //function
    switchAccordion = function(e) {
      e.preventDefault();
      var thisAnswer = e.target.parentNode.nextElementSibling;
      var thisQuestion = e.target;
      
      // Если текущий таб открыт, закрываем его
      if (thisQuestion.classList.contains('is-expanded')) {
        setAccordionAria(thisQuestion, thisAnswer, 'false');
        thisQuestion.classList.remove('is-expanded');
        thisQuestion.classList.add('is-collapsed');
        thisAnswer.classList.remove('is-expanded');
        thisAnswer.classList.add('is-collapsed');
        return;
      }

      // Закрываем все открытые табы
      var allAccordionContents = document.querySelectorAll('.accordion-content');
      var allAccordionTitles = document.querySelectorAll('.accordion-title');
      for (var i = 0; i < allAccordionContents.length; i++) {
        setAccordionAria(allAccordionTitles[i], allAccordionContents[i], 'false');
        allAccordionTitles[i].classList.add('is-collapsed');
        allAccordionTitles[i].classList.remove('is-expanded');
        allAccordionContents[i].classList.add('is-collapsed');
        allAccordionContents[i].classList.remove('is-expanded');
      }

      // Открываем выбранный таб
      setAccordionAria(thisQuestion, thisAnswer, 'true');
      thisQuestion.classList.remove('is-collapsed');
      thisQuestion.classList.add('is-expanded');
      thisAnswer.classList.remove('is-collapsed');
      thisAnswer.classList.add('is-expanded');
      thisAnswer.classList.add('animateIn');

      
    };
    for (var i=0,len=accordionToggles.length; i<len; i++) {
      if(touchSupported) {
        accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
      }
      if(pointerSupported){
        accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
      }
      accordionToggles[i].addEventListener('click', switchAccordion, false);
    };
})();
});





document.addEventListener('DOMContentLoaded', function() {
  // Проверяем ширину экрана
  if (window.innerWidth > 1440) {
      // Если ширина экрана больше 1440px, включаем pagepiling
      $('#pagepiling').pagepiling({
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
          sectionsColor: ['#145758', '#145758', '#145758', '#145758'],
          normalScrollElementTouchThreshold: 5,
          touchSensitivity: 5,
          scrollingSpeed: 0, // Отключаем прокрутку между слайдами
          normalScrollElements: '.normal-scroll',
          afterRender: function(){
              // Воспроизводим видео
              $('video').get(0).play();
          },
          afterLoad: function(anchorLink, index){
              // После загрузки каждого слайда
              // index - индекс текущего активного слайда
              $('.swiper-slide').removeClass('active'); // Удаляем класс активности со всех пунктов меню
              $('.swiper-slide').eq(index - 1).addClass('active'); // Добавляем класс активности к текущему пункту меню
              
              // Переключаем слайд в swiper
              swiper.slideTo(index - 1);
          }
      });
  }

  var swiper = new Swiper('.menu-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    freeMode: false,
    scrollingSpeed: 20,
    on: {
        slideChange: function() {
            var activeIndex = this.activeIndex;
            $.fn.pagepiling.moveTo(activeIndex + 1);
        }
    }
});

  // Кнопка открытия меню
  $('.fullscreen-menu__button').click(function() {
      $('#fullscreen-menu-section').toggleClass('open');
  });

  // Кнопка закрытия меню
  $('.fullscreen-menu__button-close, .fullscreen-menu__link').click(function() {
      $('#fullscreen-menu-section').removeClass('open');
  });
});





document.addEventListener('DOMContentLoaded', function() {
  // Функция для плавного скролла к элементу
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
      window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop
      });
  } else {
      console.error('Элемент с id ' + elementId + ' не найден.');
  }
}

// Находим все элементы с href, содержащими id, и добавляем им обработчик события клика
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      scrollToElement(targetId);
  });
});
});

