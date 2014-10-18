$(document).ready(function() {

    $('input, textarea').placeholder();

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
            .append('<a href="#" class="b-product-preview__order btn btn_success btn_size_m" data-create-order data-article="' + $this.data('article') + '">Заказать</a>')
    });

    /* Установка фонового изображения
    ------------------------------------------------------------------------------- */

    $('[data-bg]').each(function() {
        var $this = $(this);

        $this.css('background-image', 'url(' + $this.data('bg') + ')');
    });

    /* Окно заказа
    ------------------------------------------------------------------------------- */

    $(document).on('click', '[data-create-order]', function() {

        var $orderForm = $('.b-modal-form_order').clone();
        if ($orderForm) {
            $orderForm.find('[name="article"]').val($(this).data('article'));
        }
        $.fancybox($orderForm);

    });

    /* Слайдер продуктов
    ------------------------------------------------------------------------------- */

    $('.b-product-slider__slides').cslider();

    $(document).on('submit', '.js-form', function(e) {
        e.preventDefault();
    });

});