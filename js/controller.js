$(function() {
	

	$('.exp-section div').addClass('default');
	
		$('.exp-section div').on('click', function() {
	
	  	var e = $('.exp-section > div');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})
})