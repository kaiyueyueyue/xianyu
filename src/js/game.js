// tab
console.log($('.tab-title li'))
$('.tab-title li').each(function(k, v){

	$(v).click(function(){
		var l = $(this).offset().left + 'px';
		$('.tab-title img').animate({'left': l})

		$('.tab-list .content').each(function(n, m){
			$(m).removeClass('active');
		})
		// console.log($('.tab-list .content')[k])
		$($('.tab-list .content')[k]).addClass('active');
	})
})