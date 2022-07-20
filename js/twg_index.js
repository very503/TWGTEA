$(function(){
    var wd = $(window).width();
    var i = 0;
    var ind = 0;
    var mainG = $('.mnGroup');
    var auto = setInterval(rightSlide,3000);

    mainG.find('.mn:last').prependTo(mainG);
    mainG.css({ marginLeft : '-100%' });
    $('.control>.btns>li:eq(0)').click(leftSlide);
    $('.control>.btns>li:eq(1)').click(rightSlide);
    $('.control>.btns>li:eq(2)').click(stopSlide);
    


    function leftSlide(){
        //무한루프
        mainG.stop().animate({
            marginLeft : '0%'
        },2000,function(){
            mainG.find('.mn:last').prependTo(mainG);
            mainG.css({marginLeft : '-100%'});
        });

        ind =  mainG.find('.mn:eq(0)').attr('data-num');

         //바
         bar4.find('.bar .barbg').css({
            width : ind*33.33+'%',
            height : '5px',
            backgroundColor : '#333',
            transition : 'all 0.5s'
        });
        if(ind == 3){
            $('.cnt01 .bar').find('.bar .barbg').css({display:'none'});
            setTimeout(function(){
                $('.cnt01 .bar').find('.bar .barbg').css({display:'block'})
            },200);
        };
    };
    function rightSlide(){
        mainG.stop().animate({
            marginLeft : '-200%'
        },2000,function(){
            mainG.find('.mn:first').appendTo(mainG);
            mainG.css({marginLeft : '-100%'});
        });

        ind =  mainG.find('.mn:eq(2)').attr('data-num');

         //바
         bar4.find('.bar .barbg').css({
            width : ind*33.33+'%',
            height : '5px',
            backgroundColor : '#333',
            transition : 'all 0.5s'
        });
        if(ind == 3){
            $('.cnt01 .bar').find('.bar .barbg').css({display:'none'});
            setTimeout(function(){
                $('.cnt01 .bar').find('.bar .barbg').css({display:'block'})
            },200);
        };
    };
    function stopSlide(){
        clearInterval(auto);
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