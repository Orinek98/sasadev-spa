import { getIcon, moonIcon} from "./icons.js";
import { SpaCarousel } from './carousel.js';
import './styles/custom-bootstrap.scss'; 

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
    { src: './src/assets/pictures/guate1.webp', alt: 'Tikal Temple' },
    { src: './src/assets/pictures/guate2.webp', alt: 'Lake Atitlan' },
    { src: './src/assets/pictures/etna.webp', alt: 'Mount Etna' },
];

// Creazione
const myCarousel = new SpaCarousel('carousel-container', myImages);

// Avvio
myCarousel.mount();

const filmBtn = document.getElementById('film-btn');
filmBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/filmcanmovies');
});

//Footer social buttons
const footerIconSize = '1.8rem';
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


