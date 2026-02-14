import { Carousel } from 'bootstrap';

export class SpaCarousel {
    constructor(targetElementId, imagesArray) {
        this.targetId = targetElementId;
        this.images = imagesArray || [];
        this.bsCarousel = null;
    }

    _generateTemplate() {
        if (this.images.length === 0) return '';

        const indicatorsHtml = this.images.map((_, index) => {
            const isActive = index === 0 ? 'class="active" aria-current="true"' : '';
            return `<button type="button" data-bs-target="#myComponentCarousel" data-bs-slide-to="${index}" ${isActive} aria-label="Slide ${index + 1}"></button>`;
        }).join('');

        const slidesHtml = this.images.map((img, index) => {
            const isActive = index === 0 ? 'active' : '';
            return `
            <div class="carousel-item h-full ${isActive}">
                <img 
                    src="${img.src}" 
                    class="d-block w-full h-full object-cover" 
                    alt="${img.alt || 'Slide image'}"
                >
            </div>`;
        }).join('');

        return `
        <div id="myComponentCarousel" class="carousel slide h-full w-full" data-bs-ride="carousel">
            <div class="carousel-indicators">
                ${indicatorsHtml}
            </div>
            
            <div class="carousel-inner h-full">
                ${slidesHtml}
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#myComponentCarousel" data-bs-slide="prev" aria-label="Previous">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myComponentCarousel" data-bs-slide="next" aria-label="Next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
        `;
    }

    mount() {
        const container = document.getElementById(this.targetId);
        
        if (!container) {
            console.error(`Elemento #${this.targetId} non trovato!`);
            return;
        }

        container.innerHTML = this._generateTemplate();

        if (this.images.length === 0) return;

        const carouselEl = container.querySelector('#myComponentCarousel');
        
        this.bsCarousel = new Carousel(carouselEl, {
            interval: 3000,
            ride: 'carousel',
            pause: 'hover'
        });
    }

    unmount() {
        if (this.bsCarousel) {
            this.bsCarousel.dispose();
            this.bsCarousel = null;
        }
        const container = document.getElementById(this.targetId);
        if (container) container.innerHTML = '';
    }
}