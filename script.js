let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click', function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});

var swiper = new Swiper(".blogs .box-container", {
    grabCursor: true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetween:20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6500,
        disableonInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});