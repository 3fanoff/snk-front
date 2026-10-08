const path = require('path');

let colorboxData = {
    heading: 'Остались вопросы? <br>Напишите нам!',
    list: [
        'Заполните форму — мы ответим на все вопросы, <br>поможем подобрать оборудование<br> или организовать демонстрацию'
    ],
    alt: 'Заполните форму — мы ответим на все вопросы, <br>поможем подобрать оборудование<br> или организовать демонстрацию'
};
let baseFaqData = [
    {
        question: 'Осуществляете ремонт оборудования и сервисную поддержку?',
        answer: 'Да, мы осуществляем ремонт оборудования и предоставляем сервисную поддержку для наших клиентов. Наша команда профессионалов\n' +
            ' обеспечивает качественное обслуживание и быструю диагностику, что позволяет минимизировать время простоя вашего оборудования.'
    },
    {
        question: 'Есть ли гарантия на оборудование?',
        answer: '<strong>This is the second item’s accordion body.</strong>\n' +
            ' It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These\n' +
            ' classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with\n' +
            ' custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the\n' +
            ' <code>.accordion-body</code>, though the transition does limit overflow.',
    },
    {
        question: 'Вы работаете с НДС?',
        answer: '<strong>This is the third item’s accordion body.</strong>\n' +
            ' It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These\n' +
            ' classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with\n' +
            ' custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the\n' +
            ' <code>.accordion-body</code>, though the transition does limit overflow.',
    }
];

