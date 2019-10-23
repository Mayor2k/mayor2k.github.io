//set .header-description width equal to navbar width
$(window).resize(function() {
    $(".header-description").width($(".container").width());
    //set maxHeight for images
    /*length = $(".h-100").children().length;
    maxHeight = 0;
    for(i=0;i<length;i++){
      a = $(".h-100").children().eq(i).height();
      if (i==0) {
        maxHeight = a;
      }else if (i!=0 && maxHeight>a && a!=0) {
        maxHeight = a;
      }else {
        continue;
      }
    }
    $(".h-100 img").css({"max-height":maxHeight});
    //do the same for gallery
    length = $(".carousel-item").children().length;
    maxHeight = 0;
    for(i=0;i<length;i++){
      a = $(".carousel-item").children().eq(i).height();
      if (i==0) {
        maxHeight = a;
      }else if (i!=0 && maxHeight>a && a!=0) {
        maxHeight = a;
      }else {
        continue;
      }
    }
    $(".carousel-item img").css({"max-height":maxHeight});*/
});

$(window).trigger('resize');
//lightbox requrement
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$('#carousel-custom').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
