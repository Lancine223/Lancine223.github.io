/*-------------------scroll section active link --------------------*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = ( ) => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= '+ id +' ]').classList.add('active');
            });
        };
    });

    /*-------------stiky navbar ---------------------------*/

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100 );
    /*===============remove toggle icon and navbar when click navbar link ==============================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*======================toglle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*=========scrollreveal================*/
ScrollReveal({
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p , .about-content', {origin: 'right'});
ScrollReveal().reveal('.orange', {origin: 'left'});

/*============Typed js ===============*/
const typed = new Typed(".multiple-text", {
    strings: ["Développeur Web et Mobile", "Développeur Python", "Designer Web","Téchnicien Mainténance Informatique", "Traducteur Anglais"],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true
});


/*=================Theme change ==================*/
/* let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () => {
let background = color.style.background;
document.querySelector('.btn , img, .about-img img, .home-img img, .social-media a:hover').style.background = background;
}));*/