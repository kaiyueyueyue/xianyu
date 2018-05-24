
$('.tab li').each(function(z,x){

    $(x).click(function() {
        $($('.tab a')[z]).css('font-weight', '100')

        $('.list-box .list-1').addClass('active')
        $($('.list-box .list-1')[z]).removeClass('active')
    })
})

$('.tab li:first').click(function(){
    $('.tab img').animate({"left":"0.63rem"});
    $(this).find('a').css('font-weight',900);
})
$('.tab li:last').click(function(){
    $('.tab img').animate({"left":"2.51rem"});
    $(this).find('a').css('font-weight',900);
})