let pages = [
    {
        name: 'main',
        title: 'Все блоки PVP-SNK',
        menu: 'Все блоки',
        template: path.resolve(__dirname, './src/pages/main.hbs'),
        data: {
            faq: baseFaqData,
        },
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
                alt: null
            },
            colorbox_2: {
                heading: 'Готовы увидеть <br>оборудование в действии?',
                list: [
                    'Проведем демо по требуемым задачам, продемонстрируем интерфейс и возможности, обсудим параметры под ваши условия.',
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
            colorbox: colorboxData
        },
        headData: {
            scripts: [{ src: 'https://api-maps.yandex.ru/v3/?apikey=2b46a0bd-22d7-47bb-9822-1002b3f80c2c&lang=ru_RU' }]
        },
        template: path.resolve(__dirname, './src/pages/contacts.hbs')
    },
    {
        name: 'demo',
        title: 'Демонстрация PVP-SNK',
        menu: 'Демонстрация',
        breadcrumbs: ['Главная', 'Услуги', 'Демонстрация'],
        data: {
            colorbox: colorboxData
        },
        slider: ['slide_3'],
        template: path.resolve(__dirname, './src/pages/demo.hbs')
    },
    {
        name: 'catalog',
        title: 'Каталог оборудования PVP-SNK',
        menu: 'Каталог',
        breadcrumbs: ['Главная', 'Каталог'],
        template: path.resolve(__dirname, './src/pages/catalog.hbs')
    },
    {
        name: 'repair',
        title: 'Ремонт спектрометров и РФА-анализаторов PVP-SNK',
        menu: 'Ремонт',
        breadcrumbs: ['Главная', 'Услуги', 'Ремонт'],
        template: path.resolve(__dirname, './src/pages/repair.hbs'),
        data: {
            colorbox: colorboxData,
            gallery: [
                { src: '/content/gallery/ser1_1.png', w: 347, h:260 },
                { src: '/content/gallery/ser4_1.png', w: 201, h:259 },
                { src: '/content/gallery/ser2_1.png', w: 346, h:260 },
                { src: '/content/gallery/ser5_1.png', w: 200, h:260 },
            ],
            stage: [
                { name: 'Вы оставляете заявку', text: 'По телефону, почте или через форму на сайте.', btn: 'Оставить заявку' },
                { name: 'Мы диагностируем', text: 'Согласовываем стоимость и сроки. Высылаем акт с заключением.', btn: null },
                { name: 'Ремонтируем', text: 'Производим ремонт, настраиваем и проверяем на образцах.', btn: null },
                { name: 'Возвращаем прибор', text: 'Забираете прибор или мы отправляем его транспортной компанией. Даём гарантию на работу.', btn: null },
            ]
        }
    },
    {
        name: 'category',
        title: 'Портативные анализаторы металла PVP-SNK',
        menu: 'Категория',
        breadcrumbs: ['Главная', 'Каталог', 'Портативные анализаторы металла'],
        template: path.resolve(__dirname, './src/pages/category.hbs')
    },
    {
        name: 'services',
        title: 'Услуги PVP-SNK',
        menu: 'Услуги',
        breadcrumbs: ['Главная', 'Услуги'],
        template: path.resolve(__dirname, './src/pages/services.hbs')
    },
    {
        name: 'product',
        title: 'Новый мобильный Оптико-эмиссионный спектрометр Стил-М3 PVP-SNK',
        menu: 'Товар',
        slider: ['slide_2'],
        data: {
            faq: baseFaqData,
        },
        breadcrumbs: ['Главная', 'Каталог', 'Портативные анализаторы металла', 'Стил-М3'],
        template: path.resolve(__dirname, './src/pages/product.hbs')
    },
    {
        name: 'verification',
        title: 'Поверка PVP-SNK',
        menu: 'Поверка',
        breadcrumbs: ['Главная', 'Услуги', 'Поверка'],
        template: path.resolve(__dirname, './src/pages/verification.hbs'),
        data: {
            colorbox: colorboxData,
            stage: [
                { name: 'Вы оставляете заявку', text: 'Модель прибора, объём поверки, желаемые сроки', btn: 'Оставить заявку' },
                { name: 'Мы забираем прибор', text: 'курьером по Москве или ТК по России. Либо вы привозите сами в демо-зал', btn: null },
                { name: 'Поверка и документы', text: 'проводим измерения, оформляем свидетельство, ставим отметку в паспорт', btn: null },
                { name: 'Возвращаем прибор', text: 'Вы получаете прибор с полным пакетом документов. Оплата после выполнения работ.', btn: null },
            ],
            cards: [
                {
                    title: 'Ваш анализатор может врать. И вы об этом не подозреваете',
                    text: 'Со временем любой прибор для химического анализа начинает «уходить»: появляется погрешность, занижение или завышение показателей по ключевым элементам.',
                    list: {
                        title: 'Без поверки вы рискуете:',
                        type: 'negative',
                        items: ['Получить брак на входном контроле', 'Отгрузить некачественный металл', 'Провалить проверку надзорных органов']
                    }
                },
                {
                    bg: 'blue',
                    title: 'Наш результат поверки — полный пакет документов',
                    text: 'Поверка — это официальное подтверждение, что анализатор выдаёт точные результаты. Мы проведём её с минимальным простоем прибора.',
                    list: {
                        title: 'Что вы получите после поверки:',
                        type: 'positive',
                        items: ['Свидетельство о поверке', 'Отметка в паспорте прибора с датой следующей поверки', 'Заключение о допуске к применению на производстве']
                    }
                }
            ]
        }
    },
    {
        name: 'installment',
        title: 'Рассрочка PVP-SNK',
        menu: 'Рассрочка',
        breadcrumbs: ['Главная', 'Услуги', 'Рассрочка'],
        template: path.resolve(__dirname, './src/pages/installment.hbs'),
        data: {
            colorbox: colorboxData,
            cards: [
                {
                    title: 'Прибор нужен уже вчера,  а весь бюджет — на другие задачи?',
                    text: 'Покупать анализатор за 100% сейчас — значит изъять деньги из оборота. Их можно потратить на сырьё или логистику, а прибор начать использовать сразу.',
                },
                {
                    bg: 'blue',
                    title: 'Рассрочка от ПВП «СНК»',
                    text: 'Вы получаете прибор и начинаете работать сразу. Платите 20% сейчас, остальное — частями в течение года., без процентов и скрытых комиссий.',
                },
            ],
            faq: [
                {
                    question: 'Есть ли скрытые комиссии?',
                    answer: 'Нет. Вы платите только стоимость прибора, разделённую на части.'
                },
                {
                    question: 'Вы работаете с НДС?',
                    answer: 'Ответ на второй вопрос',
                },
                {
                    question: 'Есть рассрочка на б/у приборы?',
                    answer: 'Ответ на третий вопрос',
                },
                {
                    question: 'Оборудование в залоге?',
                    answer: 'Ответ на четвертый вопрос',
                }
            ],
            stage: [
                { name: 'Юридическое лицо или ИП', text: 'Работаем только с бизнесом' },
                { name: 'Паспорт и ИНН руководителя', text: 'Для оформления договора' },
                { name: 'Первый платеж от 20%', text: 'Точная сумма зависит от прибора и срока' },
                { name: 'Заявка на рассмотрение — 1&nbsp;день', text: 'Решение принимаем быстро' },
            ],
            iconedList: [
                {
                    title: 'Без переплат',
                    text: 'Платите ровно стоимость прибора. Никаких процентов и скрытых комиссий',
                    icon: 'fire'
                },
                {
                    title: 'До 12 месяцев',
                    text: 'Выберите удобный срок рассрочки: <br>от 3 до 12 месяцев',
                    icon: 'clock'
                },
                {
                    title: 'Без кредитного договора',
                    text: 'Оформляем внутри компании. <br>Не нужно собирать справки и ждать решения банка',
                    icon: 'shield'
                }
            ]
        }
    },
    {
        name: 'rent',
        title: 'Аренда анализаторов  PVP-SNK',
        menu: 'Аренда',
        breadcrumbs: ['Главная', 'Услуги', 'Аренда'],
        template: path.resolve(__dirname, './src/pages/rent.hbs'),
        data: {
            colorbox: colorboxData,
            cards: [
                {
                    title: 'Прибор нужен на один проект <br>или на время ремонта?',
                    text: 'Закупать оборудование под разовый проект или на время ремонта — нерационально. Вы платите полную стоимость, а используете 5–10% времени.',
                },
                {
                    bg: 'blue',
                    title: 'Аренда от ПВП «СНК»',
                    text: 'Вы получаете прибор на нужный срок, а платите только за время работы. Остальное — наша забота: обслуживание, калибровка, поверка.',
                },
            ],
            stage: [
                { name: 'Разовый проект', text: 'Экспресс-анализ, выборочная проверка' },
                { name: 'Свой прибор в ремонте', text: 'Производство не должно останавливаться' },
                { name: 'Сезонная задача', text: 'Анализ специфических материалов 2-3 раза в год' },
                { name: 'Срочная задача', text: 'Прибор нужен завтра, а бюджет ещё не согласован' },
            ],
            iconedList: [
                {
                    title: 'Прибор',
                    list: ['Анализатор выбранной модели', 'Защитный кейс для транспортировки', 'Зарядное устройство + кабели',
                    'Расходники, сменные окна', 'Инструкция по быстрому старту'],
                    icon: 'wrench'
                },
                {
                    title: 'Документы и допуски',
                    list: ['Действующая поверка', 'Протокол калибровки на дату отгрузки', 'Акт приёма-передачи прибора', 'Договор аренды'],
                    icon: 'crosshair'
                },
                {
                    title: 'Сервис и поддержка',
                    list: ['Удалённая консультация инженера в день получения', 'Замена при поломке или некорректной работе',
                    'Напоминание о возврате за 3 дня'],
                    icon: 'chat'
                }
            ]
        }
    },
    {
        name: 'training',
        title: 'Обучение операторов PVP-SNK',
        menu: 'Обучение',
        breadcrumbs: ['Главная', 'Услуги', 'Обучение'],
        template: path.resolve(__dirname, './src/pages/training.hbs'),
        data: {
            colorbox: colorboxData,
            whylist: [
                { name: 'Практики, а не теоретики', text: 'Инженеры с опытом работы на спектрометрах и РФА от 7 лет.' },
                { name: 'Ваши образцы и задачи', text: 'Отрабатываем на ваших материалах — сразу видно результат.' },
                { name: 'Экономия времени и денег', text: 'Поможем подобрать удобный формат обучения без отрыва от производства' },
            ],
            cards: [
                {
                    title: 'Сотрудники ошибаются в настройках? Разный результат у разных операторов?',
                    text: 'Это не прибор — это почерк оператора. Без единой методики и понимания физики процесса один и тот же образец покажет разный состав.',
                    list: {
                        title: 'Без обучения вы теряете:',
                        type: 'negative',
                        items: ['Время на перепроверки', 'Деньги на повторные анализы', 'Доверие заказчиков']
                    }
                },
                {
                    bg: 'blue',
                    title: 'Обучение операторов по стандарту предприятия',
                    text: 'Мы отработаем с вашими сотрудниками методику на ваших образцах. После обучения они будут выдавать идентичные результаты — на любом приборе и в любую смену.',
                    list: {
                        title: 'Что вы получите после обучения:',
                        type: 'positive',
                        items: ['Готовые алгоритмы работы — чек-листы, памятки, инструкции по настройке и калибровке ',
                            'Персональный сертификат оператора — с печатью и подписью ответственного за обучение']
                    }
                }
            ]
        }
    },
    {
        name: 'blog',
        title: 'Блог PVP-SNK',
        menu: 'Блог',
        breadcrumbs: ['Главная', 'Блог'],
        template: path.resolve(__dirname, './src/pages/blog.hbs')
    },
    {
        name: 'news',
        title: 'Новости компании PVP-SNK',
        menu: 'Новости',
        breadcrumbs: ['Главная', 'Новости'],
        template: path.resolve(__dirname, './src/pages/news.hbs')
    },
    {
        name: 'cases',
        title: 'Кейсы компании PVP-SNK',
        menu: 'Кейсы',
        breadcrumbs: ['Главная', 'Кейсы'],
        template: path.resolve(__dirname, './src/pages/cases.hbs'),
        data: {
            iconedList: [
                {
                    title: 'Избегаете чужих ошибок',
                    text: 'Вы видите, с чем столкнулись другие,  и как мы решили задачу',
                    icon: 'search'
                },
                {
                    title: 'Видите сроки окупаемости',
                    text: 'Это не «волшебные» цифры в рекламе мы показываем реальные расчёты',
                    icon: 'clock'
                },
                {
                    title: 'Видите как внедрить прибор',
                    text: 'Читаете пошагово, как мы подбирали, обучали и настраивали',
                    icon: 'wrench'
                }
            ]
        }
    },
    {
        name: 'case',
        title: 'Металлургический завод: входной контроль Легированной стали PVP-SNK',
        menu: 'Кейс',
        slider: ['slide_6'],
        breadcrumbs: ['Главная', 'Кейсы', 'Металлургический завод'],
        template: path.resolve(__dirname, './src/pages/case.hbs'),
        data: {
            cards_1: [
                {
                    title: 'Компания:',
                    text: 'Крупный металлургический завод в Центральном регионе РФ, более 1000 сотрудников. Специализация — производство и обработка специальных сталей для машиностроения.',
                },
                {
                    title: 'Задача:',
                    text: 'Сократить время входного контроля без потери точности измерений, чтобы ускорить запуск партий в производство и снизить затраты на хранение.',
                },
            ],
            stage: [
                { name: 'Шаг 1. <br>Выездная демонстрация', text: 'Инженер приехал на завод с образцами типовых сталей и провёл сравнительный анализ на их оборудовании и нашем приборе. Совпадение результатов — 99.8%.'},
                { name: 'Шаг 2. <br>Подбор модели', text: 'Выбрали Olympus Vanta (модель с кремниевым дрейфовым детектором для анализа лёгких элементов). Дополнительно: защитный кейс, держатель для образцов,окна.'},
                { name: 'Шаг 3. <br>Обучение и настройка', text: ['Два дня обучения на рабочем месте', 'Настройка калибровки под марки стали, которые чаще всего поступают на завод', 'Создание чек-листа для операторов']},
            ],
            cards_2: [
                {
                    bg: 'blue',
                    title: 'В цифрах:',
                    list: {
                        type: 'positive',
                        items: ['Время анализа — с 3 дней до 5 минут', 'Рост числа проверяемых партий — с 20 до 60 в месяц', 'Окупаемость прибора — 4 месяца']
                    }
                },
                {
                    bg: 'blue',
                    title: 'Дополнительные эффекты:',
                    list: {
                        type: 'positive',
                        items: ['Сократили число обращений в стороннюю лабораторию на 70%', 'Снизили затраты на хранение (освободили складские площади)']
                    }
                }
            ],
            gallery: [
                { src: '/content/gallery/svarka2026-1.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-2.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-3.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-4.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-5.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-6.png', w:255, h:340 },
            ],
        }
    },
    {
        name: 'article',
        title: 'Геохимия: как находить золото по спутникам с помощью РФА PVP-SNK',
        menu: 'Статья',
        slider: ['slide_4'],
        breadcrumbs: ['Главная', 'Блог', 'Геохимия: как находить золото по спутникам с помощью РФА'],
        template: path.resolve(__dirname, './src/pages/article.hbs')
    },
    {
        name: 'article-news',
        title: 'Металлообработка. Сварка-2026',
        menu: 'Новость',
        slider: ['slide_5'],
        data: {
            gallery: [
                { src: '/content/gallery/svarka2026-1.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-2.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-3.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-4.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-5.png', w:255, h:340 },
                { src: '/content/gallery/svarka2026-6.png', w:255, h:340 },
            ],
        },
        breadcrumbs: ['Главная', 'Новости', 'Металлообработка. Сварка-2026'],
        template: path.resolve(__dirname, './src/pages/article-news.hbs')
    },
    {
        name: 'videos',
        title: 'Видео PVP-SNK',
        menu: 'Видео',
        breadcrumbs: ['Главная', 'Видео'],
        template: path.resolve(__dirname, './src/pages/videos.hbs')
    },
    {
        name: '404',
        title: '404 PVP-SNK',
        menu: '404',
        template: path.resolve(__dirname, './src/pages/404.hbs')
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

module.exports = pages;