$(document).ready(function(){
	var array = [];
	var slidearr = [];
	var slidePos = "";
	var currentIndex1 = '';
	var currentIndex2 = '';
	var slidePos = '';
	
	$('.navi li a[href="#home"]').parent().addClass("active");
	
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
	
	$('html, body').animate({ 
		scrollTop: 0
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
	
	$(document).scroll(function() {
		windowPos = $(window).scrollTop();
		array.forEach(function(item) {
			if(windowPos>=$(item).offset().top-700) {
				slidePos = findIndex(item, slidearr);
				if(slidearr[currentIndex1][slidePos]===false) {
					slidearr[currentIndex1][slidePos]=true;
					$(item).fadeTo(3000, 1);
				}
			}
			if(windowPos>=$(item).offset().top-70 && windowPos<=$(item).offset().top+$(item).height()) {
				$('.navi').find('.active').removeClass('active');
				$('.navi li a[href="'+item+'"]').parent().addClass("active");
			} else if(windowPos==$(document).height() - $(window).height() || windowPos==$(document).height() - $(window).height()-1) {
				$('.navi').find('.active').removeClass('active');
				$('.navi li a[href="#contact"]').parent().addClass("active");
			}
		});
	});
}); 

