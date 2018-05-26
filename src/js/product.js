//倒计时  没看
function countTime() {  
    //获取当前时间  
    var date = new Date();  
    var now = date.getTime();  
    //设置截止时间  
    var endDate = new Date("2018-10-22 23:23:23");  
    var end = endDate.getTime();  
    //时间差  
    var leftTime = end-now;  
    //定义变量 d,h,m,s保存倒计时的时间  
    var d,h,m,s;  
    if (leftTime>=0) {  
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);                     
    }  
    //将倒计时赋值到div中  
    if(s<10){
        s = ''+ 0 + s;
    }
    if(m<10){
       m = ''+ 0 + m;
    }
    if(h<10){
        h = ''+ 0 + h;
    }
 	$("#h").html(h);  
    $("#m").html(m);  
    $("#s").html(s);
    //递归每秒调用countTime方法，显示动态时间效果  
    setTimeout(countTime,1000);  
}
countTime();

// tab
console.log($('.prject li'))
$('.project li').each(function(k, v){

	$(v).click(function(){
		var l = $(this).offset().left + 'px';
		$('.project img').animate({'left': l})

		$('.project-list .list-1').each(function(n, m){
			$(m).removeClass('active');
		})
		// console.log($('.project-list li')[k]);
		$($('.project-list .list-1')[k]).addClass('active');
		if(k != 0){
			$('header').css('height','0.9rem')
		}else{
			$('header').css('height','2.6rem')

		}
	})
})

$('#top').click(function(){
	$('html,body').animate({scrollTop:0},500)
})
window.onscroll =function(){
	var t = document.documentElement.scrollTop;
	if( t >= 200){
		$('#top').css("display",'block')
	}else{
		$('#top').css("display",'none')
	}

	
}