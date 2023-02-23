const swiper = new Swiper('.swiperMain', {
    speed: 400,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const swiperProduct = new Swiper('.swiperProducts', {
    slidesPerView: 6,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
            centeredSlides: true,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
            centeredSlides: true,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
        },
        1024:{
            slidesPerView: 6,
            spaceBetween: 20,
            loop: false,
            centeredSlides: false,
        }
    },

});
const swiperVertical = new Swiper('.swiperVertical', {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});