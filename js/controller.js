// $(function() {
	

// 	$('.exp-section div').addClass('default');
	
// 		$('.exp-section div').on('click', function() {
	
// 	  	var e = $('.exp-section > div');
// 			if(e.hasClass('expand')){
// 				 e.removeClass('expand');
// 			 	$(this).addClass('expand');
// 			} else { $(this).addClass('expand'); }
// 		})
// })

$(function() {
    $('.exp-section div').addClass('default');

    $('.exp-section div').hover(
        function() {
            $('.exp-section > div').removeClass('expand');
            $(this).addClass('expand');
        },
        function() {
            // This function is triggered when the mouse leaves the element
            // If you want any specific behavior on hover out, you can add it here
        }
    );
});
