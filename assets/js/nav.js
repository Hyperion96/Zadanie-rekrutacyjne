// NAV MODULE
const Nav = function () {
    const navbarWrapper = document.querySelector('.navbar-wrapper');
    const navbar = document.querySelector('.navbar');
    const height = navbarWrapper.clientHeight;

    // DUMMY NAV TO AVOID JUMP AFTER MENU GET POSITION FIXED
    const dummyNavbar = document.querySelector('.navbar-dummy');
    dummyNavbar.style.height = height + "px";


    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            navbarWrapper.classList.add('is-active');
            navbar.classList.add('is-active');
            dummyNavbar.classList.add('is-active');
        }
        else {
            navbarWrapper.classList.remove('is-active');
            navbar.classList.remove('is-active');
            dummyNavbar.classList.remove('is-active');

        }

    })


};


export default Nav;

