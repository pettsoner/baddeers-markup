$(document).ready(function() {

    $('.b-countdown__timer').countdown({
        until: '+2h'
    });

    $('.b-catalog__filter__item').click(function(e) {
        $('.b-catalog__filter__item').removeClass('active');

        $(this).addClass('active');

        e.preventDefault();
    });

    $('.b-product-slider__slides').bxSlider();
});