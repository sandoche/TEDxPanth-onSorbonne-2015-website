$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 



    $(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.navbar').addClass('shrink');
    }
    else {
        $('.navbar').removeClass('shrink'); }
    });

});
