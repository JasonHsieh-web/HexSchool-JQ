$(document).ready(function(){
    
   //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    
    loop: true,
    autoplay: {
        delay: 2000,
      },
      speed: 1000,
      followFinger:false,
      //取消滑鼠滾動
      allowTouchMove:false,

  })

  lightbox.option({
    'resizeDuration': 600,
    'wrapAround': true,
    'disableScrolling':true
    //打開圖示禁止頁面滾動
  })


  $('.btn').click(function (e) { 
    e.preventDefault();
  });

  $('.top').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
      scrollTop:0
    },1000);
  
    })


    $('.dropdown').click(function (e) { 
      e.preventDefault();
    
      
      $(this).parent().find('.drop-open').slideToggle(600);//找到父節點，在往下找指定ul，打開
      
    });
 
})