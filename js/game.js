"use strict";console.log($(".tab-title li")),$(".tab-title li").each(function(e,t){$(t).click(function(){var t=$(this).offset().left+"px";$(".tab-title img").animate({left:t}),$(".tab-list .content").each(function(t,e){$(e).removeClass("active")}),console.log($(".tab-list .content")[e]),$($(".tab-list .content")[e]).addClass("active")})});