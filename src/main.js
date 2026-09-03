import './scss/main.scss';
import CSSCarousel from './js/css-carousel';
import Collapse from 'bootstrap/js/src/collapse';
import Tab from 'bootstrap/js/src/tab';
import Modal from 'bootstrap/js/src/modal';
import VideoObject from "@/js/video-object";
import FetchIt from "@/js/fetchit";

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



    Array.from(document.querySelectorAll('.js-video-preview')).map(item => {
        return new VideoObject(item);
    }).forEach(video => {
        video.bindAction('click',() => {
            video.insertFrame();
        })
    })

    Array.from(document.querySelectorAll('.js-modal')).forEach(modal => {
        modal.__modal = new Modal(modal);
    });

    Array.from(document.querySelectorAll('form[data-fetchit]')).forEach(form => {
        const config = JSON.parse(form.dataset.config || '{}');
        config.action = form.dataset.fetchit;
        FetchIt.create(form, config);
    })

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
