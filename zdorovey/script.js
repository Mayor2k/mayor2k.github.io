//set .header-description width equal to navbar width
$(window).resize(function() {
    $(".header-description").width($(".container").width());
});

$(window).trigger('resize');
//work with nav-pills
