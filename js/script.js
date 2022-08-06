    let expandTextButton = document.querySelector('.section__button');
    let description = document.querySelector('.section__description');

    description.classList.add('hide');
    description.classList.add('description-size');

    expandTextButton.onclick = function() {
        description.classList.toggle('hide');
        description.classList.toggle('description-size');
    };


    let swiperContainer = document.querySelector('.swiper');
    let swiperWrapper = document.querySelector('.swiper-wrapper');
    let swiperSlide = document.querySelectorAll('.swiper-slide');
    let swiperTabs = document.querySelectorAll('.tabs-swiper__tab');
    let tabsButton = document.querySelector('.tabs__button');

    let mobileSize = true;


    if (window.innerWidth < 767) {

        let swiper = new Swiper('.tabs-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

        });
        tabsButton.remove();

    } else {
        swiperContainer.className = '';
        swiperContainer.classList.add('tabs');

        swiperWrapper.className = 'tabs-wrapper';

        for (let i = 0; i < swiperSlide.length; i++) {
            swiperSlide[i].className = 'tabs-container';
            swiperTabs[i].className = '';
            swiperTabs[i].classList.add('tab');
        }

        if (swiperWrapper.className === 'tabs-wrapper') {
            let tabsWidth = swiperWrapper.offsetWidth;

            for (let i = 0; i < swiperSlide.length; i++) {
                tabAmount = Math.floor( tabsWidth / swiperSlide[i].offsetWidth );
            }
            for (let i = tabAmount * 2; i < swiperSlide.length; i++ ) {
                swiperSlide[i].classList.add('tab-hide');
            }
            tabsButton.onclick = function() {

                tabsButton.textContent = 'Скрыть';
                for (let i = tabAmount * 2; i < swiperSlide.length; i++ ) {
                    swiperSlide[i].classList.toggle('tab-hide');
                }
        }
        }
    }