$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 3
        },
        320: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 8
        }
    }
})