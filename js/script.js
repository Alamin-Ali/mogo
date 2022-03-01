$(function(){

   $('.banner-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      });

      $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
       $('.member-1').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
     arrows: false,
      // pauseOnHovere:false,
     responsive: [
         {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
           
          }
       
        }
       
      ]
      
    });
    
    $('.number').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
     arrows: false,
    
    })

//      $('.member').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//        arrows: false,
//        pauseOnHovere:false,
//        responsive: [
//         {
//            breakpoint: 768,
//            settings: {
//              slidesToShow: 1,
//              slidesToScroll: 1,
//              infinite: true,
           
// }
       
//         }
       
//       ]
//     });
    //====strat====*////
    //   $('.member').slick({
    //   slidesToShow: 3,
    //    slidesToScroll: 1,
    //    autoplay: true,
    //    autoplaySpeed: 2000,
    //  arrows: false,
    //   pauseOnHovere:false,
    //  responsive: [
    //     {
    //       breakpoint: 768,          settings: {
    //         slidesToShow: 1,
    //        slidesToScroll: 1,
    //        infinite: true,
           
    //       }
       
    //     }
       
    //   ]
    // });
  //  $('.member').slick({
  //        slidesToShow: 3,
  //     slidesToScroll: 3,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //    arrows: false,
  //    // pauseOnHovere:false,
  //     responsive: [
  //       {
  //         breakpoint: 991,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           infinite: true,
  //              }
       
  //       }
       
  //   ]
  //  });

// //----star trop stop----//

$(window).scroll(function(){
var top = $(this).scrollTop()
if(top > 300){
  $(".navbar").addclass("sticky-menu")
}else{
  $(".navbar").removeClass("sticky-menu")
}



})



//----star trop stop----//
//----star trop stop----//
//----star trop stop----//











})