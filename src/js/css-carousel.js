export default class CSSCarousel {
    containerNode = null;
    buttonNodes = [];
    indicatorNode = null;
    itemNodes = [];
    firstItemNode = null;
    activeItemNode = null;
    visibleLength = 0;
    indicators = {
        activeNode: null,
        activeIndex: 0,
        nodes: [],
    };

    constructor(containerNode) {
        this.containerNode = containerNode;
    }

    init() {
        this.buttonNodes = Array.from(this.containerNode.querySelectorAll('[data-carousel-btn]'));
        this.indicatorNode = this.containerNode.querySelector('[data-carousel-nav]');
        this.carouselNode = this.containerNode.querySelector('[data-carousel]');
        this.firstItemNode = this.carouselNode.querySelector('[data-carousel-item]');

        this.buttonEvents();

        if (this.indicatorNode) {
            this.createIndicators();
            this.indicatorEvents();
        }

        this.scrollEvents();
    }

    buttonEvents() {
        this.buttonNodes.forEach((carouselBtnNode) => {
            carouselBtnNode.addEventListener('click', () => {
                let direction = carouselBtnNode.dataset.type === 'next' ? 1 : -1;
                this.carouselNode.scrollBy({ left: this.firstItemNode.clientWidth * direction, top: 0, behavior: 'smooth' });
            });
        });
    }

    createIndicator(i) {
        let li = document.createElement('li');
        li.innerText = i.toString();
        if (i === 1) {
            li.classList.add('active');
        }
        this.indicatorNode.appendChild(li);
        return li;
    }

    createIndicators() {
        this.itemNodes = Array.from(this.carouselNode.querySelectorAll('[data-carousel-item]'));
        this.visibleLength = Math.floor(this.carouselNode.clientWidth / this.firstItemNode.clientWidth);

        let numOfIndicators = Math.ceil(this.itemNodes.length / this.visibleLength);

        this.indicatorNode.innerHTML = '';
        if (numOfIndicators <= 1) {
            this.indicatorNode.style.display = 'none';
            return;
        }
        let i = 1;
        while (i <= numOfIndicators) {
            let indicator = this.createIndicator(i);
            if (i === 1) {
                this.indicators.activeNode = indicator;
                this.indicators.activeIndex = i;
            }
            this.indicators.nodes.push(indicator);
            i++;
        }
    }

    indicatorEvents() {
        this.indicators.nodes.forEach((indicator, i) => {
            indicator.addEventListener('click', () => {
                if (indicator === this.indicators.activeNode) return;
                this.indicators.activeNode.classList.remove('active');
                indicator.classList.add('active');

                let move = this.firstItemNode.clientWidth * this.visibleLength * (i + 1 - this.indicators.activeIndex);
                this.carouselNode.scrollBy({ left: move, top: 0, behavior: 'smooth' });

                this.indicators.activeNode = indicator;
                this.indicators.activeIndex = i + 1;
            });
        });
    }

    scrollEvents() {
        this.carouselNode.addEventListener('scrollsnapchange', (e) => {
            if (this.activeItemNode) {
                this.activeItemNode.classList.remove('active');
            }
            if (e.snapTargetInline) {
                e.snapTargetInline.classList.add('active');
                this.activeItemNode = e.snapTargetInline;
            }
        });
    }
}
