// foot

$('.foot li').each((n, m)=>{
    $(m).click(function(){
        $('.foot a').each((k, v)=>{
            $(v).removeClass('active');
        })
        $(this).children().addClass('active');
    })

})


$('.box').scroll(function(){
	let t = $('.box').scrollTop();
	if(t > 200){
		$('.title').css('display','block')
		
	}else{
		$('.title').css('display','none')

	}
})