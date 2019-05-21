
  // nav bar 

  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
     
      if (scroll > 30 && scroll > 50 ) {
        $(".black").css("background" , "#02020247");
      }
     
      else{
        $(".black").css("background" , "");  	
      }
    })
  })
  

  