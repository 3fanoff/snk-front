const path = require('path');

const pages = [
    {
        name: 'main',
        title: 'Все блоки PVP-SNK',
        menu: null,
        template: path.resolve(__dirname, './src/pages/main.hbs')
    },
    {
        name: 'home',
        title: 'Главная PVP-SNK',
        menu: 'Главная',
        slider: ['slide_1', 'slide_2'],
        template: path.resolve(__dirname, './src/pages/home.hbs')
    },
    {
        name: 'catalog',
        title: 'Каталог оборудования PVP-SNK',
        menu: null,
        breadcrumbs: ['Главная', 'Каталог'],
        template: path.resolve(__dirname, './src/pages/catalog.hbs')
    },
    {
        name: 'category',
        title: 'Портативные анализаторы металла PVP-SNK',
        menu: null,
        breadcrumbs: ['Главная', 'Каталог', 'Портативные анализаторы металла'],
        template: path.resolve(__dirname, './src/pages/category.hbs')
    },
    {
        name: 'product',
        title: 'Новый мобильный Оптико-эмиссионный спектрометр Стил-М3 PVP-SNK',
        menu: null,
        slider: ['slide_2'],
        breadcrumbs: ['Главная', 'Каталог', 'Портативные анализаторы металла', 'Стил-М3'],
        template: path.resolve(__dirname, './src/pages/product.hbs')
    },
    {
        name: 'index',
        title: 'PVP-SNK',
        template: path.resolve(__dirname, './src/index.html')
    }
];

module.exports = pages;