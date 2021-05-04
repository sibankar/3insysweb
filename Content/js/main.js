$( document ).ready(function() {
    var target = jQuery(this);
    var element = target.attr('href');
    jQuery("body, html").animate({
        scrollTop: jQuery(element).offset().top
    }, 300);
    return false;
});

