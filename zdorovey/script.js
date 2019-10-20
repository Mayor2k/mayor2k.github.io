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
    $(".h-100 img").css({"max-height":maxHeight});*/
});

$(window).trigger('resize');
