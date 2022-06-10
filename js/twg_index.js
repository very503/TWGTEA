$(function(){
    var wd = $(window).width();
    var mainG = $('.mnGroup');
    var auto = setInterval(leftslide,1000);

    function leftslide(){
        i++;
        i=i%3;
        mainG.css({ marginLeft : i*-100+'%'});
    };
    function rightslide(){
        i++;
        i=(3+i)%3;
        mainG.css({ marginLeft : i*-100+'%'});
    };
    function stopSlide(){
        clearInterval(auto);
    };
    function playSlide(){
        auto = setInterval(leftslide,1000);
    };


    if(wd > 1024){
        $(window).scroll(function(){
            var rol = $(window).scrollTop();
            console.log(rol);
            if(rol>=1000){
                $('.cnt01 .images').css('opacity','1');
            }
            if(rol>=1000){
                $('.cnt01 .artTop .images').find('.i1').animate({
                    marginLeft: '0%'
                },700);
            }
            if(rol>=1200){
                $('.cnt01 .artTop .images').find('.i2').animate({
                    marginRight: '0%'
                },1000);
            }
            if(rol>=1800){
                $('.cnt01 .artMid .images').find('.i3').animate({
                    right: '0%'
                },700);
            }
            if(rol>=2200){
                $('.cnt01 .artBtm .images').find('.i4').animate({
                    marginLeft: '0%'
                },700);
                $('.cnt01 .artBtm .images').find('.i5').animate({
                    marginRight: '0%'
                },1300);
                
            }
        });
    };

});