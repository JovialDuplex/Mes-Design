const swiper = new Swiper(".my-carousel", {
    spaceBetween : 40,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    // slidesPerGroup: 3,
    // ease: "cube",
    centeredSlides: true,
    speed: 8000,
    freeMode: true,
    autoplay : {
        delay: -1,
        disableOnInteraction : false
    },

    pagination : {
        el : ".swiper-pagination",
        clickable : true,
    },

    navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev",
    }
});