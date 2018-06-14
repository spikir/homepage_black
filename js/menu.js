$(document).ready(function(){
	var array = [];
	var slidearr = [];
	var slidePos = "";
	currentIndex1 = '';
	currentIndex2 = '';
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
		if(Array.isArray(array)) {
			for(var i = 0; i < array.length; i++) {
				if(Array.isArray(array[i])) {
					currentIndex1 = i;
					newItem = findIndex(valueToSearch, array[i]);
					if(newItem) {
						return newItem;
					}
				} else if(array[i]===valueToSearch) {
					currentIndex2=i+1;
					return currentIndex2;
				} 
			}
		}
	}
	
	$(document).scroll(function(e) {
		windowPos = $(window).scrollTop();
		array.forEach(function(item) {
			if(windowPos>=$(item).offset().top-700) {
				slidePos = findIndex(item, slidearr);
				if(slidearr[currentIndex1][1]===false) {
					e.preventDefault();
					$(item).animate({opacity:1 }, 1000);
					slidearr[currentIndex1][1]=true;
				}
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

