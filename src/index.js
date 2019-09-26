// POLYFILS
import "core-js/stable";
import "regenerator-runtime/runtime";


import "../assets/sass/style.scss";
import 'bootstrap/dist/js/bootstrap';
import Swiper from "swiper";
import LazyLoad from 'vanilla-lazyload';
import AOS from 'aos';

import Nav from '../assets/js/nav';


// NAV INIT
Nav();

// ANIMATIONS INITIATION

AOS.init({
    once: true,
});

// LAZY IMAGES
new LazyLoad({
    elements_selector: ".lazy"

});


// SWIPER HOME
var mySwiper = new Swiper('.swiper-home-container', {
    pagination: {
        el: '.slider-home-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    grabCursor: true,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.slider-home-next',
        prevEl: '.slider-home-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})



// SLIDER OFERTA
new Swiper('.swiper-job-offer', {
    pagination: {
        el: '.job-offer-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    grabCursor: true,

    // Navigation arrows
    navigation: {
        nextEl: '.slider-offer-next',
        prevEl: '.slider-offer-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})


// SCROLL UP BUTTON IN THE FOOTER
var scrollUp = document.getElementById('scroll-up');

scrollUp.addEventListener('click', function () {

    window.scrollTo({ top: 0, behavior: 'smooth' });

})

const newsletter = document.querySelector('.newsletter');
const newsletterMessage = document.querySelector('.newsletter__message');
const newsletterMessageP = newsletterMessage.querySelector('p');
const newsletterInput = newsletter.querySelector('input[type=submit]');

newsletter.addEventListener('submit', function (ev) {
    ev.preventDefault();

    newsletterMessage.classList.add('newsletter__message--active')
    newsletterMessageP.innerHTML = "Dziękujemy za zapisanie się do newslettera!";
    newsletterInput.setAttribute("disabled", true);


})