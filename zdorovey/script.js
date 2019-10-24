
//set .header-description width equal to navbar width
$(window).resize(function() {
    $(".header-description").width($(".container").width());
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
//set fixed button
function scrollFunction() {
  if (document.documentElement.scrollTop>100) {
    document.getElementById("myBtn").style.display = "block";
  }else {
    document.getElementById("myBtn").style.display = "none";
  }
  this.oldScroll = this.scrollY;
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollFunction()
};
