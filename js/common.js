$(function(){
    //헤더는 inc에서 따로 불러오므로 헤더안에 로딩되는것들은 콜백함수 안에 넣어야함.
    
    $('.hdr').load('./inc/header.html',function(){
        $('.menu>li').eq(2).click(function(){
            $('.menuBoxWrap').toggleClass('on');
         });
    });

    $('.ftr').load('./inc/footer.html',function(){
           //푸터에서 발생될 이벤트들
    });
});