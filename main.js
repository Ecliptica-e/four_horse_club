
new Swiper('.members__slider', {
    navigation: {
        nextEl: ".members-btn-next",
        prevEl: ".members-btn-prev",
    },
    pagination: {
        el: ".members-pagination",
        type: "fraction",
    },
    // slidesPerView: 3,
    // spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        1360: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    }

});

new Swiper('.opportunities__slider', {
    navigation: {
        nextEl: ".opportunities-btn-next",
        prevEl: ".opportunities-btn-prev",
    },
    pagination: {
        el: ".opportunities-pagination",
    },
    slidesPerView: 1,
});