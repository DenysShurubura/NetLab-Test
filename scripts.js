$(document).ready(function(){
    $('.blog_ivents__wrapper').slick({
      dots: true,
      infinite: false
    });

    $('.menu-burger__header').click(function() {
      $('.menu-burger__header').toggleClass('open-menu');
    });

    $('.menu-burger__header').click(function(){
      $('.menu-burger__header').toggleClass('open-menu');
      $('.header_menu').toggleClass('open-menu');
    });
});