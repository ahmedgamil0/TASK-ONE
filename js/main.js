// $(window).scroll(function(){
//     let scrollTop = $(window).scrollTop()
//     if (scrollTop>200) {
//         $(".navbar").css("background-color","black")
//     } else {
        
//     }
// })



$(window).scroll(function(){
    let scrollTop =  $(window).scrollTop();
    if(scrollTop>200){
     $("#main-nav").css("background-color","black")
     $(".iconTop").fadeIn(1000)
    }
    else{
     $("#main-nav").css("background-color","transparent")
     $(".iconTop").fadeOut(1000)
    }
 })


 $(".iconTop").click(function(){
    $("html,body").animate({scrollTop  : "0px"} , {queue : false , duration:1000})
 })


