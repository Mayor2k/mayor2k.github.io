$(function(){
  new WOW().init();
});
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
//datapicker
!function(a){a.fn.datepicker.dates.ru={days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вск","Пнд","Втр","Срд","Чтв","Птн","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",format:"dd.mm.yyyy",weekStart:1,monthsTitle:"Мсяцы"}}(jQuery);

$('#validationCustom04').datepicker({
    uiLibrary: 'bootstrap4',
    isRTL: false,
    format: 'dd.mm.yyyy',
    autoclose: true,
    language: 'ru'
});

$('#validationCustom05').datepicker({
    uiLibrary: 'bootstrap4',
    isRTL: false,
    format: 'dd.mm.yyyy',
    autoclose: true,
    language: 'ru'
});
