$(function () {

    if ($(".swiper-container").length > 0) {
        var swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            slidesPerView: 1,
            autoHeight: true,
            spaceBetween: 30,
            nested: false,
            freeMode: false,
            freeModeMomentumRatio: 0.5,
            freeModeSticky: true,
            centeredSlides: true,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on: {
                slideChangeTransitionEnd: function () {
                    imgIndex = this.activeIndex
                },
            },
        });

    }

    if ($(".rating-stars").length > 0) {
        var ratingOptions = {
            selectors: {
                starsSelector: '.rating-stars',
                starSelector: '.rating-star',
                starActiveClass: 'is--active',
                starHoverClass: 'is--hover',
                starNoHoverClass: 'is--no-hover',
                targetFormElementSelector: '.rating-value'
            }
        };
        $(".rating-stars").ratingStars(ratingOptions);
    }

})