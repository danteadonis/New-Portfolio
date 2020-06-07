// jQuery
$(document).ready(function(){
  $('#getInTouch').hide();
  $(window).scroll(function(){
    $('.slideanim').each(function(){
      var pos= $(this).offset().top;
      var windowTop= $(window).scrollTop();

      if(pos < windowTop + 400){
        $(this).addClass('slide');
        $('#getInTouch').show(1000);
      }
    });
    $('footer').each(function(){
      var position= $(this).offset().top;
      var winTop= $(window).scrollTop();

      if(position < winTop + 1100){
        $(this).addClass('slide');
      }
    })
  });

  $('.nav-link').click(function(){
    $(this).toggleClass('active');
  });
});
