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
        
    (function() {
      // Tutorial: https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27
      window.addEventListener('scroll', function(event) {
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll("[data-type='parallax']");
        for (i = 0, len = layers.length; i < len; i++) {
          layer = layers[i];
          depth = layer.getAttribute('data-depth');
          movement = -(topDistance * depth);
          translate3d = 'translate3d(0, ' + movement + 'px, 0)';
          layer.style['-webkit-transform'] = translate3d;
          layer.style['-moz-transform'] = translate3d;
          layer.style['-ms-transform'] = translate3d;
          layer.style['-o-transform'] = translate3d;
          layer.style.transform = translate3d;
        }
      });

    }).call(this);

        
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
    $('#container').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop);
        if(distance > 120){
            $('#container').removeClass('MenuHidden');
        } else{
            $('#container').addClass('MenuHidden');
        }
    });        
    
    windowHeight = $(window).height();
    
    $('.scroll_effect').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop);
        if(distance < 350){
            $(this).addClass('add_scroll_effect');
        } else {
            $(this).removeClass('add_scroll_effect');
        }
    });

    $('.width_effect').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop);
        if(distance < 350){
            $(this).addClass('add_width_effect');
        } else {
            $(this).removeClass('add_width_effect');
        }
    });

    $('.section').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop);
        if(distance > 350){
            var menuID = $(this).attr('id');
            $('.side-submenu ul li').removeClass('active');
            $('.' + menuID).addClass('active');
        } 
    });
    
    
});

//$(function() {
//    $('[href^=#]').not('#carousel-example-generic a').click(function () {
//		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
//			var i = $(this.hash);
//			if (i = i.length ? i : $("[name=" + this.hash.slice(1) + "]"), i.length) return $("html,body").animate({
//				scrollTop: i.offset().top 
//			}, 1e3), !1
//		}
//	})
//});
