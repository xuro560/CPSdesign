    let expandTextButton = document.querySelector('.section__button');
    let expandTextButtonHeight = expandTextButton.offsetHeight;
    let image = document.querySelector('.main-image');
    imageHeight = image.offsetHeight;
    let text = document.querySelector('.section__text');
    let description = document.querySelector('.section__description');
    let newSize = imageHeight - expandTextButtonHeight;
    if (description.offsetHeight > newSize) {
        description.classList.add('hide');
        description.classList.add('description-size');
    }

    expandTextButton.onclick = function() {
        description.classList.toggle('hide');
        description.classList.toggle('description-size');

    };

    let tabs = document.querySelector('.tabs');
    let tab = document.querySelectorAll('.tab');
    let tabsButton = document.querySelector('.tabs__button');
    let tabAmount = 0;

    for (let i = 0; i < tab.length - 1; i++) {
        tabAmount = Math.floor( tabs.offsetWidth / tab[i].offsetWidth );
        console.log(tabs.offsetWidth / tab[i].offsetWidth);
        
    }
    for (let i = tabAmount * 2; i < tab.length; i++ ) {
        tab[i].classList.add('tab-hide');

    }
    tabsButton.onclick = function() {
        for (let i = tabAmount * 2; i < tab.length; i++ ) {
            tab[i].classList.toggle('tab-hide');
        }
    };
