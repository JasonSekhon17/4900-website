(function ($) {
 "use strict";

/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();

/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--------------------------
        jQuery scroll Nav
    ---------------------------- */
    $('.primary-menu').onePageNav({
        scrollOffset: 60
    });


/*--------------------------
    jQuery sticky
---------------------------- */

    $("#sticky-div").sticky({
        topSpacing: 0
    });



})(jQuery);
