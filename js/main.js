$(document).ready(function() {

    $('input, textarea').placeholder();

    /* Скролл
    ------------------------------------------------------------------------------- */

    $('[data-scroll]').click(function(e) {
        $('html, body').animate({
          scrollTop: $($(this).data('scroll')).offset().top - 100
        }, 1000);

        e.preventDefault();
    });

    /* Всплывающие окна
    ------------------------------------------------------------------------------- */

    $.extend($.fancybox.defaults, {
        scrollOutside: true,
        scrolling: 'no',
        padding: 0
    });

    /* Таймер
    ------------------------------------------------------------------------------- */

    $('.b-countdown__timer').countdown({
        until: '+2h'
    });

    /* Каталог: фильтер
    ------------------------------------------------------------------------------- */

    $('.b-catalog__filter__item').click(function(e) {
        var $this     = $(this);
        var $products = $('.b-catalog__products__item');

        $('.b-catalog__filter__item').removeClass('active');

        $this.addClass('active');


        if ($this.data('type') == 'all') {
            $products.show();
        } else {
            $products.hide().filter('[data-type="' + $(this).data('type') + '"]').show();
        }

        e.preventDefault();
    });

    /* Каталог: рендеринг товаров
    ------------------------------------------------------------------------------- */

    $('.b-catalog__products__item').each(function() {
        var $this = $(this);

        $this
            .append('<a href="#" class="b-product-preview__image"><img src="' + $this.data('image') + '"></a>')
            .append('<div class="b-product-preview__article">Артикул: ' + $this.data('article') + '</div>')
            .append('<div class="b-product-preview__price">' + $this.data('price') + '</div>')
            .append('<a href="#" class="b-product-preview__order btn btn_success btn_size_m" data-open-modal="order" data-article="' + $this.data('article') + '">Заказать</a>')
    });

    /* Установка фонового изображения
    ------------------------------------------------------------------------------- */

    $('[data-bg]').each(function() {
        var $this = $(this);

        $this.css('background-image', 'url(' + $this.data('bg') + ')');
    });

    /* Окно заказа
    ------------------------------------------------------------------------------- */

    $(document).on('click', '[data-open-modal]', function() {
        var $this = $(this);

        if ($this.data('open-modal') == 'order') {

            var $modal = $('.b-modal-form_order').clone();

            if ($this.data('article')) {
                $modal.find('[name="article"]').val($this.data('article'));
            }

        } else if ($this.data('open-modal') == 'call') {

            var $modal = $('.b-modal-form_call').clone();

        }
        
        $.fancybox($modal);
    });

    /* Слайдер продуктов
    ------------------------------------------------------------------------------- */

    $('.b-product-slider__slides').cslider();

    /* Обработка отправки форм
    ------------------------------------------------------------------------------- */

    $(document).on('submit', '.js-form', function(e) {
        var $this = $(this);

        $.post($this.attr('action'), $this.serialize(), function(response) {

            if (response.error) {

                alert(response.error);

            } else {

                
            }

        }, 'json');

        e.preventDefault();
    });

});