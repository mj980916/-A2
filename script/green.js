$(function(){
    $(".main>li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown()
    }, function(){
        $(".sub, .sub_bg").stop().slideUp()
    })//hover

    var n = 0;
    setInterval(function(){
        if(n == 2){
            n=0;
        }else{
            n++;
        }//if
        console.log(n)

        $(".left_move").animate({left: n * (-1200) + "px" } , 500)

    },3000)//setIn

    $(".popup").click(function(){
        $(".modal, .pop").fadeIn();
    })
    $(".close").click(function(){
        $(".modal, .pop").fadeOut();
    })

})//jQ fin.