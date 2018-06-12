$(document).ready(function(){
	var array = [];
	
	
	$(".navi li a").click(function(){
		$(".navi").find(".active").removeClass('active');
		$(this).parent().addClass("active");
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 50
		}, 500);
	});
	
	$(".navi li a").each(function(){
		array.push($(this).attr("href"));
	});
	
	$(document).scroll(function(item) {
		windowPos = $(window).scrollTop();
		array.forEach(function(item) {
			if(windowPos>=$(item).offset().top-70) {
				$('.navi').find('.active').removeClass('active');
				$('.navi li a[href="'+item+'"]').parent().addClass("active");
			} else if(windowPos==$(document).height() - $(window).height() || windowPos==$(document).height() - $(window).height()-1) {
				$('.navi').find('.active').removeClass('active');
				$('.navi li a[href="#contact"]').parent().addClass("active");
			}
		});
	});
}); 