jQuery(document).ready(function($){
//-menu toggle on click-//      
    $('#menuToggle').click(function(){
        $('#menuToggle').toggleClass('rotate');
        $('#menu').toggleClass( 'show', 600, 'swing' );
    });
// helper function for animations
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });


});