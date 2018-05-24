// foot

$('.foot li').each((n, m)=>{
    $(m).click(function(){
        $('.foot a').each((k, v)=>{
            $(v).removeClass('active');
        })
        $(this).children().addClass('active');
    })

})


window.onscroll =function(){
	var t = document.documentElement.scrollTop;
	if( t >= 20){
		$('.title').css('display','block')
	}else{
		$('.title').css('display','none')
	}
}