$(document).ready(function() {
    /* 1 */
    $(window).scroll( function(){
        /* 2 */
        $('.toyproject_box').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });

    $(window).scroll( function(){
        /* 2 */
        $('.toyproject_box2').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });

    $(window).scroll( function(){
        /* 2 */
        $('.toyproject_box3').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });

    $(window).scroll( function(){
        /* 2 */
        $('.toyproject_box4').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });
});
