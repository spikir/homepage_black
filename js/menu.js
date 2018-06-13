$(document).ready(function(){
	var array = [];
	var slidearr = [];
	var slidePos = "";
	currentIndex = '';
	var slidePos = '';
	
	$(".navi li a").click(function(){
		$(".navi").find(".active").removeClass('active');
		$(this).parent().addClass("active");
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 50
		}, 500);
	});
	
	$(".navi li a").each(function(){
		array.push($(this).attr("href"));
		slidearr.push([$(this).attr("href"), false]);
	});
	
	function findIndex(valueToSearch, array) {
		if(Array.isArray(array[i])) {
			for(var i = 0; i < array.length; i++) {
				if(Array.isArray(array[i])) {
					newIndex = findIndex(valueToSearch, array[i]);
					if (newIndex) {
						return newIndex;
					} else if (array[i] == valueToSearch) {
					   return currentIndex + i;
				   }
				} else if (array[i] == valueToSearch) {
					return currentIndex + i;
				}
			}
	}
	
	$(document).scroll(function(item) {
		windowPos = $(window).scrollTop();
		array.forEach(function(item) {
			if(windowPos>=$(item).offset().top-700) {
				$(item).fadeTo('slow', 1);
				slidePos = findIndex(item, slidearr);
				console.log(slidePos);
				
			}
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