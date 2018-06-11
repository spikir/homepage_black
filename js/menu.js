$(document).ready(function(){
	var active = "";
	var array = [];
	
	
	$(".navi li a").click(function(){
		$(active).removeClass("active");
		$(this).parent().addClass("active");
		active = $(this).parent();
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
				$('.navi li').find('.active').removeClass('active');
				$('.navi li a[href="'+item+'"]').addClass("active");
			} else if(windowPos==$(document).height() - $(window).height() ) {
				$('.navi li').find('.active').removeClass('active');
				$('.navi li a[href="#contact"]').addClass("active");
			}
		});
	});
}); 