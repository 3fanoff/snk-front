const path = require('path');

let pages = [
    {
        name: 'main',
        title: 'Все блоки PVP-SNK',
        menu: 'Все блоки',
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
        name: 'about',
        title: 'О компании PVP-SNK',
        menu: 'О компании',
        breadcrumbs: ['Главная', 'О компании'],
        data: {
            colorbox: {
                heading: 'Участвуем в тендерах<br>и поможем вам!',
                list: [
                    'Планируете провести тендер?<br>Проконсультируйтесь с нашим специалистом',
                    'Эксперт поможет организовать процесс, подготовить документацию и провести процедуру на всех этапах закупки'
                ],
                alt: 'Проведем демо по требуемым задачам, продемонстрируем интерфейс и возможности, обсудим параметры под ваши условия'
            }
        },
        template: path.resolve(__dirname, './src/pages/about.hbs')
    },
    {
        name: 'contacts',
        title: 'Контакты PVP-SNK',
        menu: 'Контакты',
        breadcrumbs: ['Главная', 'Контакты'],
        data: {
            colorbox: {
                heading: 'Остались вопросы? <br>Напишите нам!',
                list: [
                    'Заполните форму — мы ответим на все вопросы, <br>поможем подобрать оборудование<br> или организовать демонстрацию'
                ],
                alt: 'Заполните форму — мы ответим на все вопросы, <br>поможем подобрать оборудование<br> или организовать демонстрацию'
            }
        },
        template: path.resolve(__dirname, './src/pages/contacts.hbs')
    },
    {
        name: 'catalog',
        title: 'Каталог оборудования PVP-SNK',
        menu: 'Каталог',
        breadcrumbs: ['Главная', 'Каталог'],
        template: path.resolve(__dirname, './src/pages/catalog.hbs')
    },
    {
        name: 'category',
        title: 'Портативные анализаторы металла PVP-SNK',
        menu: 'Категория',
        breadcrumbs: ['Главная', 'Каталог', 'Портативные анализаторы металла'],
        template: path.resolve(__dirname, './src/pages/category.hbs')
    },
    {
        name: 'product',
        title: 'Новый мобильный Оптико-эмиссионный спектрометр Стил-М3 PVP-SNK',
        menu: 'Товар',
        slider: ['slide_2'],
        breadcrumbs: ['Главная', 'Каталог', 'Портативные анализаторы металла', 'Стил-М3'],
        template: path.resolve(__dirname, './src/pages/product.hbs')
    },
    {
        name: 'index',
        title: 'PVP-SNK',
        data: {
            _pages: []
        },
        template: path.resolve(__dirname, './src/index.hbs')
    }
];

const indexPage = pages.find(item => item.name === 'index');
indexPage.data._pages = pages.map(item => ({ menu: item.menu, name: item.name }));
console.log(indexPage);

module.exports = pages;