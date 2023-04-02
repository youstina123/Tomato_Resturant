$(document).ready(function(){
    $(".fa-star").click(function(){
        //$(".fa-star").css("color","black")
        $(this).css("color","#f6b61b")
        $(this).prevAll().css("color","#f6b61b")
    })

    $(".dots").click(function(){
        $(".dots").css("background-color","")
        $(this).css( "background-color", "#f6b61b")

    })
    

    var carouselwidth=$('.carousel-inner')[0].scrollWidth;
    var cardwidth=$('.carousel-item').width();
    var scrollposition=0
    $('.carousel_control_next').on('click',function(){
        if(scrollposition<(carouselwidth-(cardwidth*4))){
            console.log("nex")
            scrollposition=scrollposition+cardwidth;
            $('.carousel-inner').animate({scrollLeft:scrollposition},600);
        }   
    })
    $('.carousel_control_prev').on('click',function(){
        if(scrollposition>0){
            console.log("pre")
            scrollposition=scrollposition-cardwidth;
            $('.carousel-inner').animate({scrollLeft:scrollposition},600);
        }
    })
})









