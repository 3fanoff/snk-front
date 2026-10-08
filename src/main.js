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


    Array.from(document.querySelectorAll('.js-gallery')).forEach((gallery) => {
        gallery.addEventListener('click', (e) => {
            import('./js/gallery').then(module => {
                const lightGallery = module.lightGallery(gallery, {
                    selector: '[data-src]',
                    enableDrag: false,
                    counter: false,
                    download: false,
                    getCaptionFromTitleOrAlt: false,
                });
                if (e.target.dataset.src) {
                    const index = lightGallery.galleryItems.findIndex((item) => item.src === e.target.dataset.src);
                    lightGallery.openGallery(index);
                }
            });
        }, {once: true});
    });

    Array.from(document.querySelectorAll('.js-video-gallery-item')).forEach((video) => {
        import('./js/gallery').then(module => {
            module.lightGallery(video, {
                selector: 'this',
                iframeMaxWidth: '1024px',
                iframeMaxHeight: '600px',
                zoomFromOrigin: false,
                download: false,
            })
        })
    })

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

    Array.from(document.querySelectorAll('.js-offcanvas')).forEach(offcanvas => {
        import('bootstrap/js/src/offcanvas').then(module => {
            new module.default(offcanvas);
        });
    })

    Array.from(document.querySelectorAll('.js-nav-dropdown-check')).forEach(dropdownCheck => {
        document.addEventListener('dropdown.uncheck', (e) => {
            if (e.detail.element === dropdownCheck || !dropdownCheck.checked) return;
            dropdownCheck.checked = false;
            dropdownCheck.parentNode.querySelectorAll('.js-for-dropdown').forEach(dropdownElem => {
                dropdownElem.classList['remove']('show');
            });
        })
        dropdownCheck.addEventListener('change', (e) => {
                const dropdownUncheckEvent = new CustomEvent('dropdown.uncheck', {
                    detail: { element: e.target }
                });
                document.dispatchEvent(dropdownUncheckEvent);
                dropdownCheck.parentNode.querySelectorAll('.js-for-dropdown').forEach(dropdownElem => {
                    dropdownElem.classList[dropdownCheck.checked ? 'add' : 'remove']('show');
                });
        });
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
