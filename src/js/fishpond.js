// foot

$('.foot li').each((n, m)=>{
    $(m).click(function(){
        $('.foot a').each((k, v)=>{
            $(v).removeClass('active');
        })
        $(this).children().addClass('active');
    })

})