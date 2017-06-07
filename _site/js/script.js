//swipe patch
$(document).ready(function(){
	$(".carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});
});
//carousel timer
$(document).ready(function(){
	$('.carousel').carousel({
  interval: false
  })
})
//change with carousel
$(document).ready(function(){
	$("#carousel").on("slid.bs.carousel",function(event){
		var count = $("#header div.active").index()
		switch (count) {
			case 0:
				$(".nav-tabs a:eq(0)").tab("show")
				$(".")
				break;
			case 1:
				$(".nav-tabs a:eq(1)").tab("show")
				break;
			case 2:
				$(".nav-tabs a:eq(2)").tab("show")
				break;
			case 3:
				$(".nav-tabs a:eq(3)").tab("show")
				break;
			default:
			  console.log("Error, index not found")
		}
	})
})
//navbar fixed
$(document).ready(function(offset){
	var carouselPixels = $("#carousel").height()
	$(document).scroll(function(){
		if (window.pageYOffset > carouselPixels/2){
			$(".navbar-custom").hide("slow")
		}
		else {
			$(".navbar-custom").show("slow")
		}
	})
})
