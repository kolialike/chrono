jQuery(function($){
  var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        slidesPerView: 1,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    var body = $("body");
    $(".services-r-item").on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active');
    });

    $(".MyChronoCash").on('click', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('open');
    });

    $(".bids").on('click', function(event) {
        event.preventDefault();
        body.toggleClass('bids-open');
    });
});