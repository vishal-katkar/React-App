$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});

$(window).scroll(function(){
    //Header
    if($(window).scrollTop()>= 100){
       $('.header').addClass('fixed-top');
    }
    else {
        $('.header').removeClass('fixed-top');
    }
    //Footer
      var navpanel = $('.bottom-nav');
      var panelHeight = navpanel.height() - 4;
      var footerHeight = $('.footer').height();
      if( $(document).height() - panelHeight - footerHeight <= $(window).scrollTop() + $(window).height() ) {
        navpanel.removeClass('fixed-bottom');
      } 
    else {
      navpanel.addClass('fixed-bottom');
      }
    
  });
  
   
  
  