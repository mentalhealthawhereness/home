jQuery(document).ready(function($) {

    //Custom navicon
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('triggered');
        $("#navigation").toggleClass('fixed');
    });
});