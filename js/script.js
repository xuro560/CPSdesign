    
    let swiper = document.querySelector('.swiper');
    let swiperWrapper = document.querySelector('.swiper-wrapper');
    let swiperSlide = document.querySelectorAll('.swiper-slide');
    let tabContainer = document.querySelectorAll('.tabs');
    let tabSlide = document.querySelectorAll('.tabs__slide');

    let expandTextButton = document.querySelector('.section__button');
    let description = document.querySelector('.section__description');
    let tabsButton = document.querySelector('.tabs__button');
    
    let tabContainerWidth = tabContainer.offsetWidth;
    let windowWidth = window.innerWidth;
    let tabsWidth = swiper.offsetWidth;

    description.classList.add('hide');
    description.classList.add('description-size');

    expandTextButton.addEventListener( 'click', function() {
        
        description.classList.toggle('hide');
        description.classList.toggle('description-size');

        const initialText = 'Читать далее';
        if (expandTextButton.textContent.includes(initialText)) {
            expandTextButton.textContent = 'Скрыть';
            expandTextButton.classList.toggle('rotate');
        } else {
            expandTextButton.textContent = initialText;
            expandTextButton.classList.toggle('rotate');
        }
    } );

    //mobile window
    if( windowWidth < 768 ) {

        //change swiper view
        new Swiper('.tabs', {
            enabled: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

        });

        if (!swiper.classList.contains('swiper') ) {
            swiper.classList.toggle('swiper');
            swiperWrapper.classList.toggle('swiper-wrapper');
            for ( let slide of swiperSlide) {
                slide.classList.toggle('swiper-slide');
            }
            

        }


    //tab & desktop window
    } else if ( windowWidth > 768 ) {
        
        swiper.classList.toggle('swiper');
        swiperWrapper.classList.toggle('swiper-wrapper');
        for ( let slide of swiperSlide) {
            slide.classList.toggle('swiper-slide');
        }
        tabsWidth -= 70;
        for (let i = 0; i < tabSlide.length; i++) {
            
            tabAmount = Math.floor( tabsWidth / tabSlide[i].offsetWidth );
        }

        for (let i = tabAmount * 2; i < tabSlide.length; i++ ) {
            tabSlide[i].classList.add('tab-hide');
        }
        tabsButton.addEventListener( 'click', function() {

            for (let i = tabAmount * 2; i < tabSlide.length; i++ ) {
                tabSlide[i].classList.toggle('tab-hide');
            }

            const showAll = 'Показать все';
            if (tabsButton.textContent.includes(showAll)) {
                tabsButton.textContent = 'Скрыть';
                tabsButton.classList.toggle('rotate');
            } else {
                tabsButton.textContent = showAll;
                tabsButton.classList.toggle('rotate');

            }
            
        });

        
    }