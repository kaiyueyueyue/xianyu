
$('.tab li').each(function(z,x){

    $(x).click(function() {
        $('.list-box .list-1').addClass('active')
        $($('.list-box .list-1')[z]).removeClass('active')
    })
})

$('.tab li:first').click(function(){
    $('.tab img').animate({"left":"0.63rem"});
})
$('.tab li:last').click(function(){
    $('.tab img').animate({"left":"2.51rem"});
})



// banner
let liWidth = $('.banner li').width();
// console.log($('.banner li')[0]);
// let newLi = $('.banner li')[0];
// $('.banner').append(newLi);
// console.log($('.banner li'))
$('.banner').css('width',$('.banner li ').length * liWidth + 'px' )

let index = 0;
let pointIndex = 0;
function rightMove(){
	index++;
	if(index >= $('.banner li').length){
		index = 1;
		$('.banner').css('left',0)
	}
	$('.banner').stop(true,true).animate({'left':-index * liWidth + 'px' });


	pointIndex++;
	if(pointIndex >= $('.point a').length){
		pointIndex = 0;
	}
	// console.log(pointIndex)
	$('.point a').each((k, v)=>{$(v).removeClass('bg')})
	$($('.point a')[pointIndex]).addClass('bg');
}
// function leftMove(){
// 	index--;
// 	if(index <= 0){
// 		index = $('.banner li').length - 2;
// 		$('.banner').css('left',-index * $('.banner li').length - 1)
// 	}
// 	$('.banner').stop(true,true).animate({'left':-index * liWidth + 'px' });


// 	pointIndex--;
// 	if(pointIndex <= 0){
// 		pointIndex = $('.point a').length - 1 ;
// 	}
// 	$('.point a').each((k,v)=>{$(v).removeClass('bg')})
// 	$($('.point a')[pointIndex]).addClass('bg');
// }

// 给小按钮添加鼠标进入事件
$('.point a').each((k,v)=>{
	$(v).mouseover(function(){
		pointIndex = k;
		$('.point a').each((k,v)=>{$(v).removeClass('bg')})
		$($('.point a')[pointIndex]).addClass('bg');

		index = k;
		$('.banner').stop(true,true).animate({'left':-index * liWidth + 'px' });
	})
})


let timer = null;
function autoMove(){
	timer = setInterval(function(){
		rightMove();
	},2000);
}
autoMove();

$('.banner-box').mouseover(()=>{
	clearInterval(timer);
})
$('.banner-box').mouseout(()=>{
	autoMove();
})

// foot

$('.foot li').each((n, m)=>{
    $(m).click(function(){
        $('.foot a').each((k, v)=>{
            $(v).removeClass('active');
        })
        $(this).children().addClass('active');
    })

})