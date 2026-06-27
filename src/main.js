import './scss/main.scss';
import CSSCarousel from './js/css-carousel';
import Collapse from 'bootstrap/js/src/collapse';
import Tab from 'bootstrap/js/src/tab';
import Modal from 'bootstrap/js/src/modal';

document.addEventListener('DOMContentLoaded', () => {
    Array.from(document.querySelectorAll('.js-carousel-container')).forEach((carousel) => {
        new CSSCarousel(carousel).init();
    });

    Array.from(document.querySelectorAll('.js-accordion')).forEach((accordion) => {
        new Collapse(accordion);
    });

    Array.from(document.querySelectorAll('.js-tabs [data-bs-toggle="tab"]')).forEach((tab) => {
        new Tab(tab);
    });

    /*Array.from(document.querySelectorAll('.js-modal')).forEach(modal => {
        new Modal(modal);
    })*/

    new Modal('.js-modal');

    if (window.ymaps3) {
        ymaps3.ready.then(() => {
            Array.from(document.querySelectorAll('.js-yandex-map')).forEach((mapNode) => {
                const map = new ymaps3.YMap(mapNode, {
                    location: {
                        center: JSON.parse(mapNode.dataset.coords), // [55.752708, 37.668875],
                        zoom: 16,
                    },
                });

                map.addChild(new ymaps3.YMapDefaultSchemeLayer());
            });
        });
    }
});
