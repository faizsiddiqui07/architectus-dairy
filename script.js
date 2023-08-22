var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        autoplay: {
            delay: 3500,
        },
});

var swiper = new Swiper(".painting-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
    },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
    },
        '576': {
            slidesPerView: 2,
            spaceBetween: 8,
    },
    '320': {
        slidesPerView: 1,
        spaceBetween: 8,
}
}
});

var swiper = new Swiper(".artist-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
    },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
    },
        '576': {
            slidesPerView: 2,
            spaceBetween: 8,
    },
    '320': {
        slidesPerView: 1,
        spaceBetween: 8,
}
}
});
