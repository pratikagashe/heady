$(document).ready(function() {

    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        $('body').addClass('mozilla_browser');
    }
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) { 
      if (ua.indexOf('chrome') > -1) {
          $('body').addClass('chrome_browser');
      } else {
          $('body').addClass('safari_browser');
      }
    }
    
    $.scrollify({
        section : ".section",
        scrollbars:false,
        before: function(i,panels) {
            var ref = panels[i].attr("data-section-name");
            $(".pagination a.active").removeClass("active");
            $(".pagination a[href=#" + ref + "]").addClass("active");
        },
    });
    
    $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
    });
    $(".ca3-scroll-down-link").on("click",function() {
        $.scrollify.move($(this).attr("href"));
    });
        
    $('.menu_click').on("click", function(){
        $('.menu_body').slideToggle();
        $(this).toggleClass('active');
        $('.logo').toggleClass('active');
    });
    
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);
});
    

$(window).on('resize', function () {

});

$(window).on('scroll', function () {
        
    var sc = $(window).scrollTop();
    $('.wave-cloud').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop);
        if(distance < 0){
            $('#container').removeClass('active-cloud');
        } else{
            $('#container').addClass('active-cloud');
        }
    });        
    
    windowHeight = $(window).height();
    
    $('.scroll_effect').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop);
        if(distance < windowHeight){
            $(this).addClass('add_scroll_effect');
        } else {
            $(this).removeClass('add_scroll_effect');
        }
    });
    
});




