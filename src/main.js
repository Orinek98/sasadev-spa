import { getIcon, moonIcon} from "./icons.js";
import { SpaCarousel } from './carousel.js';
import './styles/custom-bootstrap.scss'; 
import image1 from './assets/pictures/guate1.webp';
import image2 from './assets/pictures/guate2.webp';
import image3 from './assets/pictures/etna.webp';

//Theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.innerHTML = moonIcon;


themeToggleBtn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        sessionStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        sessionStorage.setItem('theme', 'dark');
    }
});

// Heder social buttons
const headerIconSize = '2.8rem';
const mailBtn = document.getElementById('mail-btn');
mailBtn.innerHTML = getIcon('mail', headerIconSize);
mailBtn.addEventListener('click', () => {
    window.location = 'mailto:saveriosantonocito@outlook.com';
});

const linkedinBtn = document.getElementById('linkedin-btn');
linkedinBtn.innerHTML = getIcon('linkedin', headerIconSize);
linkedinBtn.addEventListener('click', () =>{
  window.open('https://www.linkedin.com/in/saverio-santonocito-291170253/');
})

const gitBtn = document.getElementById('git-btn');
gitBtn.innerHTML = getIcon('git', headerIconSize);
gitBtn.addEventListener('click', () =>{
  window.open('https://github.com/Orinek98');
});

// // // Carousel
const myImages = [
    { src: image1, alt: 'Tikal Temple' },
    { src: image2, alt: 'Lake Atitlan' },
    { src: image3, alt: 'Mount Etna' },
];


// Creazione
const myCarousel = new SpaCarousel('carousel-container', myImages);

// Avvio
myCarousel.mount();

// FilmCan Card
const cardIconSize = '1.8rem';
const instagramBtn = document.getElementById('insta-btn');
const youtubeBtn = document.getElementById('youtube-btn');

instagramBtn.innerHTML = getIcon('instagram', cardIconSize);
youtubeBtn.innerHTML = getIcon('youtube', cardIconSize);

instagramBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/filmcanmovies');
});

youtubeBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/@filmcanmovies.');
});


//Footer social buttons
const footerIconSize = '2rem';
const mailFooterBtn = document.getElementById('mail-footer-btn');
mailFooterBtn.innerHTML = getIcon('mail', footerIconSize);
mailFooterBtn.addEventListener('click', () => {
    window.location = 'mailto:saveriosantonocito@outlook.com';
});

const linkedinFooterBtn = document.getElementById('linkedin-footer-btn');
linkedinFooterBtn.innerHTML = getIcon('linkedin', footerIconSize);
linkedinFooterBtn.addEventListener('click', () =>{
  window.open('https://www.linkedin.com/in/saverio-santonocito-291170253/');
})

const gitFooterBtn = document.getElementById('git-footer-btn');
gitFooterBtn.innerHTML = getIcon('git', footerIconSize);
gitFooterBtn.addEventListener('click', () =>{
  window.open('https://github.com/Orinek98');
});

//year in footer
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Funzione Back to Top Smooth
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Questa è la magia che rende lo scroll fluido
        });
    });
}

