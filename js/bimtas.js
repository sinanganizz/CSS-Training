
$(window).on('scroll',function(){
    if($('header').length){
        var sticky = 100;
        if($(window).scrollTop() > sticky){
            $('header').addClass('scroll');
        }else{
            $('header').removeClass('scroll');
        }
    }
});



var owl = $('.top-slider-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false
});


var owlcenterleft = $('.center-left-slider-carousel');
owlcenterleft.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:false,
    dots:true
});


var owlcenterright = $('.center-right-slider-carousel');
owlcenterright.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:false,
    dots:true
});

